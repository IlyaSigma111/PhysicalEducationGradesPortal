// ============================================
// КОНФИГУРАЦИЯ ТЕСТА
// ============================================
const CONFIG = {
    TOTAL_QUESTIONS: 10,
    MIN_PASS_SCORE: 6,
    QUESTIONS_PER_TEST: 10
};

// ============================================
// БАЗА ВОПРОСОВ (100 вопросов по физкультуре)
// ============================================
const QUESTIONS_DATABASE = [
    // 1-10: Основы физкультуры
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
    },
    // 11-20: Спортивные игры
    {
        id: 11,
        question: "В баскетболе за штрафной бросок дают:",
        options: ["1 очко", "2 очка", "3 очка", "4 очка"],
        correct: 0,
        category: "Спортивные игры"
    },
    {
        id: 12,
        question: "Волейбольная команда состоит из:",
        options: ["5 игроков", "6 игроков", "7 игроков", "8 игроков"],
        correct: 1,
        category: "Спортивные игры"
    },
    {
        id: 13,
        question: "Футбольный матч длится:",
        options: ["2 тайма по 45 мин", "3 периода", "4 тайма", "До 5 голов"],
        correct: 0,
        category: "Спортивные игры"
    },
    {
        id: 14,
        question: "Что такое офсайд в футболе?",
        options: ["Положение вне игры", "Удар от ворот", "Угловой", "Штрафной"],
        correct: 0,
        category: "Спортивные игры"
    },
    {
        id: 15,
        question: "В теннисе счет ведется:",
        options: ["15, 30, 40", "1, 2, 3", "10, 20, 30", "A, B, C"],
        correct: 0,
        category: "Спортивные игры"
    },
    {
        id: 16,
        question: "Сколько игроков в баскетбольной команде на площадке?",
        options: ["4", "5", "6", "7"],
        correct: 1,
        category: "Спортивные игры"
    },
    {
        id: 17,
        question: "Какой цвет карточки за грубую игру в футболе?",
        options: ["Желтый", "Красный", "Зеленый", "Синий"],
        correct: 1,
        category: "Спортивные игры"
    },
    {
        id: 18,
        question: "Волейбольный мяч весит примерно:",
        options: ["200-220 г", "260-280 г", "300-320 г", "350-400 г"],
        correct: 1,
        category: "Спортивные игры"
    },
    {
        id: 19,
        question: "Родина баскетбола:",
        options: ["США", "Канада", "Англия", "Франция"],
        correct: 0,
        category: "Спортивные игры"
    },
    {
        id: 20,
        question: "Высота баскетбольного кольца:",
        options: ["2.80 м", "3.05 м", "3.30 м", "3.50 м"],
        correct: 1,
        category: "Спортивные игры"
    },
    // 21-30: Легкая атлетика
    {
        id: 21,
        question: "Бег на 100 метров называется:",
        options: ["Спринт", "Стайерский", "Марафон", "Кросс"],
        correct: 0,
        category: "Легкая атлетика"
    },
    {
        id: 22,
        question: "Марафонская дистанция:",
        options: ["10 км", "21.1 км", "42.195 км", "50 км"],
        correct: 2,
        category: "Легкая атлетика"
    },
    {
        id: 23,
        question: "Что такое эстафета?",
        options: ["Командный бег", "Бег с барьерами", "Бег в гору", "Бег по стадиону"],
        correct: 0,
        category: "Легкая атлетика"
    },
    {
        id: 24,
        question: "Прыжок в длину выполняется:",
        options: ["С разбега", "С места", "С трамплина", "С шестом"],
        correct: 0,
        category: "Легкая атлетика"
    },
    {
        id: 25,
        question: "Что такое тройной прыжок?",
        options: ["Скачок, шаг, прыжок", "Три прыжка", "Прыжок с шестом", "Прыжок в высоту"],
        correct: 0,
        category: "Легкая атлетика"
    },
    {
        id: 26,
        question: "Бег на 400 метров относится к:",
        options: ["Спринту", "Средним дистанциям", "Длинным дистанциям", "Барьерному бегу"],
        correct: 0,
        category: "Легкая атлетика"
    },
    {
        id: 27,
        question: "Что такое кросс?",
        options: ["Бег по пересеченной местности", "Бег на стадионе", "Бег с препятствиями", "Командный бег"],
        correct: 0,
        category: "Легкая атлетика"
    },
    {
        id: 28,
        question: "Метание диска выполняется из:",
        options: ["Круга", "Коридора", "С разбега", "С места"],
        correct: 0,
        category: "Легкая атлетика"
    },
    {
        id: 29,
        question: "Высота барьеров в беге на 110 метров:",
        options: ["0.914 м", "1.067 м", "1.219 м", "1.372 м"],
        correct: 1,
        category: "Легкая атлетика"
    },
    {
        id: 30,
        question: "Сколько попыток дается в прыжках в длину?",
        options: ["3", "4", "5", "6"],
        correct: 3,
        category: "Легкая атлетика"
    },
    // 31-40: Гимнастика
    {
        id: 31,
        question: "Что такое кувырок?",
        options: ["Переворот через голову", "Прыжок", "Стойка", "Мост"],
        correct: 0,
        category: "Гимнастика"
    },
    {
        id: 32,
        question: "Упражнение 'мостик' развивает:",
        options: ["Гибкость", "Силу", "Выносливость", "Скорость"],
        correct: 0,
        category: "Гимнастика"
    },
    {
        id: 33,
        question: "Что такое шпагат?",
        options: ["Растяжка ног", "Наклон", "Кувырок", "Стойка"],
        correct: 0,
        category: "Гимнастика"
    },
    {
        id: 34,
        question: "Стойка на лопатках называется:",
        options: ["Березка", "Мостик", "Колесо", "Кувырок"],
        correct: 0,
        category: "Гимнастика"
    },
    {
        id: 35,
        question: "Упражнение 'уголок' выполняется:",
        options: ["В висе", "Лежа", "Стоя", "Сидя"],
        correct: 0,
        category: "Гимнастика"
    },
    {
        id: 36,
        question: "Что такое колесо в гимнастике?",
        options: ["Боковой переворот", "Вращение", "Прыжок", "Кувырок"],
        correct: 0,
        category: "Гимнастика"
    },
    {
        id: 37,
        question: "Основной снаряд в спортивной гимнастике для женщин:",
        options: ["Бревно", "Кольца", "Конь", "Перекладина"],
        correct: 0,
        category: "Гимнастика"
    },
    {
        id: 38,
        question: "Что такое вис в гимнастике?",
        options: ["Положение на снаряде", "Падение", "Прыжок", "Бег"],
        correct: 0,
        category: "Гимнастика"
    },
    {
        id: 39,
        question: "Стойка на руках требует развития:",
        options: ["Силы рук и координации", "Гибкости", "Выносливости", "Скорости"],
        correct: 0,
        category: "Гимнастика"
    },
    {
        id: 40,
        question: "Что такое опорный прыжок?",
        options: ["Прыжок через коня", "Прыжок в длину", "Прыжок в высоту", "Тройной прыжок"],
        correct: 0,
        category: "Гимнастика"
    }
];

