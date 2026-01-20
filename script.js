// Конфигурация
const CONFIG = {
    QUESTIONS_PER_TEST: 10,
    TIME_LIMIT: 600,
    TELEGRAM_BOT_TOKEN: '7658490450:AAFrnv3U1uzswOOUdqMDIvDagbZCgCCuhPI',
    TELEGRAM_CHAT_ID: '7658490450'
};

// Умные вопросы по физкультуре
const QUESTIONS = [
    // 1-25: Основы физкультуры
    {
        question: "Перед началом тренировки необходимо выполнять:",
        options: ["Разминку", "Заминку", "Силовые упражнения", "Растяжку после тренировки"],
        correct: 0,
        explanation: "Разминка подготавливает организм к нагрузкам."
    },
    {
        question: "Какой норматив сдают и мальчики, и девочки?",
        options: ["Подтягивание", "Отжимание", "Челночный бег", "Прыжок в длину"],
        correct: 2,
        explanation: "Челночный бег - общий норматив для всех."
    },
    {
        question: "Что измеряют для контроля нагрузки?",
        options: ["Вес", "Рост", "Пульс", "Давление"],
        correct: 2,
        explanation: "Пульс показывает интенсивность нагрузки."
    },
    {
        question: "Как называется упражнение для развития гибкости?",
        options: ["Приседание", "Наклон вперед", "Отжимание", "Прыжки"],
        correct: 1,
        explanation: "Наклоны развивают гибкость позвоночника."
    },
    {
        question: "Сколько подходов обычно делают в силовой тренировке?",
        options: ["1-2", "3-4", "5-6", "7-8"],
        correct: 1,
        explanation: "3-4 подхода оптимальны для развития силы."
    },
    {
        question: "Что такое кардиотренировка?",
        options: ["Силовая", "На выносливость", "На гибкость", "На координацию"],
        correct: 1,
        explanation: "Кардио развивает сердечно-сосудистую систему."
    },
    {
        question: "Как часто нужно заниматься для поддержания формы?",
        options: ["1 раз в неделю", "2-3 раза", "Ежедневно", "Раз в месяц"],
        correct: 1,
        explanation: "2-3 раза в неделю - оптимальный режим."
    },
    {
        question: "Что развивает плавание?",
        options: ["Только руки", "Только ноги", "Все мышцы", "Только спину"],
        correct: 2,
        explanation: "Плавание равномерно развивает все группы мышц."
    },
    {
        question: "Какой витамин особенно важен для спортсменов?",
        options: ["A", "B", "C", "D"],
        correct: 3,
        explanation: "Витамин D укрепляет кости и иммунитет."
    },
    {
        question: "Что такое разминка?",
        options: ["Основная часть", "Подготовка", "Завершение", "Отдых"],
        correct: 1,
        explanation: "Разминка готовит организм к нагрузке."
    },
    
    // 26-50: Спортивные игры
    {
        question: "В баскетболе за штрафной бросок дают:",
        options: ["1 очко", "2 очка", "3 очка", "4 очка"],
        correct: 0,
        explanation: "Штрафной бросок = 1 очко."
    },
    {
        question: "В волейболе команда состоит из:",
        options: ["5 игроков", "6 игроков", "7 игроков", "8 игроков"],
        correct: 1,
        explanation: "Волейбольная команда - 6 человек."
    },
    {
        question: "В футболе матч длится:",
        options: ["2 тайма по 45 мин", "3 периода по 20 мин", "4 тайма по 15 мин", "До 5 голов"],
        correct: 0,
        explanation: "Футбольный матч: 2 тайма по 45 минут."
    },
    {
        question: "Что такое офсайд в футболе?",
        options: ["Положение вне игры", "Удар от ворот", "Угловой", "Штрафной"],
        correct: 0,
        explanation: "Офсайд - положение вне игры."
    },
    {
        question: "В теннисе счет ведется:",
        options: ["15, 30, 40", "1, 2, 3", "10, 20, 30", "A, B, C"],
        correct: 0,
        explanation: "Теннисный счет: 15, 30, 40, гейм."
    },
    {
        question: "Что такое эйс в теннисе?",
        options: ["Подача на вылет", "Ошибка", "Сет", "Гейм"],
        correct: 0,
        explanation: "Эйс - подача, которую не коснулся соперник."
    },
    {
        question: "В бадминтоне играют:",
        options: ["Ракеткой", "Битой", "Клюшкой", "Руками"],
        correct: 0,
        explanation: "В бадминтон играют ракетками."
    },
    {
        question: "Что такое гейм в теннисе?",
        options: ["Партия", "Подача", "Очко", "Турнир"],
        correct: 0,
        explanation: "Гейм - часть сета в теннисе."
    },
    {
        question: "В настольном теннисе мяч:",
        options: ["Пластиковый", "Резиновый", "Целлулоидный", "Тканевый"],
        correct: 2,
        explanation: "Используется целлулоидный мяч."
    },
    {
        question: "Что такое сет в волейболе?",
        options: ["Партия", "Подача", "Блок", "Пасс"],
        correct: 0,
        explanation: "Сет - партия в волейболе."
    },
    
    // 51-75: Легкая атлетика
    {
        question: "Бег на 100 метров называется:",
        options: ["Спринт", "Стайерский", "Марафон", "Кросс"],
        correct: 0,
        explanation: "Спринт - бег на короткие дистанции."
    },
    {
        question: "Марафонская дистанция:",
        options: ["10 км", "21,1 км", "42,195 км", "50 км"],
        correct: 2,
        explanation: "Марафон = 42 км 195 м."
    },
    {
        question: "Что такое эстафета?",
        options: ["Командный бег", "Бег с барьерами", "Бег в гору", "Бег по стадиону"],
        correct: 0,
        explanation: "Эстафета - командный бег с передачей палочки."
    },
    {
        question: "Прыжок в длину выполняется:",
        options: ["С разбега", "С места", "С трамплина", "С шестом"],
        correct: 0,
        explanation: "Прыжок в длину выполняется с разбега."
    },
    {
        question: "Что такое тройной прыжок?",
        options: ["Скачок, шаг, прыжок", "Три прыжка", "Прыжок с шестом", "Прыжок в высоту"],
        correct: 0,
        explanation: "Тройной прыжок: скачок, шаг, прыжок."
    },
    {
        question: "Метание диска происходит:",
        options: ["Из круга", "С разбега", "С места", "С поворотом"],
        correct: 0,
        explanation: "Метание диска выполняется из круга."
    },
    {
        question: "Бег с препятствиями называется:",
        options: ["Барьерный", "Стипль-чез", "Кросс", "Спринт"],
        correct: 1,
        explanation: "Стипль-чез - бег с препятствиями."
    },
    {
        question: "Что такое десятиборье?",
        options: ["10 видов", "10 км", "10 попыток", "10 спортсменов"],
        correct: 0,
        explanation: "Десятиборье - 10 видов легкой атлетики."
    },
    {
        question: "Бег по пересеченной местности:",
        options: ["Кросс", "Спринт", "Марафон", "Эстафета"],
        correct: 0,
        explanation: "Кросс - бег по пересеченной местности."
    },
    {
        question: "Старт из низкого положения используется в:",
        options: ["Спринте", "Марафоне", "Кроссе", "Ходьбе"],
        correct: 0,
        explanation: "Низкий старт - в спринтерском беге."
    },
    
    // 76-100: Гимнастика и здоровье
    {
        question: "Что такое кувырок?",
        options: ["Переворот через голову", "Прыжок", "Стойка", "Мост"],
        correct: 0,
        explanation: "Кувырок - переворот через голову."
    },
    {
        question: "Упражнение 'мостик' развивает:",
        options: ["Гибкость", "Силу", "Выносливость", "Скорость"],
        correct: 0,
        explanation: "Мостик развивает гибкость спины."
    },
    {
        question: "Что такое шпагат?",
        options: ["Растяжка ног", "Наклон", "Кувырок", "Стойка"],
        correct: 0,
        explanation: "Шпагат - максимальная растяжка ног."
    },
    {
        question: "Стойка на лопатках называется:",
        options: ["Березка", "Мостик", "Колесо", "Кувырок"],
        correct: 0,
        explanation: "'Березка' - стойка на лопатках."
    },
    {
        question: "Что развивают упражнения на брусьях?",
        options: ["Руки и грудь", "Ноги", "Спину", "Пресс"],
        correct: 0,
        explanation: "Брусья развивают руки и грудные мышцы."
    },
    {
        question: "На перекладине выполняют:",
        options: ["Подтягивания", "Отжимания", "Приседания", "Прыжки"],
        correct: 0,
        explanation: "На перекладине делают подтягивания."
    },
    {
        question: "Что такое вестибулярный аппарат?",
        options: ["Орган равновесия", "Орган слуха", "Орган зрения", "Орган обоняния"],
        correct: 0,
        explanation: "Отвечает за равновесие и координацию."
    },
    {
        question: "Нормальный пульс в покое:",
        options: ["60-80", "80-100", "100-120", "120-140"],
        correct: 0,
        explanation: "60-80 ударов в минуту - норма."
    },
    {
        question: "Что такое осанка?",
        options: ["Положение тела", "Походка", "Движение", "Поза"],
        correct: 0,
        explanation: "Осанка - привычное положение тела."
    },
    {
        question: "Для укрепления костей нужен:",
        options: ["Кальций", "Железо", "Йод", "Цинк"],
        correct: 0,
        explanation: "Кальций делает кости крепкими."
    }
];

