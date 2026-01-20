ф// Firebase конфигурация
const firebaseConfig = {
    apiKey: "AIzaSyDOqQAudgBe8OaIeeuf8DEKTk1z-9zhhcE",
    authDomain: "physicalgrades.firebaseapp.com",
    projectId: "physicalgrades",
    storageBucket: "physicalgrades.firebasestorage.app",
    messagingSenderId: "344942161111",
    appId: "1:344942161111:web:0a48aa6810552be8d6d492",
    measurementId: "G-LKZQC3LP0T"
};

// Инициализация Firebase
let app, db;
try {
    app = firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    console.log('✅ Firebase инициализирован успешно');
} catch (error) {
    console.error('❌ Ошибка инициализации Firebase:', error);
    alert('Ошибка подключения к базе данных. Пожалуйста, обновите страницу.');
}

// Конфигурация теста
const CONFIG = {
    TOTAL_QUESTIONS: 10
};

// 100 вопросов по физкультуре (сокращено для примера)
const QUESTIONS = [
    {
        question: "Перед тренировкой обязательно делают:",
        options: ["Разминку", "Заминку", "Силовые упражнения", "Растяжку"],
        correct: 0
    },
    {
        question: "Сколько раз в неделю нужно заниматься физкультурой?",
        options: ["1 раз", "2-3 раза", "Только на уроках", "Ежедневно"],
        correct: 1
    },
    {
        question: "Что измеряют для контроля нагрузки?",
        options: ["Вес", "Рост", "Пульс", "Давление"],
        correct: 2
    },
    {
        question: "Упражнение для развития гибкости:",
        options: ["Приседание", "Наклон вперед", "Отжимание", "Прыжки"],
        correct: 1
    },
    {
        question: "Сколько подходов в силовой тренировке?",
        options: ["1-2", "3-4", "5-6", "7-8"],
        correct: 1
    },
    {
        question: "Тренировка на выносливость называется:",
        options: ["Силовая", "Кардио", "Стретчинг", "Йога"],
        correct: 1
    },
    {
        question: "Что развивает плавание?",
        options: ["Только руки", "Только ноги", "Все мышцы", "Только спину"],
        correct: 2
    },
    {
        question: "Важный витамин для спортсменов:",
        options: ["Витамин А", "Витамин В", "Витамин С", "Витамин D"],
        correct: 3
    },
    {
        question: "Что такое разминка?",
        options: ["Основная часть", "Подготовка", "Завершение", "Отдых"],
        correct: 1
    },
    {
        question: "Нормальный пульс в покое:",
        options: ["40-60", "60-80", "80-100", "100-120"],
        correct: 1
    }
];

// Состояние приложения
let state = {
    user: null,
    currentQuestion: 0,
    answers: [],
    testQuestions: [],
    testId: null,
    isFirebaseConnected: false
};