// ============================================
// СОСТОЯНИЕ ПРИЛОЖЕНИЯ
// ============================================
let appState = {
    // Данные пользователя
    user: {
        fullName: "",
        className: "",
        isLoggedIn: false
    },
    
    // Текущий тест
    currentTest: {
        questions: [],
        currentQuestionIndex: 0,
        userAnswers: new Array(CONFIG.TOTAL_QUESTIONS).fill(null),
        startTime: null,
        endTime: null,
        testId: null
    },
    
    // Настройки
    settings: {
        soundEnabled: true,
        animationsEnabled: true,
        autoNextQuestion: false
    },
    
    // История тестов
    testHistory: []
};

// ============================================
// DOM ЭЛЕМЕНТЫ
// ============================================
const DOM = {
    // Экраны
    screens: {
        welcome: document.getElementById('screen-welcome'),
        login: document.getElementById('screen-login'),
        test: document.getElementById('screen-test'),
        results: document.getElementById('screen-results')
    },
    
    // Кнопки
    buttons: {
        start: document.getElementById('start-btn'),
        login: document.getElementById('login-btn'),
        prev: document.getElementById('prev-btn'),
        next: document.getElementById('next-btn'),
        submit: document.getElementById('submit-btn'),
        retry: document.getElementById('retry-btn'),
        home: document.getElementById('home-btn')
    },
    
    // Поля ввода
    inputs: {
        fullName: document.getElementById('fullname'),
        className: document.getElementById('class')
    },
    
    // Элементы теста
    test: {
        counter: document.getElementById('question-counter'),
        progress: document.getElementById('progress-fill'),
        questionText: document.getElementById('question-text'),
        options: document.getElementById('options')
    },
    
    // Элементы результатов
    results: {
        percent: document.getElementById('score-percent'),
        subtitle: document.getElementById('result-subtitle'),
        name: document.getElementById('result-name'),
        date: document.getElementById('result-date'),
        score: document.getElementById('result-score'),
        circle: document.getElementById('score-circle')
    }
};