// Состояние приложения
let state = {
    user: null,
    currentQuestion: 0,
    answers: [],
    questions: [],
    timeLeft: CONFIG.TIME_LIMIT,
    timer: null,
    testStartTime: null
};

// DOM элементы
const elements = {
    screens: {
        welcome: document.getElementById('welcomeScreen'),
        login: document.getElementById('loginScreen'),
        test: document.getElementById('testScreen'),
        results: document.getElementById('resultsScreen')
    },
    userInfo: document.getElementById('userInfo'),
    userName: document.getElementById('userName'),
    userAvatar: document.getElementById('userAvatar'),
    startBtn: document.getElementById('startBtn'),
    loginBtn: document.getElementById('loginBtn'),
    fullName: document.getElementById('fullName'),
    className: document.getElementById('className'),
    currentUser: document.getElementById('currentUser'),
    questionNum: document.getElementById('questionNum'),
    timer: document.getElementById('timer'),
    progress: document.getElementById('progress'),
    questionText: document.getElementById('questionText'),
    options: document.getElementById('options'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    submitBtn: document.getElementById('submitBtn'),
    scorePercent: document.getElementById('scorePercent'),
    correctCount: document.getElementById('correctCount'),
    resultTitle: document.getElementById('resultTitle'),
    resultDesc: document.getElementById('resultDesc'),
    resultName: document.getElementById('resultName'),
    resultDate: document.getElementById('resultDate'),
    telegramStatus: document.getElementById('telegramStatus'),
    retryBtn: document.getElementById('retryBtn'),
    homeBtn: document.getElementById('homeBtn')
};

// Инициализация
function init() {
    // Восстановление пользователя
    const savedUser = localStorage.getItem('fizraUser');
    if (savedUser) {
        state.user = JSON.parse(savedUser);
        updateUserInfo();
    }
    
    // Обработчики событий
    elements.startBtn.addEventListener('click', showLoginScreen);
    elements.loginBtn.addEventListener('click', handleLogin);
    elements.prevBtn.addEventListener('click', prevQuestion);
    elements.nextBtn.addEventListener('click', nextQuestion);
    elements.submitBtn.addEventListener('click', submitTest);
    elements.retryBtn.addEventListener('click', restartTest);
    elements.homeBtn.addEventListener('click', goHome);
    
    // Навигация клавишами
    document.addEventListener('keydown', handleKeyPress);
    
    showScreen('welcome');
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
    elements.fullName.focus();
}

// Обработка входа
function handleLogin() {
    const name = elements.fullName.value.trim();
    const className = elements.className.value;
    
    if (!name) {
        alert('Введите фамилию и имя');
        return;
    }
    
    if (!className) {
        alert('Выберите класс');
        return;
    }
    
    state.user = {
        name: name,
        class: className,
        initials: name.split(' ').map(n => n[0]).join('').toUpperCase()
    };
    
    localStorage.setItem('fizraUser', JSON.stringify(state.user));
    updateUserInfo();
    startTest();
}

// Обновить информацию о пользователе
function updateUserInfo() {
    if (state.user) {
        elements.userName.textContent = state.user.name;
        elements.userAvatar.textContent = state.user.initials;
        elements.currentUser.textContent = `${state.user.name} (${state.user.class} класс)`;
        elements.resultName.textContent = `${state.user.name}, ${state.user.class} класс`;
    }
}

// Начать тест
function startTest() {
    state.currentQuestion = 0;
    state.answers = [];
    state.questions = getRandomQuestions();
    state.timeLeft = CONFIG.TIME_LIMIT;
    state.testStartTime = new Date();
    
    // Перемешать варианты ответов
    state.questions.forEach(q => {
        const correct = q.options[q.correct];
        const shuffled = [...q.options].sort(() => Math.random() - 0.5);
        q.correct = shuffled.indexOf(correct);
        q.options = shuffled;
    });
    
    showScreen('test');
    startTimer();
    showQuestion();
}

// Получить случайные вопросы
function getRandomQuestions() {
    const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, CONFIG.QUESTIONS_PER_TEST);
}

