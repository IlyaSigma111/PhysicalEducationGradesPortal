// Конфигурация приложения
const CONFIG = {
    TOTAL_QUESTIONS: 10,
    TIME_LIMIT: 600, // 10 минут в секундах
    TELEGRAM_BOT_TOKEN: '7658490450:AAFrnv3U1uzswOOUdqMDIvDagbZCgCCuhPI',
    TELEGRAM_CHAT_ID: '7658490450', // ID чата учителя
    QUESTIONS_PER_TEST: 10
};

// База из 100 вопросов по физкультуре
const QUESTIONS_DATABASE = [
    // 1. Общие вопросы (1-20)
    {
        question: "Что развивает регулярная физическая активность?",
        options: ["Только мышцы", "Только сердце", "Все системы организма", "Только кости"],
        correct: 2,
        category: "Общие"
    },
    {
        question: "Сколько раз в неделю рекомендуется заниматься физкультурой?",
        options: ["1 раз", "2-3 раза", "3-5 раз", "Только на уроках"],
        correct: 2,
        category: "Здоровье"
    },
    {
        question: "Что такое разминка?",
        options: ["Основная часть тренировки", "Подготовка организма к нагрузке", "Заминка после тренировки", "Силовая часть занятия"],
        correct: 1,
        category: "Теория"
    },
    {
        question: "Какой витамин вырабатывается на солнце и важен для костей?",
        options: ["Витамин А", "Витамин С", "Витамин D", "Витамин B12"],
        correct: 2,
        category: "Здоровье"
    },
    {
        question: "Что измеряет пульсометр?",
        options: ["Артериальное давление", "Частоту сердечных сокращений", "Уровень кислорода в крови", "Температуру тела"],
        correct: 1,
        category: "Оборудование"
    },
    {
        question: "Как называется передача мяча в волейболе?",
        options: ["Пас", "Подача", "Атака", "Блок"],
        correct: 0,
        category: "Волейбол"
    },
    {
        question: "Сколько игроков в баскетбольной команде на площадке?",
        options: ["5", "6", "7", "8"],
        correct: 0,
        category: "Баскетбол"
    },
    {
        question: "Что такое осанка?",
        options: ["Умение красиво ходить", "Правильное положение тела при сидении и стоянии", "Гибкость позвоночника", "Сила мышц спины"],
        correct: 1,
        category: "Здоровье"
    },
    {
        question: "Какой вид спорта развивает все группы мышц?",
        options: ["Шахматы", "Плавание", "Стрельба", "Гольф"],
        correct: 1,
        category: "Общие"
    },
    {
        question: "Что такое ГТО?",
        options: ["Спортивная игра", "Комплекс нормативов", "Вид спорта", "Спортивное общество"],
        correct: 1,
        category: "История"
    },
    {
        question: "Как правильно дышать при беге?",
        options: ["Только носом", "Только ртом", "Равномерно через нос и рот", "Задерживать дыхание"],
        correct: 2,
        category: "Техника"
    },
    {
        question: "Что такое аэробика?",
        options: ["Силовая тренировка", "Кардиотренировка с кислородом", "Стретчинг", "Йога"],
        correct: 1,
        category: "Виды спорта"
    },
    {
        question: "Какой элемент бега является основным?",
        options: ["Прыжок", "Толчок", "Приземление", "Отталкивание"],
        correct: 3,
        category: "Легкая атлетика"
    },
    {
        question: "Что развивают упражнения на гибкость?",
        options: ["Силу мышц", "Подвижность суставов", "Выносливость", "Координацию"],
        correct: 1,
        category: "Гибкость"
    },
    {
        question: "Как называется начало бега в соревнованиях?",
        options: ["Старт", "Финиш", "Разгон", "Спринт"],
        correct: 0,
        category: "Легкая атлетика"
    },
    {
        question: "Что такое здоровый образ жизни?",
        options: ["Только занятия спортом", "Отказ от вредных привычек", "Комплекс мер для укрепления здоровья", "Только правильное питание"],
        correct: 2,
        category: "Здоровье"
    },
    {
        question: "Какой снаряд используется в художественной гимнастике?",
        options: ["Гантели", "Лента", "Штанга", "Брусья"],
        correct: 1,
        category: "Гимнастика"
    },
    {
        question: "Что такое пульс?",
        options: ["Дыхание", "Сердцебиение", "Давление", "Температура"],
        correct: 1,
        category: "Анатомия"
    },
    {
        question: "Как называется игра с мячом через сетку?",
        options: ["Футбол", "Волейбол", "Баскетбол", "Гандбол"],
        correct: 1,
        category: "Волейбол"
    },
    {
        question: "Что такое координация?",
        options: ["Скорость движений", "Согласованность движений", "Сила мышц", "Выносливость"],
        correct: 1,
        category: "Физические качества"
    },
    // 2. Спортивные игры (21-40)
    {
        question: "Сколько таймов в футбольном матче?",
        options: ["1", "2", "3", "4"],
        correct: 1,
        category: "Футбол"
    },
    {
        question: "Как называется удар по мячу в футболе?",
        options: ["Пас", "Удар", "Бросок", "Подача"],
        correct: 1,
        category: "Футбол"
    },
    {
        question: "Что такое офсайд в футболе?",
        options: ["Нарушение правил", "Положение вне игры", "Желтая карточка", "Удар от ворот"],
        correct: 1,
        category: "Футбол"
    },
    {
        question: "Сколько очков дается за штрафной бросок в баскетболе?",
        options: ["1", "2", "3", "4"],
        correct: 0,
        category: "Баскетбол"
    },
    {
        question: "Что такое дриблинг?",
        options: ["Передача мяча", "Ведение мяча", "Бросок по кольцу", "Защита"],
        correct: 1,
        category: "Баскетбол"
    },
    {
        question: "Какой высоты волейбольная сетка для мужчин?",
        options: ["2.24 м", "2.43 м", "2.60 м", "2.80 м"],
        correct: 1,
        category: "Волейбол"
    },
    {
        question: "Что такое блок в волейболе?",
        options: ["Подача", "Прием мяча", "Преграждение атаки", "Передача"],
        correct: 2,
        category: "Волейбол"
    },
    {
        question: "Сколько игроков в гандбольной команде?",
        options: ["5", "6", "7", "8"],
        correct: 2,
        category: "Гандбол"
    },
    {
        question: "Как называется подача в теннисе?",
        options: ["Серв", "Смаш", "Воллей", "Драйв"],
        correct: 0,
        category: "Теннис"
    },
    {
        question: "Что такое эйс в теннисе?",
        options: ["Подача навылет", "Ошибка", "Переигровка", "Сет"],
        correct: 0,
        category: "Теннис"
    },
    {
        question: "Сколько фигур в шахматах?",
        options: ["14", "16", "18", "20"],
        correct: 1,
        category: "Шахматы"
    },
    {
        question: "Как называется ничья в шахматах?",
        options: ["Мат", "Пат", "Шах", "Рокировка"],
        correct: 1,
        category: "Шахматы"
    },
    {
        question: "Сколько кеглей в боулинге?",
        options: ["8", "9", "10", "12"],
        correct: 2,
        category: "Боулинг"
    },
    {
        question: "Как называется удар битой в бейсболе?",
        options: ["Хоум-ран", "Страйк", "Бол", "Аут"],
        correct: 0,
        category: "Бейсбол"
    },
    {
        question: "Что такое гольф-клуб?",
        options: ["Мяч", "Лунка", "Клюшка", "Поле"],
        correct: 2,
        category: "Гольф"
    },
    {
        question: "Какой цвет олимпийских колец символизирует Европу?",
        options: ["Синий", "Желтый", "Черный", "Зеленый"],
        correct: 0,
        category: "Олимпиада"
    },
    {
        question: "Что такое заминка после тренировки?",
        options: ["Разминка", "Упражнения для восстановления", "Силовая часть", "Основная часть"],
        correct: 1,
        category: "Теория"
    },
    {
        question: "Как называется вид спорта на льду с клюшкой?",
        options: ["Керлинг", "Хоккей", "Фигурное катание", "Биатлон"],
        correct: 1,
        category: "Зимние виды"
    },
    {
        question: "Что измеряется в метрах и сантиметрах в легкой атлетике?",
        options: ["Время", "Длина прыжка", "Вес", "Сила"],
        correct: 1,
        category: "Легкая атлетика"
    },
    {
        question: "Какой витамин содержится в цитрусовых и важен для иммунитета?",
        options: ["Витамин А", "Витамин С", "Витамин D", "Витамин K"],
        correct: 1,
        category: "Питание"
    },
    // 3. Легкая атлетика (41-60)
    {
        question: "Как называется бег на короткую дистанцию?",
        options: ["Марафон", "Спринт", "Стайерский", "Кросс"],
        correct: 1,
        category: "Легкая атлетика"
    },
    {
        question: "Какая дистанция в марафоне?",
        options: ["10 км", "21.1 км", "42.195 км", "50 км"],
        correct: 2,
        category: "Легкая атлетика"
    },
    {
        question: "Что такое эстафета?",
        options: ["Бег с препятствиями", "Командный бег с передачей палочки", "Бег на выносливость", "Скоростной бег"],
        correct: 1,
        category: "Легкая атлетика"
    },
    {
        question: "Как называется прыжок с шестом?",
        options: ["Прыжок в высоту", "Прыжок в длину", "Прыжок с шестом", "Тройной прыжок"],
        correct: 2,
        category: "Легкая атлетика"
    },
    {
        question: "Что такое тройной прыжок?",
        options: ["Три прыжка подряд", "Прыжок с трех шагов", "Скачок, шаг и прыжок", "Прыжок через три препятствия"],
        correct: 2,
        category: "Легкая атлетика"
    },
    {
        question: "Как называется метание диска?",
        options: ["Толкание ядра", "Метание копья", "Метание диска", "Метание молота"],
        correct: 2,
        category: "Легкая атлетика"
    },
    {
        question: "Что такое барьерный бег?",
        options: ["Бег с препятствиями", "Бег по пересеченной местности", "Бег в гору", "Бег с ускорением"],
        correct: 0,
        category: "Легкая атлетика"
    },
    {
        question: "Сколько этапов в десятиборье?",
        options: ["8", "10", "12", "15"],
        correct: 1,
        category: "Легкая атлетика"
    },
    {
        question: "Что такое кросс?",
        options: ["Бег по стадиону", "Бег по пересеченной местности", "Бег на короткую дистанцию", "Эстафетный бег"],
        correct: 1,
        category: "Легкая атлетика"
    },
    {
        question: "Как называется старт из низкого положения?",
        options: ["Высокий старт", "Низкий старт", "Старт с ходу", "Старт с места"],
        correct: 1,
        category: "Легкая атлетика"
    },
    {
        question: "Какой орган качает кровь по телу?",
        options: ["Легкие", "Печень", "Сердце", "Почки"],
        correct: 2,
        category: "Анатомия"
    },
    {
        question: "Что такое гиподинамия?",
        options: ["Повышенная активность", "Недостаток движения", "Избыточный вес", "Нарушение осанки"],
        correct: 1,
        category: "Здоровье"
    },
    {
        question: "Какой пульс считается нормальным в покое у взрослого?",
        options: ["40-60 ударов", "60-80 ударов", "80-100 ударов", "100-120 ударов"],
        correct: 1,
        category: "Анатомия"
    },
    {
        question: "Что такое разносторонняя физическая подготовка?",
        options: ["Тренировка одной группы мышц", "Развитие всех физических качеств", "Только кардиотренировки", "Только силовые тренировки"],
        correct: 1,
        category: "Теория"
    },
    {
        question: "Какой минерал важен для крепости костей?",
        options: ["Железо", "Кальций", "Цинк", "Йод"],
        correct: 1,
        category: "Питание"
    },
    {
        question: "Что такое вестибулярный аппарат?",
        options: ["Орган слуха", "Орган равновесия", "Орган зрения", "Орган обоняния"],
        correct: 1,
        category: "Анатомия"
    },
    {
        question: "Сколько литров воды нужно пить в день?",
        options: ["0.5-1 литр", "1-1.5 литра", "1.5-2 литра", "2-2.5 литра"],
        correct: 2,
        category: "Здоровье"
    },
    {
        question: "Что такое метаболизм?",
        options: ["Дыхание", "Обмен веществ", "Кровообращение", "Пищеварение"],
        correct: 1,
        category: "Анатомия"
    },
    {
        question: "Какая температура тела считается нормальной?",
        options: ["35.5-36.5°C", "36.6-37.0°C", "37.1-37.5°C", "37.6-38.0°C"],
        correct: 1,
        category: "Здоровье"
    },
    {
        question: "Что такое сердечно-сосудистая система?",
        options: ["Система дыхания", "Система кровообращения", "Пищеварительная система", "Нервная система"],
        correct: 1,
        category: "Анатомия"
    },
    // 4. Гимнастика и зимние виды (61-80)
    {
        question: "Что такое кувырок?",
        options: ["Прыжок", "Переворот через голову", "Стойка на руках", "Мост"],
        correct: 1,
        category: "Гимнастика"
    },
    {
        question: "Как называется упражнение на брусьях?",
        options: ["Подъем", "Отжимание", "Переворот", "Стойка"],
        correct: 1,
        category: "Гимнастика"
    },
    {
        question: "Что такое мостик?",
        options: ["Прогиб назад", "Наклон вперед", "Поворот", "Прыжок"],
        correct: 0,
        category: "Гимнастика"
    },
    {
        question: "Как называется снаряд для упражнений у женщин?",
        options: ["Бревно", "Брусья", "Кольца", "Конь"],
        correct: 0,
        category: "Гимнастика"
    },
    {
        question: "Что такое колесо в гимнастике?",
        options: ["Кувырок", "Переворот в сторону", "Сальто", "Перекладина"],
        correct: 1,
        category: "Гимнастика"
    },
    {
        question: "Сколько видов в спортивной гимнастике у мужчин?",
        options: ["4", "6", "8", "10"],
        correct: 1,
        category: "Гимнастика"
    },
    {
        question: "Что такое вольные упражнения?",
        options: ["Упражнения на ковре", "Упражнения на снарядах", "Акробатика", "Хореография"],
        correct: 0,
        category: "Гимнастика"
    },
    {
        question: "Как называется снаряд для прыжков?",
        options: ["Козел", "Конь", "Мост", "Бревно"],
        correct: 0,
        category: "Гимнастика"
    },
    {
        question: "Что такое шпагат?",
        options: ["Наклон", "Мост", "Растяжка ног в разные стороны", "Кувырок"],
        correct: 2,
        category: "Гимнастика"
    },
    {
        question: "Как называется стойка на руках?",
        options: ["Мост", "Колесо", "Стойка на руках", "Кувырок"],
        correct: 2,
        category: "Гимнастика"
    },
    {
        question: "Как называется спуск на лыжах с горы?",
        options: ["Бег", "Слалом", "Горные лыжи", "Биатлон"],
        correct: 2,
        category: "Зимние виды"
    },
    {
        question: "Что такое слалом?",
        options: ["Прямой спуск", "Спуск через ворота", "Прыжок с трамплина", "Бег на лыжах"],
        correct: 1,
        category: "Зимние виды"
    },
    {
        question: "Сколько дистанций в биатлоне?",
        options: ["2", "4", "6", "8"],
        correct: 1,
        category: "Зимние виды"
    },
    {
        question: "Как называется прыжок с трамплина?",
        options: ["Прыжки на лыжах", "Ски-джемпинг", "Фристайл", "Сноуборд"],
        correct: 1,
        category: "Зимние виды"
    },
    {
        question: "Что такое керлинг?",
        options: ["Игра с камнями на льду", "Бег на коньках", "Хоккей", "Фигурное катание"],
        correct: 0,
        category: "Зимние виды"
    },
    {
        question: "Сколько фигур в фигурном катании?",
        options: ["4", "6", "8", "10"],
        correct: 1,
        category: "Зимние виды"
    },
    {
        question: "Что такое шорт-трек?",
        options: ["Бег на короткой дорожке", "Прыжки", "Танцы на льду", "Хоккей"],
        correct: 0,
        category: "Зимние виды"
    },
    {
        question: "Как называется санный спорт?",
        options: ["Бобслей", "Скелетон", "Люж", "Санки"],
        correct: 2,
        category: "Зимние виды"
    },
    {
        question: "Что такое бобслей?",
        options: ["Одиночные сани", "Двойные сани", "Спуск на санях-бобах", "Прыжки на лыжах"],
        correct: 2,
        category: "Зимние виды"
    },
    {
        question: "Как называется горнолыжный поворот?",
        options: ["Клин", "Карвинг", "Слалом", "Фристайл"],
        correct: 1,
        category: "Зимние виды"
    },
    // 5. История и теория (81-100)
    {
        question: "В каком году прошли первые Олимпийские игры?",
        options: ["776 г. до н.э.", "1896 г.", "1924 г.", "1952 г."],
        correct: 0,
        category: "История"
    },
    {
        question: "Что означает олимпийский девиз?",
        options: ["Быстрее, выше, сильнее", "Главное не победа, а участие", "Мир во всем мире", "Спорт для всех"],
        correct: 0,
        category: "Олимпиада"
    },
    {
        question: "Кто основатель современных Олимпийских игр?",
        options: ["Хуан Антонио Самаранч", "Пьер де Кубертен", "Алексис Видаль", "Томас Бах"],
        correct: 1,
        category: "История"
    },
    {
        question: "Какой город принимал Олимпиаду 1980 года?",
        options: ["Москва", "Ленинград", "Киев", "Минск"],
        correct: 0,
        category: "История"
    },
    {
        question: "Что такое паралимпийские игры?",
        options: ["Игры для профессионалов", "Игры для любителей", "Игры для спортсменов с инвалидностью", "Зимние игры"],
        correct: 2,
        category: "Олимпиада"
    },
    {
        question: "Как называется наука о физическом воспитании?",
        options: ["Биология", "Физиология", "Педагогика", "Теория физической культуры"],
        correct: 3,
        category: "Теория"
    },
    {
        question: "Что такое физическое качество?",
        options: ["Внешний вид", "Способность выполнять движения", "Телосложение", "Спортивный разряд"],
        correct: 1,
        category: "Теория"
    },
    {
        question: "Как называется план тренировок?",
        options: ["График", "Программа", "Расписание", "Цикл"],
        correct: 1,
        category: "Теория"
    },
    {
        question: "Что такое спортивная дисциплина?",
        options: ["Вид спорта", "Раздел вида спорта", "Правила", "Соревнования"],
        correct: 1,
        category: "Теория"
    },
    {
        question: "Как называется нарушение правил в спорте?",
        options: ["Фол", "Офсайд", "Аут", "Страйк"],
        correct: 0,
        category: "Теория"
    },
    {
        question: "Что такое допинг?",
        options: ["Лекарство", "Запрещенные вещества", "Витамины", "Спортивное питание"],
        correct: 1,
        category: "Теория"
    },
    {
        question: "Как называется судья в боксе?",
        options: ["Арбитр", "Рефери", "Судья", "Инспектор"],
        correct: 1,
        category: "Бокс"
    },
    {
        question: "Что такое любительский спорт?",
        options: ["Спорт для заработка", "Спорт без оплаты", "Профессиональный спорт", "Школьный спорт"],
        correct: 1,
        category: "Теория"
    },
    {
        question: "Как называется спортивное звание?",
        options: ["Разряд", "Звание мастера спорта", "Категория", "Квалификация"],
        correct: 1,
        category: "Теория"
    },
    {
        question: "Что такое спортивный разряд?",
        options: ["Награда", "Уровень подготовки", "Должность", "Звание"],
        correct: 1,
        category: "Теория"
    },
    {
        question: "Какой гормон вырабатывается при физических нагрузках?",
        options: ["Инсулин", "Адреналин", "Эндорфин", "Мелатонин"],
        correct: 2,
        category: "Анатомия"
    },
    {
        question: "Что такое сустав?",
        options: ["Кость", "Соединение костей", "Мышца", "Связка"],
        correct: 1,
        category: "Анатомия"
    },
    {
        question: "Как называется наука о здоровье?",
        options: ["Биология", "Гигиена", "Анатомия", "Физиология"],
        correct: 1,
        category: "Теория"
    },
    {
        question: "Что такое иммунитет?",
        options: ["Выносливость", "Защита организма", "Сила мышц", "Гибкость"],
        correct: 1,
        category: "Здоровье"
    },
    {
        question: "Какой витамин важен для зрения?",
        options: ["Витамин А", "Витамин В", "Витамин С", "Витамин D"],
        correct: 0,
        category: "Питание"
    }
];