// ============================================
// ИНИЦИАЛИЗАЦИЯ ПРИЛОЖЕНИЯ
// ============================================
function initializeApp() {
    console.log("🚀 Инициализация приложения...");
    
    try {
        // Загружаем сохраненные данные
        loadSavedData();
        
        // Настраиваем обработчики событий
        setupEventListeners();
        
        // Показываем стартовый экран
        showScreen('welcome');
        
        // Восстанавливаем поля ввода, если есть сохраненные данные
        if (appState.user.fullName) {
            DOM.inputs.fullName.value = appState.user.fullName;
        }
        if (appState.user.className) {
            DOM.inputs.className.value = appState.user.className;
        }
        
        console.log("✅ Приложение инициализировано успешно!");
        
    } catch (error) {
        console.error("❌ Ошибка инициализации:", error);
        showError("Ошибка загрузки приложения. Пожалуйста, обновите страницу.");
    }
}

// ============================================
// ЗАГРУЗКА СОХРАНЕННЫХ ДАННЫХ
// ============================================
function loadSavedData() {
    try {
        // Загружаем данные пользователя
        const savedUser = localStorage.getItem('fizraQuizUser');
        if (savedUser) {
            appState.user = JSON.parse(savedUser);
        }
        
        // Загружаем историю тестов
        const savedHistory = localStorage.getItem('fizraQuizHistory');
        if (savedHistory) {
            appState.testHistory = JSON.parse(savedHistory);
        }
        
        console.log("📁 Загружены сохраненные данные");
        
    } catch (error) {
        console.warn("⚠️ Ошибка загрузки сохраненных данных:", error);
        // Сбрасываем настройки по умолчанию
        appState.user = { fullName: "", className: "", isLoggedIn: false };
        appState.testHistory = [];
    }
}

// ============================================
// СОХРАНЕНИЕ ДАННЫХ
// ============================================
function saveUserData() {
    try {
        localStorage.setItem('fizraQuizUser', JSON.stringify(appState.user));
    } catch (error) {
        console.warn("⚠️ Ошибка сохранения данных пользователя:", error);
    }
}

function saveTestHistory() {
    try {
        localStorage.setItem('fizraQuizHistory', JSON.stringify(appState.testHistory));
    } catch (error) {
        console.warn("⚠️ Ошибка сохранения истории тестов:", error);
    }
}

// ============================================
// ОБРАБОТЧИКИ СОБЫТИЙ
// ============================================
function setupEventListeners() {
    console.log("🎮 Настройка обработчиков событий...");
    
    // Проверяем существование элементов перед добавлением обработчиков
    if (!DOM.buttons.start) {
        console.error("❌ Кнопка 'start-btn' не найдена в DOM!");
        return;
    }
    
    if (!DOM.buttons.login) {
        console.error("❌ Кнопка 'login-btn' не найдена в DOM!");
        return;
    }
    
    // Основные кнопки
    DOM.buttons.start.addEventListener('click', handleStartButtonClick);
    DOM.buttons.login.addEventListener('click', handleLoginButtonClick);
    DOM.buttons.prev.addEventListener('click', handlePrevButtonClick);
    DOM.buttons.next.addEventListener('click', handleNextButtonClick);
    DOM.buttons.submit.addEventListener('click', handleSubmitButtonClick);
    DOM.buttons.retry.addEventListener('click', handleRetryButtonClick);
    DOM.buttons.home.addEventListener('click', handleHomeButtonClick);
    
    // Обработка клавиатуры
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Обработка ввода в поля формы
    DOM.inputs.fullName.addEventListener('input', handleFormInput);
    DOM.inputs.className.addEventListener('change', handleFormInput);
    
    console.log("✅ Обработчики событий настроены");
}