// Запустить таймер
function startTimer() {
    clearInterval(state.timer);
    updateTimerDisplay();
    
    state.timer = setInterval(() => {
        state.timeLeft--;
        updateTimerDisplay();
        
        if (state.timeLeft <= 0) {
            clearInterval(state.timer);
            submitTest();
        }
    }, 1000);
}

// Обновить отображение таймера
function updateTimerDisplay() {
    const minutes = Math.floor(state.timeLeft / 60);
    const seconds = state.timeLeft % 60;
    elements.timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Показать вопрос
function showQuestion() {
    const question = state.questions[state.currentQuestion];
    
    // Обновить номер вопроса
    elements.questionNum.textContent = `Вопрос ${state.currentQuestion + 1}/${CONFIG.QUESTIONS_PER_TEST}`;
    
    // Обновить прогресс
    const progress = ((state.currentQuestion + 1) / CONFIG.QUESTIONS_PER_TEST) * 100;
    elements.progress.style.width = `${progress}%`;
    
    // Отобразить вопрос
    elements.questionText.textContent = question.question;
    
    // Очистить варианты ответов
    elements.options.innerHTML = '';
    
    // Добавить варианты ответов
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        if (state.answers[state.currentQuestion] === index) {
            optionElement.classList.add('selected');
        }
        
        optionElement.innerHTML = `
            <div class="option-letter">${String.fromCharCode(65 + index)}</div>
            <div class="option-text">${option}</div>
        `;
        
        optionElement.addEventListener('click', () => selectAnswer(index));
        elements.options.appendChild(optionElement);
    });
    
    // Обновить кнопки навигации
    elements.prevBtn.style.display = state.currentQuestion > 0 ? 'flex' : 'none';
    elements.nextBtn.style.display = state.currentQuestion < CONFIG.QUESTIONS_PER_TEST - 1 ? 'flex' : 'none';
    elements.submitBtn.style.display = state.currentQuestion === CONFIG.QUESTIONS_PER_TEST - 1 ? 'flex' : 'none';
    elements.nextBtn.disabled = state.answers[state.currentQuestion] === undefined;
}