// Состояние приложения
let appState = {
    user: null,
    currentQuestion: 0,
    userAnswers: [],
    testQuestions: [],
    startTime: null,
    timerInterval: null,
    timeLeft: CONFIG.TIME_LIMIT
};

// DOM элементы
const elements = {
    welcomeSection: document.getElementById('welcomeSection'),
    testSection: document.getElementById('testSection'),
    resultsSection: document.getElementById('resultsSection'),
    loginBtn: document.getElementById('loginBtn'),
    startTestBtn: document.getElementById('startTestBtn'),
    prevQuestionBtn: document.getElementById('prevQuestionBtn'),
    nextQuestionBtn: document.getElementById('nextQuestionBtn'),
    submitTestBtn: document.getElementById('submitTestBtn'),
    restartTestBtn: document.getElementById('restartTestBtn'),
    backToHomeBtn: document.getElementById('backToHomeBtn'),
    submitLoginBtn: document.getElementById('submitLoginBtn'),
    loginModal: document.getElementById('loginModal'),
    closeModal: document.getElementById('closeModal'),
    fullNameInput: document.getElementById('fullName'),
    classNameSelect: document.getElementById('className'),
    userAvatar: document.getElementById('userAvatar'),
    userNameDisplay: document.getElementById('userNameDisplay'),
    questionCounter: document.getElementById('questionCounter'),
    timer: document.getElementById('timer'),
    progressBar: document.getElementById('progressBar'),
    questionContainer: document.getElementById('questionContainer'),
    scoreValue: document.getElementById('scoreValue'),
    resultTitle: document.getElementById('resultTitle'),
    resultDescription: document.getElementById('resultDescription'),
    correctAnswers: document.getElementById('correctAnswers'),
    studentNameResult: document.getElementById('studentNameResult'),
    testDate: document.getElementById('testDate'),
    telegramStatus: document.getElementById('telegramStatus')
};