// DOM элементы
const elements = {
    screens: {
        welcome: document.getElementById('screen-welcome'),
        login: document.getElementById('screen-login'),
        test: document.getElementById('screen-test'),
        results: document.getElementById('screen-results')
    },
    startBtn: document.getElementById('start-btn'),
    loginBtn: document.getElementById('login-btn'),
    fullname: document.getElementById('fullname'),
    class: document.getElementById('class'),
    questionCounter: document.getElementById('question-counter'),
    progressFill: document.getElementById('progress-fill'),
    questionText: document.getElementById('question-text'),
    options: document.getElementById('options'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    submitBtn: document.getElementById('submit-btn'),
    scorePercent: document.getElementById('score-percent'),
    resultSubtitle: document.getElementById('result-subtitle'),
    resultName: document.getElementById('result-name'),
    resultDate: document.getElementById('result-date'),
    resultScore: document.getElementById('result-score'),
    retryBtn: document.getElementById('retry-btn'),
    homeBtn: document.getElementById('home-btn'),
    scoreCircle: document.getElementById('score-circle')
};

// Инициализация
async function init() {
    console.log('🚀 Инициализация приложения...');
    
    // Проверка подключения к Firebase
    await checkFirebaseConnection();
    
    // Восстановление пользователя
    const savedUser = localStorage.getItem('fizraUser');
    if (savedUser) {
        try {
            state.user = JSON.parse(savedUser);
            elements.fullname.value = state.user.name || '';
            elements.class.value = state.user.class || '';
        } catch (e) {
            console.warn('Ошибка парсинга сохраненного пользователя:', e);
        }
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
    console.log('✅ Приложение инициализировано');
}

// Проверка подключения к Firebase
async function checkFirebaseConnection() {
    if (!db) {
        console.warn('⚠️ Firebase не инициализирован');
        return false;
    }
    
    try {
        console.log('🔌 Проверка подключения к Firestore...');
        
        // Быстрая проверка без загрузки данных
        await db.collection('testResults').limit(1).get();
        
        state.isFirebaseConnected = true;
        console.log('✅ Подключение к Firestore установлено');
        return true;
        
    } catch (error) {
        console.error('❌ Ошибка подключения к Firestore:', error);
        console.error('Код ошибки:', error.code);
        console.error('Сообщение:', error.message);
        
        state.isFirebaseConnected = false;
        
        // Показать предупреждение пользователю
        if (elements.screens.welcome.classList.contains('active')) {
            showFirebaseWarning();
        }
        
        return false;
    }
}

// Показать предупреждение о Firebase
function showFirebaseWarning() {
    const warningDiv = document.createElement('div');
    warningDiv.className = 'firebase-warning';
    warningDiv.innerHTML = `
        <div style="
            background: rgba(239, 68, 68, 0.1);
            border: 2px solid #ef4444;
            border-radius: 12px;
            padding: 15px;
            margin-bottom: 20px;
            color: #ef4444;
            text-align: center;
        ">
            <i class="fas fa-exclamation-triangle" style="font-size: 24px; margin-bottom: 10px;"></i>
            <p><strong>Внимание:</strong> Нет подключения к серверу.</p>
            <p style="font-size: 14px; margin-top: 5px;">
                Результаты не будут сохранены. Проверьте:<br>
                1. Подключение к интернету<br>
                2. Блокировщики рекламы (отключите на этом сайте)<br>
                3. Попробуйте обновить страницу
            </p>
        </div>
    `;
    
    const card = document.querySelector('#screen-welcome .card');
    if (card) {
        card.insertBefore(warningDiv, card.firstChild);
    }
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
    elements.fullname.focus();
}

// Обработка входа
function handleLogin() {
    const name = elements.fullname.value.trim();
    const className = elements.class.value;
    
    if (!name) {
        alert('Введи фамилию и имя');
        elements.fullname.focus();
        return;
    }
    
    if (!className) {
        alert('Выбери класс');
        elements.class.focus();
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
    
    showScreen('test');
    showQuestion();
}

// Получить случайные вопросы
function getRandomQuestions() {
    const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, CONFIG.TOTAL_QUESTIONS);
    
    // Перемешать варианты ответов
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
    
    // Обновить счетчик
    elements.questionCounter.textContent = `Вопрос ${state.currentQuestion + 1}/${CONFIG.TOTAL_QUESTIONS}`;
    
    // Обновить прогресс
    const progress = ((state.currentQuestion + 1) / CONFIG.TOTAL_QUESTIONS) * 100;
    elements.progressFill.style.width = `${progress}%`;
    
    // Отобразить вопрос
    elements.questionText.textContent = question.question;
    
    // Очистить варианты
    elements.options.innerHTML = '';
    
    // Добавить варианты с анимацией
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
        elements.options.appendChild(optionElement);
    });
    
    // Обновить кнопки навигации
    elements.prevBtn.style.display = state.currentQuestion > 0 ? 'flex' : 'none';
    elements.nextBtn.style.display = state.currentQuestion < CONFIG.TOTAL_QUESTIONS - 1 ? 'flex' : 'none';
    elements.submitBtn.style.display = state.currentQuestion === CONFIG.TOTAL_QUESTIONS - 1 ? 'flex' : 'none';
    elements.nextBtn.disabled = state.answers[state.currentQuestion] === undefined;
}