// Выбрать ответ
function selectAnswer(index) {
    state.answers[state.currentQuestion] = index;
    
    // Обновить отображение
    const options = elements.options.querySelectorAll('.option');
    options.forEach((opt, i) => {
        opt.classList.toggle('selected', i === index);
    });
    
    // Активировать кнопку "Далее"
    elements.nextBtn.disabled = false;
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
    if (state.currentQuestion < CONFIG.QUESTIONS_PER_TEST - 1 && state.answers[state.currentQuestion] !== undefined) {
        state.currentQuestion++;
        showQuestion();
    }
}

// Обработка клавиш
function handleKeyPress(e) {
    if (elements.screens.test.classList.contains('active')) {
        if (e.key === 'ArrowLeft' && state.currentQuestion > 0) {
            prevQuestion();
        } else if (e.key === 'ArrowRight' && state.currentQuestion < CONFIG.QUESTIONS_PER_TEST - 1) {
            nextQuestion();
        } else if (e.key >= '1' && e.key <= '4') {
            selectAnswer(parseInt(e.key) - 1);
        }
    }
}

// Завершить тест
function submitTest() {
    clearInterval(state.timer);
    
    // Проверить все ли вопросы отвечены
    const unanswered = state.answers.filter(a => a === undefined).length;
    if (unanswered > 0 && !confirm(`Вы ответили не на все вопросы (${unanswered} без ответа). Завершить тест?`)) {
        startTimer();
        return;
    }
    
    // Рассчитать результаты
    const results = calculateResults();
    
    // Показать результаты
    showResults(results);
    
    // Отправить в Telegram
    sendToTelegram(results);
}