// Инициализация приложения
function init() {
    setupEventListeners();
    updateUI();
}

// Настройка обработчиков событий
function setupEventListeners() {
    elements.startTestBtn.addEventListener('click', () => {
        if (appState.user) {
            startTest();
        } else {
            showLoginModal();
        }
    });
    
    elements.loginBtn.addEventListener('click', () => {
        if (appState.user) {
            logout();
        } else {
            showLoginModal();
        }
    });
    
    elements.closeModal.addEventListener('click', hideLoginModal);
    elements.submitLoginBtn.addEventListener('click', handleLogin);
    
    elements.prevQuestionBtn.addEventListener('click', showPreviousQuestion);
    elements.nextQuestionBtn.addEventListener('click', showNextQuestion);
    elements.submitTestBtn.addEventListener('click', submitTest);
    
    elements.restartTestBtn.addEventListener('click', restartTest);
    elements.backToHomeBtn.addEventListener('click', goToHome);
    
    window.addEventListener('click', (event) => {
        if (event.target === elements.loginModal) {
            hideLoginModal();
        }
    });
    
    elements.fullNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLogin();
    });
}

// Обновление интерфейса
function updateUI() {
    if (appState.user) {
        elements.loginBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> Выйти';
        elements.userNameDisplay.textContent = appState.user.name;
        elements.studentNameResult.textContent = appState.user.name;
    } else {
        elements.loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Войти';
        elements.userNameDisplay.textContent = 'Ученик';
    }
}