// Выбрать ответ
function selectAnswer(index) {
    state.answers[state.currentQuestion] = index;
    
    const options = elements.options.querySelectorAll('.option');
    options.forEach((opt, i) => {
        opt.classList.remove('selected');
        if (i === index) {
            opt.classList.add('selected');
            opt.style.animation = 'pulse 0.5s ease';
            setTimeout(() => opt.style.animation = '', 500);
        }
    });
    
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
    saveToFirebase(results);
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
    
    // Определить оценку
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
        date: now.toLocaleDateString('ru-RU'),
        time: now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
        timestamp: now.toISOString(),
        timestampServer: firebase.firestore.FieldValue.serverTimestamp
    };
}

// Показать результаты
function showResults(results) {
    elements.scorePercent.textContent = `${results.percentage}%`;
    elements.resultSubtitle.textContent = results.gradeText;
    elements.resultName.textContent = `${state.user.name}, ${state.user.class} класс`;
    elements.resultDate.textContent = `${results.date} ${results.time}`;
    elements.resultScore.textContent = `${results.correct}/${results.total} (${results.grade})`;
    
    // Анимация круга
    setTimeout(() => {
        elements.scoreCircle.style.background = `conic-gradient(#6366f1 0% ${results.percentage}%, rgba(255, 255, 255, 0.1) ${results.percentage}% 100%)`;
    }, 100);
    
    showScreen('results');
}

// Сохранить в Firebase
async function saveToFirebase(results) {
    if (!state.user) {
        console.error('❌ Нет данных пользователя для сохранения');
        return;
    }
    
    if (!state.isFirebaseConnected) {
        console.warn('⚠️ Firebase не подключен, пропускаем сохранение');
        alert('⚠️ Внимание: Результаты не сохранены на сервере. Проверьте подключение к интернету.');
        return;
    }
    
    try {
        console.log('💾 Начинаю сохранение в Firebase...');
        
        const resultData = {
            studentName: state.user.name,
            studentClass: state.user.class,
            correctAnswers: results.correct,
            totalQuestions: results.total,
            percentage: results.percentage,
            grade: results.grade,
            gradeText: results.gradeText,
            date: results.date,
            time: results.time,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            testId: state.testId,
            savedAt: new Date().toISOString(),
            firebaseConnected: state.isFirebaseConnected
        };
        
        console.log('📤 Отправляю данные:', resultData);
        
        const docRef = await db.collection('testResults').add(resultData);
        
        console.log('✅ УСПЕШНО сохранено в Firebase!');
        console.log('📄 ID документа:', docRef.id);
        console.log('🔗 Путь:', docRef.path);
        
        // Показать успех пользователю
        setTimeout(() => {
            const resultsScreen = document.querySelector('#screen-results .card');
            if (resultsScreen) {
                const successMsg = document.createElement('div');
                successMsg.className = 'save-success';
                successMsg.innerHTML = `
                    <div style="
                        background: rgba(16, 185, 129, 0.1);
                        border: 2px solid #10b981;
                        border-radius: 12px;
                        padding: 12px;
                        margin-top: 15px;
                        color: #10b981;
                        text-align: center;
                        font-size: 14px;
                        animation: fadeIn 0.5s ease;
                    ">
                        <i class="fas fa-check-circle"></i>
                        Результаты сохранены на сервере
                    </div>
                `;
                resultsScreen.appendChild(successMsg);
            }
        }, 500);
        
    } catch (error) {
        console.error('❌ ОШИБКА сохранения в Firebase:', error);
        console.error('Код ошибки:', error.code);
        console.error('Сообщение:', error.message);
        console.error('Полная ошибка:', error);
        
        // Показать ошибку пользователю
        const errorMsg = `
            <div style="
                background: rgba(239, 68, 68, 0.1);
                border: 2px solid #ef4444;
                border-radius: 12px;
                padding: 12px;
                margin-top: 15px;
                color: #ef4444;
                text-align: center;
                font-size: 14px;
                animation: fadeIn 0.5s ease;
            ">
                <i class="fas fa-exclamation-circle"></i>
                Ошибка сохранения: ${error.code || 'Неизвестная ошибка'}<br>
                <small>Проверьте подключение к интернету</small>
            </div>
        `;
        
        const resultsScreen = document.querySelector('#screen-results .card');
        if (resultsScreen) {
            resultsScreen.insertAdjacentHTML('beforeend', errorMsg);
        }
    }
}

