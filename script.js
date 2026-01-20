// Telegram настройки
const TELEGRAM_CONFIG = {
    BOT_TOKEN: '7658490450:AAGtn1X76jvQ4y6Do6Nz258ZXqCLSS5d2h0',
    CHAT_ID: '-1003623663083'
};

// Конфигурация теста
const CONFIG = {
    TOTAL_QUESTIONS: 10,
    QUESTIONS_PER_TEST: 10
};

// База вопросов (25 вопросов)
const QUESTIONS_DATABASE = [
    {
        id: 1,
        question: "Перед тренировкой обязательно делают:",
        options: ["Разминку", "Заминку", "Силовые упражнения", "Растяжку"],
        correct: 0,
        category: "Основы"
    },
    {
        id: 2,
        question: "Сколько раз в неделю нужно заниматься физкультурой?",
        options: ["1 раз", "2-3 раза", "Только на уроках", "Ежедневно"],
        correct: 1,
        category: "Основы"
    },
    {
        id: 3,
        question: "Что измеряют для контроля нагрузки?",
        options: ["Вес", "Рост", "Пульс", "Давление"],
        correct: 2,
        category: "Основы"
    },
    {
        id: 4,
        question: "Упражнение для развития гибкости:",
        options: ["Приседание", "Наклон вперед", "Отжимание", "Прыжки"],
        correct: 1,
        category: "Основы"
    },
    {
        id: 5,
        question: "Сколько подходов в силовой тренировке?",
        options: ["1-2", "3-4", "5-6", "7-8"],
        correct: 1,
        category: "Основы"
    },
    {
        id: 6,
        question: "Тренировка на выносливость называется:",
        options: ["Силовая", "Кардио", "Стретчинг", "Йога"],
        correct: 1,
        category: "Основы"
    },
    {
        id: 7,
        question: "Что развивает плавание?",
        options: ["Только руки", "Только ноги", "Все мышцы", "Только спину"],
        correct: 2,
        category: "Основы"
    },
    {
        id: 8,
        question: "Важный витамин для спортсменов:",
        options: ["Витамин А", "Витамин В", "Витамин С", "Витамин D"],
        correct: 3,
        category: "Основы"
    },
    {
        id: 9,
        question: "Что такое разминка?",
        options: ["Основная часть", "Подготовка", "Завершение", "Отдых"],
        correct: 1,
        category: "Основы"
    },
    {
        id: 10,
        question: "Нормальный пульс в покое:",
        options: ["40-60", "60-80", "80-100", "100-120"],
        correct: 1,
        category: "Основы"
    }
];

// Состояние приложения
let state = {
    user: null,
    currentQuestion: 0,
    answers: [],
    testQuestions: [],
    testId: null,
    startTime: null
};

// DOM элементы
const elements = {
    screens: {
        welcome: document.getElementById('screen-welcome'),
        login: document.getElementById('screen-login'),
        test: document.getElementById('screen-test'),
        results: document.getElementById('screen-results')
    },
    buttons: {
        start: document.getElementById('start-btn'),
        login: document.getElementById('login-btn'),
        prev: document.getElementById('prev-btn'),
        next: document.getElementById('next-btn'),
        submit: document.getElementById('submit-btn'),
        retry: document.getElementById('retry-btn'),
        home: document.getElementById('home-btn')
    },
    inputs: {
        fullname: document.getElementById('fullname'),
        class: document.getElementById('class')
    },
    test: {
        counter: document.getElementById('question-counter'),
        progress: document.getElementById('progress-fill'),
        questionText: document.getElementById('question-text'),
        options: document.getElementById('options')
    },
    results: {
        percent: document.getElementById('score-percent'),
        subtitle: document.getElementById('result-subtitle'),
        name: document.getElementById('result-name'),
        date: document.getElementById('result-date'),
        score: document.getElementById('result-score'),
        circle: document.getElementById('score-circle')
    },
    telegramStatus: document.getElementById('telegram-status'),
    telegramSendStatus: document.getElementById('telegram-send-status')
};

// ==================== ТЕЛЕГРАМ ФУНКЦИИ ====================