// Обновление аватара
function updateAvatar() {
    if (appState.user) {
        const initials = appState.user.name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase();
        elements.userAvatar.textContent = initials;
    } else {
        elements.userAvatar.textContent = '?';
    }
}

// Показать модальное окно входа
function showLoginModal() {
    elements.loginModal.style.display = 'flex';
    elements.fullNameInput.focus();
}

// Скрыть модальное окно входа
function hideLoginModal() {
    elements.loginModal.style.display = 'none';
    elements.fullNameInput.value = '';
    elements.classNameSelect.value = '';
}

// Обработка входа
function handleLogin() {
    const fullName = elements.fullNameInput.value.trim();
    const className = elements.classNameSelect.value;
    
    if (!fullName) {
        alert('Пожалуйста, введите ваше имя и фамилию');
        elements.fullNameInput.focus();
        return;
    }
    
    if (!className) {
        alert('Пожалуйста, выберите ваш класс');
        elements.classNameSelect.focus();
        return;
    }
    
    appState.user = {
        name: fullName,
        class: className,
        id: Date.now().toString()
    };
    
    updateUI();
    updateAvatar();
    hideLoginModal();
    startTest();
}

// Выход из системы
function logout() {
    if (confirm('Вы уверены, что хотите выйти?')) {
        appState.user = null;
        updateUI();
        updateAvatar();
        goToHome();
    }
}