// Начать заново
function restartTest() {
    startTest();
}

// На главную
function goHome() {
    showScreen('welcome');
}

// Тестовая функция для проверки Firebase
async function testFirebaseConnectionManual() {
    console.log('🧪 Ручная проверка Firebase...');
    const isConnected = await checkFirebaseConnection();
    if (isConnected) {
        alert('✅ Firebase подключен успешно!');
    } else {
        alert('❌ Firebase не подключен. Проверьте консоль для деталей.');
    }
}

// Запуск при загрузке
document.addEventListener('DOMContentLoaded', () => {
    console.log('📄 DOM загружен, запускаю инициализацию...');
    init();
    
    // Добавить кнопку теста Firebase (для отладки)
    if (document.querySelector('#screen-welcome .card')) {
        const testBtn = document.createElement('button');
        testBtn.className = 'btn btn-secondary';
        testBtn.style.marginTop = '10px';
        testBtn.innerHTML = '<i class="fas fa-wifi"></i> Проверить подключение';
        testBtn.onclick = testFirebaseConnectionManual;
        document.querySelector('#screen-welcome .card').appendChild(testBtn);
    }
});

// Глобальная функция для отладки
window.debugFirebase = async function() {
    console.log('🔍 Отладка Firebase:');
    console.log('- Firebase app:', app);
    console.log('- Firestore db:', db);
    console.log('- Состояние:', state);
    
    if (db) {
        try {
            const count = await db.collection('testResults').count().get();
            console.log('- Всего документов в testResults:', count.data().count);
        } catch (error) {
            console.error('- Ошибка подсчета документов:', error);
        }
    }
};// Firebase конфигурация
const firebaseConfig = {
    apiKey: "AIzaSyDOqQAudgBe8OaIeeuf8DEKTk1z-9zhhcE",
    authDomain: "physicalgrades.firebaseapp.com",
    projectId: "physicalgrades",
    storageBucket: "physicalgrades.firebasestorage.app",
    messagingSenderId: "344942161111",
    appId: "1:344942161111:web:0a48aa6810552be8d6d492",
    measurementId: "G-LKZQC3LP0T"
};

// Инициализация Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Конфигурация теста
const CONFIG = {
    TOTAL_QUESTIONS: 10
};