// Рассчитать результаты
function calculateResults() {
    let correct = 0;
    state.questions.forEach((q, i) => {
        if (state.answers[i] === q.correct) {
            correct++;
        }
    });
    
    const percentage = Math.round((correct / CONFIG.QUESTIONS_PER_TEST) * 100);
    const timeSpent = CONFIG.TIME_LIMIT - state.timeLeft;
    
    return {
        correct,
        total: CONFIG.QUESTIONS_PER_TEST,
        percentage,
        timeSpent,
        date: new Date().toLocaleDateString('ru-RU'),
        time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
    };
}

// Показать результаты
function showResults(results) {
    elements.scorePercent.textContent = `${results.percentage}%`;
    elements.correctCount.textContent = results.correct;
    elements.resultDate.textContent = `${results.date} ${results.time}`;
    
    // Анимировать круг
    setTimeout(() => {
        const circle = document.querySelector('.circle');
        circle.style.background = `conic-gradient(var(--primary) 0% ${results.percentage}%, var(--light-gray) ${results.percentage}% 100%)`;
    }, 100);
    
    // Установить заголовок
    let title, desc;
    if (results.percentage >= 90) {
        title = 'Отлично! 🏆';
        desc = 'Превосходный результат!';
    } else if (results.percentage >= 70) {
        title = 'Хорошо! 👍';
        desc = 'Хорошие знания!';
    } else if (results.percentage >= 50) {
        title = 'Удовлетворительно';
        desc = 'Можно лучше!';
    } else {
        title = 'Попробуйте еще раз';
        desc = 'Повторите материал';
    }
    
    elements.resultTitle.textContent = title;
    elements.resultDesc.textContent = desc;
    
    showScreen('results');
    elements.telegramStatus.textContent = 'Отправляется...';
    elements.telegramStatus.className = 'status loading';
}

// Отправить в Telegram
async function sendToTelegram(results) {
    if (!state.user) return;
    
    try {
        const message = `📊 *Результат теста по физкультуре*
        
👤 *Ученик:* ${state.user.name}
🏫 *Класс:* ${state.user.class}
📅 *Дата:* ${results.date} ${results.time}

📈 *Результат:* ${results.percentage}%
✅ *Правильно:* ${results.correct}/${results.total}
⏱️ *Время:* ${Math.floor(results.timeSpent/60)}:${(results.timeSpent%60).toString().padStart(2,'0')}

${results.percentage >= 90 ? '🏆 Отличный результат!' : 
  results.percentage >= 70 ? '👍 Хорошо!' : 
  results.percentage >= 50 ? '😊 Удовлетворительно' : '💪 Нужно повторить'}`;
        
        // Отправка через Telegram Bot API
        const response = await fetch(`https://api.telegram.org/bot${CONFIG.TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CONFIG.TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'Markdown'
            })
        });
        
        const data = await response.json();
        
        if (data.ok) {
            elements.telegramStatus.textContent = '✓ Отправлено';
            elements.telegramStatus.className = 'status success';
            
            // Сохранить результат
            saveResult(results);
        } else {
            throw new Error(data.description);
        }
        
    } catch (error) {
        console.error('Telegram ошибка:', error);
        elements.telegramStatus.textContent = '✗ Ошибка отправки';
        elements.telegramStatus.className = 'status error';
        
        // Кнопка повторной отправки
        const retryBtn = document.createElement('button');
        retryBtn.textContent = 'Повторить отправку';
        retryBtn.className = 'btn';
        retryBtn.style.marginTop = '10px';
        retryBtn.onclick = () => {
            retryBtn.remove();
            sendToTelegram(results);
        };
        
        elements.telegramStatus.parentElement.appendChild(retryBtn);
    }
}

// Сохранить результат
function saveResult(results) {
    const history = JSON.parse(localStorage.getItem('fizraResults') || '[]');
    history.push({
        user: state.user,
        results: results,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('fizraResults', JSON.stringify(history.slice(-50)));
}

// Начать заново
function restartTest() {
    startTest();
}

// На главную
function goHome() {
    showScreen('welcome');
}

// Запуск при загрузке
document.addEventListener('DOMContentLoaded', init);