// Начать тест
function startTest() {
    appState.testQuestions = getRandomQuestions(CONFIG.QUESTIONS_PER_TEST);
    appState.currentQuestion = 0;
    appState.userAnswers = new Array(CONFIG.QUESTIONS_PER_TEST).fill(null);
    appState.timeLeft = CONFIG.TIME_LIMIT;
    
    startTimer();
    
    elements.welcomeSection.style.display = 'none';
    elements.resultsSection.style.display = 'none';
    elements.testSection.style.display = 'block';
    
    displayCurrentQuestion();
}

// Получить случайные вопросы
function getRandomQuestions(count) {
    const shuffled = [...QUESTIONS_DATABASE];
    
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    const selected = shuffled.slice(0, count);
    
    selected.forEach(question => {
        const originalCorrect = question.options[question.correct];
        const shuffledOptions = [...question.options];
        
        for (let i = shuffledOptions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
        }
        
        question.correct = shuffledOptions.indexOf(originalCorrect);
        question.options = shuffledOptions;
    });
    
    return selected;
}

// Запустить таймер
function startTimer() {
    appState.startTime = Date.now();
    
    if (appState.timerInterval) {
        clearInterval(appState.timerInterval);
    }
    
    appState.timerInterval = setInterval(updateTimer, 1000);
    updateTimer();
}