// ============================================
// ОБРАБОТЧИКИ КНОПОК
// ============================================
function handleStartButtonClick() {
    console.log("🖱️ Нажата кнопка 'Начать тест'");
    showScreen('login');
    DOM.inputs.fullName.focus();
    
    // Анимация нажатия
    animateButton(DOM.buttons.start);
}

function handleLoginButtonClick() {
    console.log("🖱️ Нажата кнопка 'Начать тест' на экране логина");
    
    const fullName = DOM.inputs.fullName.value.trim();
    const className = DOM.inputs.className.value;
    
    // Валидация ввода
    if (!validateInput(fullName, className)) {
        return;
    }
    
    // Сохраняем данные пользователя
    appState.user = {
        fullName: fullName,
        className: className,
        isLoggedIn: true
    };
    
    saveUserData();
    
    // Запускаем тест
    startNewTest();
    
    // Анимация нажатия
    animateButton(DOM.buttons.login);
}

function handlePrevButtonClick() {
    if (appState.currentTest.currentQuestionIndex > 0) {
        appState.currentTest.currentQuestionIndex--;
        showCurrentQuestion();
        animateButton(DOM.buttons.prev);
    }
}

function handleNextButtonClick() {
    const currentQuestion = appState.currentTest.questions[appState.currentTest.currentQuestionIndex];
    const userAnswer = appState.currentTest.userAnswers[appState.currentTest.currentQuestionIndex];
    
    // Проверяем, что ответ выбран
    if (userAnswer === null && !confirm("Вы не ответили на этот вопрос. Перейти дальше?")) {
        return;
    }
    
    if (appState.currentTest.currentQuestionIndex < CONFIG.TOTAL_QUESTIONS - 1) {
        appState.currentTest.currentQuestionIndex++;
        showCurrentQuestion();
        animateButton(DOM.buttons.next);
    }
}

function handleSubmitButtonClick() {
    const unansweredCount = appState.currentTest.userAnswers.filter(answer => answer === null).length;
    
    if (unansweredCount > 0) {
        if (!confirm(`Вы ответили не на все вопросы (осталось ${unansweredCount}). Завершить тест?`)) {
            return;
        }
    }
    
    finishTest();
    animateButton(DOM.buttons.submit);
}

function handleRetryButtonClick() {
    startNewTest();
    animateButton(DOM.buttons.retry);
}

function handleHomeButtonClick() {
    showScreen('welcome');
    animateButton(DOM.buttons.home);
}

// ============================================
// ВАЛИДАЦИЯ ВВОДА
// ============================================
function validateInput(fullName, className) {
    // Проверка ФИО
    if (!fullName) {
        showAlert("Введите фамилию и имя", "warning");
        DOM.inputs.fullName.focus();
        shakeElement(DOM.inputs.fullName);
        return false;
    }
    
    if (fullName.length < 2) {
        showAlert("Фамилия и имя должны содержать минимум 2 символа", "warning");
        DOM.inputs.fullName.focus();
        shakeElement(DOM.inputs.fullName);
        return false;
    }
    
    if (!/^[а-яА-ЯёЁ\s-]+$/.test(fullName)) {
        showAlert("Фамилия и имя должны содержать только русские буквы", "warning");
        DOM.inputs.fullName.focus();
        shakeElement(DOM.inputs.fullName);
        return false;
    }
    
    // Проверка класса
    if (!className) {
        showAlert("Выберите класс", "warning");
        DOM.inputs.className.focus();
        shakeElement(DOM.inputs.className);
        return false;
    }
    
    return true;
}

// ============================================
// УПРАВЛЕНИЕ ЭКРАНАМИ
// ============================================
function showScreen(screenName) {
    console.log(`🖥️ Переключение на экран: ${screenName}`);
    
    // Скрываем все экраны
    Object.values(DOM.screens).forEach(screen => {
        if (screen) {
            screen.classList.remove('active');
        }
    });
    
    // Показываем нужный экран
    const targetScreen = DOM.screens[screenName];
    if (targetScreen) {
        targetScreen.classList.add('active');
        console.log(`✅ Экран '${screenName}' показан`);
    } else {
        console.error(`❌ Экран '${screenName}' не найден`);
    }
}