// 100 вопросов по физкультуре
const QUESTIONS = [
    // 1-25: Основы физкультуры
    {
        question: "Перед тренировкой обязательно делают:",
        options: ["Разминку", "Заминку", "Силовые упражнения", "Растяжку"],
        correct: 0
    },
    {
        question: "Сколько раз в неделю нужно заниматься физкультурой?",
        options: ["1 раз", "2-3 раза", "Только на уроках", "Ежедневно"],
        correct: 1
    },
    {
        question: "Что измеряют для контроля нагрузки?",
        options: ["Вес", "Рост", "Пульс", "Давление"],
        correct: 2
    },
    {
        question: "Упражнение для развития гибкости:",
        options: ["Приседание", "Наклон вперед", "Отжимание", "Прыжки"],
        correct: 1
    },
    {
        question: "Сколько подходов в силовой тренировке?",
        options: ["1-2", "3-4", "5-6", "7-8"],
        correct: 1
    },
    {
        question: "Тренировка на выносливость называется:",
        options: ["Силовая", "Кардио", "Стретчинг", "Йога"],
        correct: 1
    },
    {
        question: "Что развивает плавание?",
        options: ["Только руки", "Только ноги", "Все мышцы", "Только спину"],
        correct: 2
    },
    {
        question: "Важный витамин для спортсменов:",
        options: ["Витамин А", "Витамин В", "Витамин С", "Витамин D"],
        correct: 3
    },
    {
        question: "Что такое разминка?",
        options: ["Основная часть", "Подготовка", "Завершение", "Отдых"],
        correct: 1
    },
    {
        question: "Нормальный пульс в покое:",
        options: ["40-60", "60-80", "80-100", "100-120"],
        correct: 1
    },
    // 26-50: Спортивные игры
    {
        question: "В баскетболе за штрафной бросок дают:",
        options: ["1 очко", "2 очка", "3 очка", "4 очка"],
        correct: 0
    },
    {
        question: "Волейбольная команда состоит из:",
        options: ["5 игроков", "6 игроков", "7 игроков", "8 игроков"],
        correct: 1
    },
    {
        question: "Футбольный матч длится:",
        options: ["2 тайма по 45 мин", "3 периода", "4 тайма", "До 5 голов"],
        correct: 0
    },
    {
        question: "Что такое офсайд в футболе?",
        options: ["Положение вне игры", "Удар от ворот", "Угловой", "Штрафной"],
        correct: 0
    },
    {
        question: "В теннисе счет ведется:",
        options: ["15, 30, 40", "1, 2, 3", "10, 20, 30", "A, B, C"],
        correct: 0
    },
    // 51-75: Легкая атлетика
    {
        question: "Бег на 100 метров называется:",
        options: ["Спринт", "Стайерский", "Марафон", "Кросс"],
        correct: 0
    },
    {
        question: "Марафонская дистанция:",
        options: ["10 км", "21.1 км", "42.195 км", "50 км"],
        correct: 2
    },
    {
        question: "Что такое эстафета?",
        options: ["Командный бег", "Бег с барьерами", "Бег в гору", "Бег по стадиону"],
        correct: 0
    },
    {
        question: "Прыжок в длину выполняется:",
        options: ["С разбега", "С места", "С трамплина", "С шестом"],
        correct: 0
    },
    {
        question: "Что такое тройной прыжок?",
        options: ["Скачок, шаг, прыжок", "Три прыжка", "Прыжок с шестом", "Прыжок в высоту"],
        correct: 0
    },
    // 76-100: Гимнастика и здоровье
    {
        question: "Что такое кувырок?",
        options: ["Переворот через голову", "Прыжок", "Стойка", "Мост"],
        correct: 0
    },
    {
        question: "Упражнение 'мостик' развивает:",
        options: ["Гибкость", "Силу", "Выносливость", "Скорость"],
        correct: 0
    },
    {
        question: "Что такое шпагат?",
        options: ["Растяжка ног", "Наклон", "Кувырок", "Стойка"],
        correct: 0
    },
    {
        question: "Стойка на лопатках называется:",
        options: ["Березка", "Мостик", "Колесо", "Кувырок"],
        correct: 0
    },
    {
        question: "Для укрепления костей нужен:",
        options: ["Кальций", "Железо", "Йод", "Цинк"],
        correct: 0
    }
];

// Состояние приложения
let state = {
    user: null,
    currentQuestion: 0,
    answers: [],
    testQuestions: [],
    testId: null
};