// Обновить таймер
function updateTimer() {
    appState.timeLeft--;
    
    if (appState.timeLeft <= 0) {
        clearInterval(appState.timerInterval);
        submitTest();
        return;
    }
    
    const minutes = Math.floor(appState.timeLeft / 60);
    const seconds = appState.timeLeft % 60;
    elements.timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Отобразить текущий вопрос
function displayCurrentQuestion() {
    const question = appState.testQuestions[appState.currentQuestion];
    
    elements.questionCounter.textContent = `Вопрос ${appState.currentQuestion + 1}/${CONFIG.QUESTIONS_PER_TEST}`;
    
    const progress = ((appState.currentQuestion + 1) / CONFIG.QUESTIONS_PER_TEST) * 100;
    elements.progressBar.style.width = `${progress}%`;
    
    const optionsHTML = question.options.map((option, index) => {
        const isSelected = appState.userAnswers[appState.currentQuestion] === index;
        const letter = String.fromCharCode(65 + index);
        
        return `
            <div class="option ${isSelected ? 'selected' : ''}" data-index="${index}">
                <div class="option-letter">${letter}</div>
                <div class="option-text">${option}</div>
            </div>
        `;
    }).join('');
    
    elements.questionContainer.innerHTML = `
        <div class="question-header">
            <div class="question-number">Вопрос ${appState.currentQuestion + 1}</div>
            <div class="question-text">${question.question}</div>
        </div>
        <div class="options-container">
            ${optionsHTML}
        </div>
    `;
    
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => {
            const selectedIndex = parseInt(option.dataset.index);
            appState.userAnswers[appState.currentQuestion] = selectedIndex;
            
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            option.classList.add('selected');
            updateNavigationButtons();
        });
    });
    
    updateNavigationButtons();
}