// ============================================
// ТЕСТИРОВАНИЕ
// ============================================
function startNewTest() {
    console.log("🧠 Начало нового теста...");
    
    // Генерируем уникальный ID теста
    appState.currentTest.testId = 'test_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    
    // Выбираем случайные вопросы
    appState.currentTest.questions = selectRandomQuestions();
    
    // Сбрасываем ответы
    appState.currentTest.userAnswers = new Array(CONFIG.TOTAL_QUESTIONS).fill(null);
    appState.currentTest.currentQuestionIndex = 0;
    appState.currentTest.startTime = new Date();
    appState.currentTest.endTime = null;
    
    console.log(`✅ Тест начат. ID: ${appState.currentTest.testId}`);
    console.log(`📝 Выбрано вопросов: ${appState.currentTest.questions.length}`);
    
    // Показываем экран теста
    showScreen('test');
    
    // Показываем первый вопрос
    setTimeout(() => {
        showCurrentQuestion();
    }, 300);
}

function selectRandomQuestions() {
    // Создаем копию базы вопросов
    const availableQuestions = [...QUESTIONS_DATABASE];
    const selectedQuestions = [];
    
    // Выбираем случайные вопросы
    for (let i = 0; i < CONFIG.QUESTIONS_PER_TEST && availableQuestions.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * availableQuestions.length);
        const question = availableQuestions[randomIndex];
        
        // Перемешиваем варианты ответов
        const shuffledQuestion = {
            ...question,
            options: shuffleArray([...question.options]),
            // Обновляем индекс правильного ответа после перемешивания
            correct: question.options.indexOf(question.options[question.correct])
        };
        
        selectedQuestions.push(shuffledQuestion);
        
        // Удаляем выбранный вопрос, чтобы не повторяться
        availableQuestions.splice(randomIndex, 1);
    }
    
    return selectedQuestions;
}

function showCurrentQuestion() {
    const questionIndex = appState.currentTest.currentQuestionIndex;
    const question = appState.currentTest.questions[questionIndex];
    const userAnswer = appState.currentTest.userAnswers[questionIndex];
    
    if (!question) {
        console.error("❌ Вопрос не найден!");
        return;
    }
    
    // Обновляем счетчик
    DOM.test.counter.textContent = `Вопрос ${questionIndex + 1}/${CONFIG.TOTAL_QUESTIONS}`;
    
    // Обновляем прогресс
    const progressPercent = ((questionIndex + 1) / CONFIG.TOTAL_QUESTIONS) * 100;
    DOM.test.progress.style.width = `${progressPercent}%`;
    
    // Показываем текст вопроса
    DOM.test.questionText.textContent = question.question;
    
    // Показываем варианты ответов
    renderOptions(question, userAnswer);
    
    // Обновляем состояние кнопок
    updateNavigationButtons();
    
    console.log(`📋 Показан вопрос ${questionIndex + 1}`);
}

function renderOptions(question, selectedAnswer) {
    DOM.test.options.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        
        // Добавляем класс selected, если это выбранный ответ
        if (selectedAnswer === index) {
            optionElement.classList.add('selected');
        }
        
        // Добавляем анимацию
        if (appState.settings.animationsEnabled) {
            optionElement.style.animationDelay = `${index * 0.1}s`;
            optionElement.classList.add('option-slide');
        }
        
        optionElement.innerHTML = `
            <div class="option-letter">${String.fromCharCode(65 + index)}</div>
            <div class="option-text">${option}</div>
        `;
        
        // Обработчик клика
        optionElement.addEventListener('click', () => selectAnswer(index));
        
        DOM.test.options.appendChild(optionElement);
    });
}

function selectAnswer(answerIndex) {
    const questionIndex = appState.currentTest.currentQuestionIndex;
    
    // Сохраняем ответ
    appState.currentTest.userAnswers[questionIndex] = answerIndex;
    
    // Обновляем отображение
    const allOptions = DOM.test.options.querySelectorAll('.option');
    allOptions.forEach((option, index) => {
        option.classList.toggle('selected', index === answerIndex);
    });
    
    // Анимация выбора
    if (appState.settings.animationsEnabled) {
        const selectedOption = allOptions[answerIndex];
        if (selectedOption) {
            selectedOption.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
                selectedOption.style.animation = '';
            }, 500);
        }
    }
    
    // Обновляем кнопки
    updateNavigationButtons();
    
    console.log(`✅ Ответ сохранен: вопрос ${questionIndex + 1} → вариант ${String.fromCharCode(65 + answerIndex)}`);
}