// DOM элементы
const elements = {
    screens: {
        welcome: document.getElementById('screen-welcome'),
        login: document.getElementById('screen-login'),
        test: document.getElementById('screen-test'),
        results: document.getElementById('screen-results')
    },
    startBtn: document.getElementById('start-btn'),
    loginBtn: document.getElementById('login-btn'),
    fullname: document.getElementById('fullname'),
    class: document.getElementById('class'),
    questionCounter: document.getElementById('question-counter'),
    progressFill: document.getElementById('progress-fill'),
    questionText: document.getElementById('question-text'),
    options: document.getElementById('options'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    submitBtn: document.getElementById('submit-btn'),
    scorePercent: document.getElementById('score-percent'),
    resultSubtitle: document.getElementById('result-subtitle'),
    resultName: document.getElementById('result-name'),
    resultDate: document.getElementById('result-date'),
    resultScore: document.getElementById('result-score'),
    retryBtn: document.getElementById('retry-btn'),
    homeBtn: document.getElementById('home-btn'),
    scoreCircle: document.getElementById('score-circle')
};

// Инициализация
function init() {
    // Восстановление пользователя
    const savedUser = localStorage.getItem('fizraUser');
    if (savedUser) {
        state.user = JSON.parse(savedUser);
        elements.fullname.value = state.user.name;
        elements.class.value = state.user.class;
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
    elements.fullname.focus();
}

// Обработка входа
function handleLogin() {
    const name = elements.fullname.value.trim();
    const className = elements.class.value;
    
    if (!name) {
        alert('Введи фамилию и имя');
        elements.fullname.focus();
        return;
    }
    
    if (!className) {
        alert('Выбери класс');
        elements.class.focus();
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
    
    showScreen('test');
    showQuestion();
}

// Получить случайные вопросы
function getRandomQuestions() {
    const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, CONFIG.TOTAL_QUESTIONS);
    
    // Перемешать варианты ответов
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
    
    // Обновить счетчик
    elements.questionCounter.textContent = `Вопрос ${state.currentQuestion + 1}/${CONFIG.TOTAL_QUESTIONS}`;
    
    // Обновить прогресс
    const progress = ((state.currentQuestion + 1) / CONFIG.TOTAL_QUESTIONS) * 100;
    elements.progressFill.style.width = `${progress}%`;
    
    // Отобразить вопрос
    elements.questionText.textContent = question.question;
    
    // Очистить варианты
    elements.options.innerHTML = '';
    
    // Добавить варианты с анимацией
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
        elements.options.appendChild(optionElement);
    });
    
    // Обновить кнопки навигации
    elements.prevBtn.style.display = state.currentQuestion > 0 ? 'flex' : 'none';
    elements.nextBtn.style.display = state.currentQuestion < CONFIG.TOTAL_QUESTIONS - 1 ? 'flex' : 'none';
    elements.submitBtn.style.display = state.currentQuestion === CONFIG.TOTAL_QUESTIONS - 1 ? 'flex' : 'none';
    elements.nextBtn.disabled = state.answers[state.currentQuestion] === undefined;
}

// Выбрать ответ
function selectAnswer(index) {
    state.answers[state.currentQuestion] = index;
    
    const options = elements.options.querySelectorAll('.option');
    options.forEach((opt, i) => {
        opt.classList.remove('selected');
        if (i === index) {
            opt.classList.add('selected');
            opt.style.animation = 'pulse 0.5s ease';
            setTimeout(() => opt.style.animation = '', 500);
        }
    });
    
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
    saveToFirebase(results);
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
    
    // Определить оценку
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
        date: now.toLocaleDateString('ru-RU'),
        time: now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
        timestamp: now.toISOString()
    };
}

// Показать результаты
function showResults(results) {
    elements.scorePercent.textContent = `${results.percentage}%`;
    elements.resultSubtitle.textContent = results.gradeText;
    elements.resultName.textContent = `${state.user.name}, ${state.user.class} класс`;
    elements.resultDate.textContent = `${results.date} ${results.time}`;
    elements.resultScore.textContent = `${results.correct}/${results.total} (${results.grade})`;
    
    // Анимация круга
    setTimeout(() => {
        elements.scoreCircle.style.background = `conic-gradient(#6366f1 0% ${results.percentage}%, rgba(255, 255, 255, 0.1) ${results.percentage}% 100%)`;
    }, 100);
    
    showScreen('results');
}

// Сохранить в Firebase
async function saveToFirebase(results) {
    if (!state.user) return;
    
    try {
        const resultData = {
            studentName: state.user.name,
            studentClass: state.user.class,
            correctAnswers: results.correct,
            totalQuestions: results.total,
            percentage: results.percentage,
            grade: results.grade,
            gradeText: results.gradeText,
            date: results.date,
            time: results.time,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            testId: state.testId
        };
        
        await db.collection('testResults').add(resultData);
        
        console.log('Результат сохранен в Firebase');
        
    } catch (error) {
        console.error('Ошибка сохранения в Firebase:', error);
    }
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