// Проверка подключения к Telegram
async function checkTelegramConnection() {
    try {
        console.log('🔌 Проверка Telegram...');
        
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_CONFIG.BOT_TOKEN}/getMe`);
        const data = await response.json();
        
        if (data.ok) {
            console.log('✅ Telegram бот доступен:', data.result.username);
            return true;
        } else {
            console.error('❌ Ошибка Telegram:', data);
            return false;
        }
    } catch (error) {
        console.error('❌ Ошибка подключения:', error);
        return false;
    }
}

// Отправка результата в Telegram (формат: ФИО, класс, балл)
async function sendToTelegram(results) {
    console.log('📤 Отправка в Telegram...');
    
    // Простой формат: ФИО, класс, балл
    const message = `🎓 ${state.user.name}, ${state.user.class} класс — ${results.correct}/${results.total} (${results.percentage}%, ${results.grade})`;
    
    try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_CONFIG.BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CONFIG.CHAT_ID,
                text: message,
                parse_mode: 'HTML',
                disable_notification: false
            })
        });
        
        const data = await response.json();
        
        if (data.ok) {
            console.log('✅ Успешно отправлено в Telegram!');
            console.log('📨 ID сообщения:', data.result.message_id);
            
            // Показываем успех
            updateTelegramSendStatus('success', '✅ Результат отправлен учителю!');
            return { success: true, messageId: data.result.message_id };
        } else {
            console.error('❌ Ошибка Telegram:', data);
            updateTelegramSendStatus('error', '❌ Ошибка отправки');
            return { success: false, error: data.description };
        }
        
    } catch (error) {
        console.error('❌ Сетевая ошибка:', error);
        updateTelegramSendStatus('error', '❌ Ошибка сети');
        return { success: false, error: error.message };
    }
}

// Обновление статуса отправки
function updateTelegramSendStatus(type, message) {
    if (!elements.telegramSendStatus) return;
    
    elements.telegramSendStatus.innerHTML = `
        <i class="fab fa-telegram"></i>
        <span>${message}</span>
    `;
    
    elements.telegramSendStatus.className = 'telegram-send-status ' + type;
}

// ==================== ОСНОВНАЯ ЛОГИКА ====================

// Инициализация
async function init() {
    console.log("🚀 Инициализация приложения...");
    
    try {
        // Восстановление пользователя
        const savedUser = localStorage.getItem('fizraUser');
        if (savedUser) {
            state.user = JSON.parse(savedUser);
            elements.inputs.fullname.value = state.user.name;
            elements.inputs.class.value = state.user.class;
        }
        
        // Обработчики событий
        setupEventListeners();
        
        // Проверка Telegram
        const telegramConnected = await checkTelegramConnection();
        if (telegramConnected && elements.telegramStatus) {
            elements.telegramStatus.innerHTML = `
                <i class="fab fa-telegram"></i>
                <span>Telegram готов к отправке</span>
            `;
        }
        
        showScreen('welcome');
        
    } catch (error) {
        console.error("❌ Ошибка инициализации:", error);
        showNotification("Ошибка загрузки приложения", "error");
    }
}

// Настройка обработчиков
function setupEventListeners() {
    elements.buttons.start.addEventListener('click', showLoginScreen);
    elements.buttons.login.addEventListener('click', handleLogin);
    elements.buttons.prev.addEventListener('click', prevQuestion);
    elements.buttons.next.addEventListener('click', nextQuestion);
    elements.buttons.submit.addEventListener('click', submitTest);
    elements.buttons.retry.addEventListener('click', restartTest);
    elements.buttons.home.addEventListener('click', goHome);
    
    document.addEventListener('keydown', handleKeyPress);
}

// Показать экран
function showScreen(screenName) {
    Object.values(elements.screens).forEach(screen => {
        screen.classList.remove('active');
    });
    elements.screens[screenName].classList.add('active');
}

// Показать экран входа
function showLoginScreen() {
    showScreen('login');
    elements.inputs.fullname.focus();
}

// Обработка входа
function handleLogin() {
    const name = elements.inputs.fullname.value.trim();
    const className = elements.inputs.class.value;
    
    if (!name) {
        showNotification("Введи фамилию и имя", "warning");
        elements.inputs.fullname.focus();
        return;
    }
    
    if (!className) {
        showNotification("Выбери класс", "warning");
        elements.inputs.class.focus();
        return;
    }
    
    state.user = {
        name: name,
        class: className,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('fizraUser', JSON.stringify(state.user));
    startTest();
}

// Начать тест
function startTest() {
    state.currentQuestion = 0;
    state.answers = [];
    state.testQuestions = getRandomQuestions();
    state.testId = Date.now().toString();
    state.startTime = new Date();
    
    showScreen('test');
    showQuestion();
}

// Получить случайные вопросы
function getRandomQuestions() {
    const shuffled = [...QUESTIONS_DATABASE].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, CONFIG.TOTAL_QUESTIONS);
    
    selected.forEach(q => {
        const correct = q.options[q.correct];
        const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
        q.correct = shuffledOptions.indexOf(correct);
        q.options = shuffledOptions;
    });
    
    return selected;
}

// Показать вопрос
function showQuestion() {
    const question = state.testQuestions[state.currentQuestion];
    
    elements.test.counter.textContent = `Вопрос ${state.currentQuestion + 1}/${CONFIG.TOTAL_QUESTIONS}`;
    
    const progress = ((state.currentQuestion + 1) / CONFIG.TOTAL_QUESTIONS) * 100;
    elements.test.progress.style.width = `${progress}%`;
    
    elements.test.questionText.textContent = question.question;
    
    elements.test.options.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option option-slide';
        optionElement.style.animationDelay = `${index * 0.1}s`;
        
        if (state.answers[state.currentQuestion] === index) {
            optionElement.classList.add('selected');
        }
        
        optionElement.innerHTML = `
            <div class="option-letter">${String.fromCharCode(65 + index)}</div>
            <div class="option-text">${option}</div>
        `;
        
        optionElement.addEventListener('click', () => selectAnswer(index));
        elements.test.options.appendChild(optionElement);
    });
    
    elements.buttons.prev.style.display = state.currentQuestion > 0 ? 'flex' : 'none';
    elements.buttons.next.style.display = state.currentQuestion < CONFIG.TOTAL_QUESTIONS - 1 ? 'flex' : 'none';
    elements.buttons.submit.style.display = state.currentQuestion === CONFIG.TOTAL_QUESTIONS - 1 ? 'flex' : 'none';
    elements.buttons.next.disabled = state.answers[state.currentQuestion] === undefined;
}

// Выбрать ответ
function selectAnswer(index) {
    state.answers[state.currentQuestion] = index;
    
    const options = elements.test.options.querySelectorAll('.option');
    options.forEach((opt, i) => {
        opt.classList.remove('selected');
        if (i === index) {
            opt.classList.add('selected');
            opt.style.animation = 'pulse 0.5s ease';
            setTimeout(() => opt.style.animation = '', 500);
        }
    });
    
    elements.buttons.next.disabled = false;
}

// Предыдущий вопрос
function prevQuestion() {
    if (state.currentQuestion > 0) {
        state.currentQuestion--;
        showQuestion();
    }
}

// Следующий вопрос
function nextQuestion() {
    if (state.currentQuestion < CONFIG.TOTAL_QUESTIONS - 1 && state.answers[state.currentQuestion] !== undefined) {
        state.currentQuestion++;
        showQuestion();
    }
}

// Обработка клавиш
function handleKeyPress(e) {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'SELECT') {
        if (e.key === 'ArrowLeft') prevQuestion();
        if (e.key === 'ArrowRight') nextQuestion();
        if (e.key >= '1' && e.key <= '4') selectAnswer(parseInt(e.key) - 1);
    }
}

// Завершить тест
function submitTest() {
    const unanswered = state.answers.filter(a => a === undefined).length;
    if (unanswered > 0) {
        if (!confirm(`Ты ответил не на все вопросы (осталось ${unanswered}). Завершить тест?`)) {
            return;
        }
    }
    
    const results = calculateResults();
    showResults(results);
    
    // Отправляем в Telegram
    sendToTelegram(results);
}

// Рассчитать результаты
function calculateResults() {
    let correct = 0;
    state.testQuestions.forEach((q, i) => {
        if (state.answers[i] === q.correct) {
            correct++;
        }
    });
    
    const percentage = Math.round((correct / CONFIG.TOTAL_QUESTIONS) * 100);
    const now = new Date();
    const timeSpent = Math.round((now - state.startTime) / 1000);
    
    let grade = '3';
    let gradeText = 'Удовлетворительно';
    if (correct >= 8) {
        grade = '5';
        gradeText = 'Отлично';
    } else if (correct >= 6) {
        grade = '4';
        gradeText = 'Хорошо';
    }
    
    return {
        correct: correct,
        total: CONFIG.TOTAL_QUESTIONS,
        percentage: percentage,
        grade: grade,
        gradeText: gradeText,
        timeSpent: timeSpent,
        date: now.toLocaleDateString('ru-RU'),
        time: now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
    };
}

// Показать результаты
function showResults(results) {
    elements.results.percent.textContent = `${results.percentage}%`;
    elements.results.subtitle.textContent = results.gradeText;
    elements.results.name.textContent = `${state.user.name}, ${state.user.class} класс`;
    elements.results.date.textContent = `${results.date} ${results.time}`;
    elements.results.score.textContent = `${results.correct}/${results.total} (${results.grade})`;
    
    setTimeout(() => {
        elements.results.circle.style.background = 
            `conic-gradient(#6366f1 0% ${results.percentage}%, rgba(255, 255, 255, 0.1) ${results.percentage}% 100%)`;
    }, 100);
    
    showScreen('results');
}

// Начать заново
function restartTest() {
    startTest();
}

// На главную
function goHome() {
    showScreen('welcome');
}

// Уведомления
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-times-circle' : 'fa-exclamation-triangle'}"></i>
        <span>${message}</span>
        <button onclick="this.parentNode.remove()" style="
            margin-left: auto;
            background: transparent;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 16px;
            opacity: 0.7;
        ">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Тест Telegram
window.testTelegram = async function() {
    const result = await checkTelegramConnection();
    if (result) {
        showNotification("✅ Telegram бот доступен!", "success");
    } else {
        showNotification("❌ Ошибка подключения к Telegram", "error");
    }
};

// Запуск
document.addEventListener('DOMContentLoaded', init);