// Обновить кнопки навигации
function updateNavigationButtons() {
    elements.prevQuestionBtn.style.display = appState.currentQuestion > 0 ? 'flex' : 'none';
    
    const isLastQuestion = appState.currentQuestion === CONFIG.QUESTIONS_PER_TEST - 1;
    const isAnswered = appState.userAnswers[appState.currentQuestion] !== null;
    
    if (isLastQuestion) {
        elements.nextQuestionBtn.style.display = 'none';
        elements.submitTestBtn.style.display = isAnswered ? 'flex' : 'none';
    } else {
        elements.nextQuestionBtn.style.display = 'flex';
        elements.submitTestBtn.style.display = 'none';
        elements.nextQuestionBtn.disabled = !isAnswered;
    }
}

// Показать предыдущий вопрос
function showPreviousQuestion() {
    if (appState.currentQuestion > 0) {
        appState.currentQuestion--;
        displayCurrentQuestion();
    }
}

// Показать следующий вопрос
function showNextQuestion() {
    const isAnswered = appState.userAnswers[appState.currentQuestion] !== null;
    
    if (isAnswered && appState.currentQuestion < CONFIG.QUESTIONS_PER_TEST - 1) {
        appState.currentQuestion++;
        displayCurrentQuestion();
    }
}

// Завершить тест
function submitTest() {
    clearInterval(appState.timerInterval);
    const results = calculateResults();
    showResults(results);
    sendResultsToTelegram(results);
}

// Рассчитать результаты
function calculateResults() {
    let correctCount = 0;
    
    for (let i = 0; i < CONFIG.QUESTIONS_PER_TEST; i++) {
        if (appState.userAnswers[i] === appState.testQuestions[i].correct) {
            correctCount++;
        }
    }
    
    const percentage = Math.round((correctCount / CONFIG.QUESTIONS_PER_TEST) * 100);
    const timeSpent = CONFIG.TIME_LIMIT - appState.timeLeft;
    const now = new Date();
    
    return {
        correctCount,
        percentage,
        totalQuestions: CONFIG.QUESTIONS_PER_TEST,
        timeSpent,
        date: now.toLocaleDateString('ru-RU'),
        time: now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
    };
}