function updateNavigationButtons() {
    const questionIndex = appState.currentTest.currentQuestionIndex;
    const userAnswer = appState.currentTest.userAnswers[questionIndex];
    
    // Кнопка "Назад"
    DOM.buttons.prev.style.display = questionIndex > 0 ? 'flex' : 'none';
    
    // Кнопка "Далее"
    if (questionIndex < CONFIG.TOTAL_QUESTIONS - 1) {
        DOM.buttons.next.style.display = 'flex';
        DOM.buttons.next.disabled = !appState.settings.autoNextQuestion && userAnswer === null;
        DOM.buttons.submit.style.display = 'none';
    } else {
        // Последний вопрос
        DOM.buttons.next.style.display = 'none';
        DOM.buttons.submit.style.display = 'flex';
    }
}

// ============================================
// ЗАВЕРШЕНИЕ ТЕСТА
// ============================================
function finishTest() {
    console.log("🏁 Завершение теста...");
    
    appState.currentTest.endTime = new Date();
    
    // Рассчитываем результаты
    const results = calculateResults();
    
    // Сохраняем в историю
    const testResult = {
        testId: appState.currentTest.testId,
        user: { ...appState.user },
        questions: [...appState.currentTest.questions],
        userAnswers: [...appState.currentTest.userAnswers],
        results: results,
        startTime: appState.currentTest.startTime,
        endTime: appState.currentTest.endTime,
        timestamp: new Date().toISOString()
    };
    
    appState.testHistory.push(testResult);
    saveTestHistory();
    
    // Показываем результаты
    showResults(results);
    
    console.log(`📊 Тест завершен. Результат: ${results.correct}/${results.total} (${results.percentage}%)`);
    
    // Здесь можно добавить сохранение в Firebase (если будет настроено)
    // saveResultsToFirebase(testResult);
}

function calculateResults() {
    let correctAnswers = 0;
    const totalQuestions = appState.currentTest.questions.length;
    
    appState.currentTest.questions.forEach((question, index) => {
        const userAnswer = appState.currentTest.userAnswers[index];
        if (userAnswer !== null && userAnswer === question.correct) {
            correctAnswers++;
        }
    });
    
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    const timeSpent = Math.round((appState.currentTest.endTime - appState.currentTest.startTime) / 1000);
    
    // Определяем оценку
    let grade, gradeText;
    if (percentage >= 85) {
        grade = '5';
        gradeText = 'Отлично';
    } else if (percentage >= 70) {
        grade = '4';
        gradeText = 'Хорошо';
    } else if (percentage >= 50) {
        grade = '3';
        gradeText = 'Удовлетворительно';
    } else {
        grade = '2';
        gradeText = 'Неудовлетворительно';
    }
    
    return {
        correct: correctAnswers,
        total: totalQuestions,
        percentage: percentage,
        grade: grade,
        gradeText: gradeText,
        timeSpent: timeSpent,
        passed: correctAnswers >= CONFIG.MIN_PASS_SCORE
    };
}

function showResults(results) {
    // Обновляем данные на экране
    DOM.results.percent.textContent = `${results.percentage}%`;
    DOM.results.subtitle.textContent = results.gradeText;
    DOM.results.name.textContent = `${appState.user.fullName}, ${appState.user.className} класс`;
    DOM.results.date.textContent = new Date().toLocaleDateString('ru-RU');
    DOM.results.score.textContent = `${results.correct}/${results.total} (${results.grade})`;
    
    // Анимация круга с результатами
    setTimeout(() => {
        DOM.results.circle.style.background = 
            `conic-gradient(#6366f1 0% ${results.percentage}%, rgba(255, 255, 255, 0.1) ${results.percentage}% 100%)`;
    }, 100);
    
    // Показываем экран результатов
    showScreen('results');
    
    // Добавляем дополнительную информацию
    setTimeout(() => {
        const timeInfo = document.createElement('div');
        timeInfo.className = 'time-info';
        timeInfo.innerHTML = `
            <div style="
                background: rgba(99, 102, 241, 0.1);
                border-radius: 12px;
                padding: 15px;
                margin-top: 20px;
                text-align: center;
                color: #6366f1;
                font-size: 14px;
            ">
                <i class="fas fa-clock"></i>
                Время прохождения: ${results.timeSpent} секунд
                <br>
                <small>Тест пройден: ${results.passed ? '✅ Успешно' : '⚠️ Требуется пересдача'}</small>
            </div>
        `;
        
        const resultsCard = document.querySelector('#screen-results .card');
        if (resultsCard) {
            resultsCard.appendChild(timeInfo);
        }
    }, 500);
}