// Показать результаты
function showResults(results) {
    elements.testSection.style.display = 'none';
    elements.resultsSection.style.display = 'block';
    
    elements.scoreValue.textContent = `${results.percentage}%`;
    elements.correctAnswers.textContent = results.correctCount;
    elements.testDate.textContent = `${results.date} ${results.time}`;
    
    setTimeout(() => {
        const scoreCircle = document.querySelector('.score-circle');
        scoreCircle.style.background = `conic-gradient(var(--primary) 0% ${results.percentage}%, var(--light-gray) ${results.percentage}% 100%)`;
    }, 100);
    
    let title, description;
    if (results.percentage >= 90) {
        title = 'Отлично! 🏆';
        description = 'Превосходный результат!';
    } else if (results.percentage >= 70) {
        title = 'Хорошо! 👍';
        description = 'Хорошие знания по физкультуре!';
    } else if (results.percentage >= 50) {
        title = 'Удовлетворительно 😊';
        description = 'Есть что повторить';
    } else {
        title = 'Попробуйте еще раз 💪';
        description = 'Рекомендуем изучить материал';
    }
    
    elements.resultTitle.textContent = title;
    elements.resultDescription.textContent = description;
}

// Отправить результаты в Telegram
async function sendResultsToTelegram(results) {
    if (!appState.user) return;
    
    elements.telegramStatus.textContent = 'Отправка...';
    elements.telegramStatus.style.color = '#FF9800';
    
    try {
        const message = `
📊 *РЕЗУЛЬТАТ ТЕСТИРОВАНИЯ*

👤 *Ученик:* ${appState.user.name}
🏫 *Класс:* ${appState.user.class}
📅 *Дата:* ${results.date}
⏰ *Время:* ${results.time}

📈 *Результат:* ${results.percentage}%
✅ *Правильно:* ${results.correctCount}/${results.totalQuestions}
⏱️ *Время:* ${Math.floor(results.timeSpent / 60)}:${(results.timeSpent % 60).toString().padStart(2, '0')}

🎯 *Оценка:* ${getGradeText(results.percentage)}
📋 *Уровень:* ${getLevelText(results.percentage)}
        `;
        
        const url = `https://api.telegram.org/bot${CONFIG.TELEGRAM_BOT_TOKEN}/sendMessage`;
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CONFIG.TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'Markdown'
            })
        });
        
        const data = await response.json();
        
        if (data.ok) {
            elements.telegramStatus.textContent = '✓ Отправлено учителю';
            elements.telegramStatus.style.color = '#4CAF50';
        } else {
            throw new Error(data.description || 'Ошибка отправки');
        }
        
        saveTestHistory(results);
        
    } catch (error) {
        console.error('Ошибка отправки:', error);
        elements.telegramStatus.textContent = '✗ Ошибка отправки';
        elements.telegramStatus.style.color = '#f44336';
        
        const retryBtn = document.createElement('button');
        retryBtn.textContent = 'Повторить отправку';
        retryBtn.className = 'btn secondary-btn';
        retryBtn.style.marginTop = '10px';
        retryBtn.onclick = () => sendResultsToTelegram(results);
        
        elements.telegramStatus.parentElement.appendChild(retryBtn);
    }
}

// Получить текстовую оценку
function getGradeText(percentage) {
    if (percentage >= 90) return '5 (Отлично)';
    if (percentage >= 70) return '4 (Хорошо)';
    if (percentage >= 50) return '3 (Удовлетворительно)';
    return '2 (Неудовлетворительно)';
}

// Получить уровень знаний
function getLevelText(percentage) {
    if (percentage >= 90) return 'Высокий';
    if (percentage >= 70) return 'Средний';
    if (percentage >= 50) return 'Ниже среднего';
    return 'Низкий';
}

// Сохранить историю тестов
function saveTestHistory(results) {
    const history = JSON.parse(localStorage.getItem('fizraTestHistory') || '[]');
    
    history.push({
        userId: appState.user.id,
        userName: appState.user.name,
        userClass: appState.user.class,
        date: new Date().toISOString(),
        results: results
    });
    
    if (history.length > 100) {
        history.shift();
    }
    
    localStorage.setItem('fizraTestHistory', JSON.stringify(history));
}

// Начать тест заново
function restartTest() {
    startTest();
}

// Вернуться на главную
function goToHome() {
    elements.welcomeSection.style.display = 'block';
    elements.testSection.style.display = 'none';
    elements.resultsSection.style.display = 'none';
    
    if (appState.timerInterval) {
        clearInterval(appState.timerInterval);
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', init);