// ============================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ============================================
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function animateButton(button) {
    if (!button || !appState.settings.animationsEnabled) return;
    
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 150);
}

function shakeElement(element) {
    if (!element || !appState.settings.animationsEnabled) return;
    
    element.style.animation = 'shake 0.5s ease';
    setTimeout(() => {
        element.style.animation = '';
    }, 500);
}

function showAlert(message, type = 'info') {
    const colors = {
        info: '#6366f1',
        warning: '#f59e0b',
        error: '#ef4444',
        success: '#10b981'
    };
    
    const alertDiv = document.createElement('div');
    alertDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type]};
        color: white;
        padding: 15px 20px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
        max-width: 400px;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 10px;
    `;
    
    const icons = {
        info: 'fa-info-circle',
        warning: 'fa-exclamation-triangle',
        error: 'fa-times-circle',
        success: 'fa-check-circle'
    };
    
    alertDiv.innerHTML = `
        <i class="fas ${icons[type]}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
        alertDiv.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.parentNode.removeChild(alertDiv);
            }
        }, 300);
    }, 3000);
}

function showError(message) {
    showAlert(message, 'error');
}

function handleKeyboardNavigation(event) {
    // Игнорируем, если фокус в поле ввода
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'SELECT') {
        return;
    }
    
    const currentScreen = Object.keys(DOM.screens).find(key => 
        DOM.screens[key] && DOM.screens[key].classList.contains('active')
    );
    
    switch (currentScreen) {
        case 'test':
            handleTestKeyboardNavigation(event);
            break;
        case 'login':
            handleLoginKeyboardNavigation(event);
            break;
    }
}

function handleTestKeyboardNavigation(event) {
    switch (event.key) {
        case 'ArrowLeft':
            if (DOM.buttons.prev.style.display !== 'none') {
                handlePrevButtonClick();
            }
            break;
        case 'ArrowRight':
        case 'Enter':
            if (DOM.buttons.next.style.display !== 'none' && !DOM.buttons.next.disabled) {
                handleNextButtonClick();
            } else if (DOM.buttons.submit.style.display !== 'none') {
                handleSubmitButtonClick();
            }
            break;
        case '1':
        case '2':
        case '3':
        case '4':
            const answerIndex = parseInt(event.key) - 1;
            if (answerIndex >= 0 && answerIndex < 4) {
                selectAnswer(answerIndex);
            }
            break;
    }
}

function handleLoginKeyboardNavigation(event) {
    if (event.key === 'Enter') {
        handleLoginButtonClick();
    }
}

function handleFormInput() {
    // Можно добавить live validation или другие обработчики
}

// ============================================
// ДОПОЛНИТЕЛЬНЫЕ ФУНКЦИИ ДЛЯ ОТЛАДКИ
// ============================================
function debugApp() {
    console.log("🔍 Отладка приложения:");
    console.log("- Состояние:", appState);
    console.log("- DOM элементы:", DOM);
    console.log("- Всего вопросов в базе:", QUESTIONS_DATABASE.length);
    console.log("- История тестов:", appState.testHistory.length);
}

// ============================================
// ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log("📄 Страница загружена");
    
    // Добавляем стили для анимаций
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        .time-info {
            animation: fadeIn 0.5s ease;
        }
    `;
    document.head.appendChild(style);
    
    // Запускаем приложение
    setTimeout(initializeApp, 100);
});

// ============================================
// ГЛОБАЛЬНЫЕ ФУНКЦИИ (для отладки)
// ============================================
window.debugQuiz = debugApp;
window.resetQuiz = function() {
    if (confirm("Сбросить все данные приложения?")) {
        localStorage.clear();
        location.reload();
    }
};
