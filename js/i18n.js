/**
 * I18N — language switching (English / Kazakh / Russian)
 * -------------------------------------------------------
 * How it works:
 *  - UI chrome (nav, buttons, headings, form labels, etc.) is translated
 *    by tagging elements in the HTML with data-i18n="key" (text content),
 *    data-i18n-html="key" (innerHTML, for strings with line breaks),
 *    data-i18n-aria="key" (aria-label), or data-i18n-content="key"
 *    (for <meta content="...">).
 *  - Project content (titles, blurbs, credits, category labels) comes
 *    from js/data.js in English. Kazakh/Russian overrides for the sample
 *    projects live in PROJECT_I18N below, keyed by slug. Add an entry
 *    there for any new project you want translated — anything without
 *    an override just falls back to the English text from data.js.
 *  - The chosen language is remembered in localStorage and reapplied on
 *    every page. Switching fires a "langchange" event on window so
 *    page-specific scripts (the grid renderers, project.js) can
 *    re-render their dynamic content in the new language.
 *
 * NOTE ON TRANSLATION QUALITY: the Kazakh and Russian strings below are
 * a solid first pass, written for a natural professional tone — but if
 * you're a native speaker, it's worth a quick read-through before this
 * goes live. Nothing here is machine-translated gibberish, but idiom
 * and register are always worth a human check.
 */

const DEFAULT_LANG = "en";
const SUPPORTED_LANGS = ["en", "kk", "ru"];

const UI = {
  en: {
    skip_link: "Skip to content",
    nav_toggle_aria: "Toggle menu",
    nav_home: "Home",
    nav_work: "Work",
    nav_about: "About",
    nav_contact: "Contact",
    lang_switch_aria: "Language",

    brand_name: "Darhan Sartai",
    footer_tagline: "Built to move.",
    footer_email: "Email",
    footer_linkedin: "LinkedIn",
    footer_vimeo: "Vimeo",
    cinema_close_aria: "Close cinema mode",

    // Home
    hero_headline_html: "Motion<br />that moves<br />people.",
    hero_lede:
      "I'm Darhan — a motion designer and animator working across 2D, 3D, brand identity, and VFX for agencies, studios, and brands who need their story to move.",
    hero_sound_off: "▸ SOUND OFF",
    hero_sound_on: "▸ SOUND ON",
    scroll_cue: "SCROLL",
    home_eyebrow_selected: "Selected work / 2023–2025",
    home_recent_reels: "Recent reels",
    home_view_all: "View all work",
    cap1_title: "2D & 3D animation",
    cap1_body:
      "Character and abstract animation, illustration systems, and CGI built in After Effects, Cinema 4D, and Blender.",
    cap2_title: "Brand & UI motion",
    cap2_body:
      "Identity systems, launch films, and product micro-interactions designed to hand off cleanly to engineering.",
    cap3_title: "VFX & titles",
    cap3_body:
      "Compositing, simulation, and title sequence design for film, series, and commercial work.",
    cta_eyebrow: "Available for freelance & full-time",
    cta_title: "Got a project in motion?",
    cta_button: "Start a conversation",

    // Work
    work_eyebrow: "Archive",
    work_title: "All work",
    work_aria_filter: "Filter by category",
    work_filter_all: "All work",
    work_empty_html:
      'No projects match this filter yet — check back soon, or <a href="contact.html" style="text-decoration:underline;">get in touch</a> about a brief like this.',

    // Project detail
    proj_back: "← Back to work",
    proj_client: "Client",
    proj_year: "Year",
    proj_role: "Role",
    proj_category: "Category",
    proj_process: "Process",
    proj_breakdown_eyebrow: "Before / after — breakdown",
    proj_credits: "Credits",
    proj_tools: "Tools",
    proj_next: "Next project",
    proj_cinema: "Cinema mode",
    proj_reel_aria: "Project reel",
    proj_seek_aria: "Seek",
    player_play_aria: "Play",
    player_pause_aria: "Pause",
    player_mute_aria: "Mute",
    player_unmute_aria: "Unmute",

    // About
    about_eyebrow: "About",
    about_headline_html: "Hi, I'm Darhan.<br />I make things move for a living.",
    about_p1:
      "I'm a motion designer and animator based in Astana, working across 2D animation, CGI, brand identity, UI motion, and VFX. Over the past eight years I've split my time between agency work and in-house teams, which means I'm equally comfortable pitching a concept from a blank page and slotting into an existing design system on day one.",
    about_p2:
      "I trained originally as an editorial illustrator, which still shows up in how I think about pacing and composition — every project starts as a storyboard before it becomes a timeline. I care most about work that respects the viewer's attention: nothing moves without a reason.",
    about_resume: "Download résumé (PDF)",
    about_software: "Software",
    about_career: "Career",
    timeline_role_1: "Senior Motion Designer",
    timeline_org_1: "Freelance / Independent",
    timeline_role_2: "Motion Designer",
    timeline_org_2: "Northline Pictures",
    timeline_role_3: "Junior Animator",
    timeline_org_3: "Firebrand Studios",
    timeline_role_4: "Editorial Illustrator",
    timeline_org_4: "Freelance",

    // Contact
    contact_eyebrow: "Get in touch",
    contact_title: "Let's make something move.",
    contact_name: "Name",
    contact_name_error: "Please enter your name.",
    contact_email: "Email",
    contact_email_error: "Please enter a valid email address.",
    contact_message: "Message",
    contact_message_error: "Tell me a little about the project.",
    contact_send: "Send message",
    contact_elsewhere: "Elsewhere",
    contact_resume_link: "Résumé (PDF)",
    contact_location_note:
      "Based in Astana, Kazakhstan — working with clients everywhere. Typical reply time is 1–2 business days.",
    contact_status_fix: "Please fix the highlighted fields.",
    contact_status_sending: "Sending…",
    contact_status_success: "Thanks — message sent. I'll reply within a couple of days.",
    contact_status_error:
      "Something went wrong sending that — try the mailto link below instead.",
    contact_status_mailto: "Opening your email client to finish sending…",
  },

  ru: {},

  kk: {},
};

// Russian UI strings
UI.ru.skip_link = "Перейти к содержимому";
UI.ru.nav_toggle_aria = "Открыть меню";
UI.ru.nav_home = "Главная";
UI.ru.nav_work = "Работы";
UI.ru.nav_about = "Обо мне";
UI.ru.nav_contact = "Контакты";
UI.ru.lang_switch_aria = "Язык";
UI.ru.brand_name = "Дархан Сартай";
UI.ru.footer_tagline = "Создано, чтобы двигаться.";
UI.ru.footer_email = "Email";
UI.ru.footer_linkedin = "LinkedIn";
UI.ru.footer_vimeo = "Vimeo";
UI.ru.cinema_close_aria = "Закрыть кинорежим";
UI.ru.hero_headline_html = "Движение,<br />которое<br />трогает людей.";
UI.ru.hero_lede =
  "Я Дархан — моушн-дизайнер и аниматор, работаю с 2D, 3D, айдентикой брендов и визуальными эффектами для агентств, студий и брендов, которым нужно, чтобы их история задвигалась.";
UI.ru.hero_sound_off = "▸ ЗВУК ВЫКЛ";
UI.ru.hero_sound_on = "▸ ЗВУК ВКЛ";
UI.ru.scroll_cue = "СКРОЛЛ";
UI.ru.home_eyebrow_selected = "Избранные работы / 2023–2025";
UI.ru.home_recent_reels = "Последние ролики";
UI.ru.home_view_all = "Смотреть все работы";
UI.ru.cap1_title = "2D- и 3D-анимация";
UI.ru.cap1_body =
  "Персонажная и абстрактная анимация, системы иллюстраций и CGI в After Effects, Cinema 4D и Blender.";
UI.ru.cap2_title = "Айдентика и UI-анимация";
UI.ru.cap2_body =
  "Системы айдентики, ролики к запускам и микровзаимодействия продукта, готовые к передаче разработчикам.";
UI.ru.cap3_title = "VFX и титры";
UI.ru.cap3_body = "Композитинг, симуляции и дизайн титров для кино, сериалов и рекламы.";
UI.ru.cta_eyebrow = "Открыт для фриланса и полной занятости";
UI.ru.cta_title = "Есть проект в движении?";
UI.ru.cta_button = "Начать разговор";

UI.ru.work_eyebrow = "Архив";
UI.ru.work_title = "Все работы";
UI.ru.work_aria_filter = "Фильтр по категории";
UI.ru.work_filter_all = "Все работы";
UI.ru.work_empty_html =
  'Под этот фильтр пока ничего не подходит — загляните позже, или <a href="contact.html" style="text-decoration:underline;">напишите мне</a> о похожем проекте.';

UI.ru.proj_back = "← Назад к работам";
UI.ru.proj_client = "Клиент";
UI.ru.proj_year = "Год";
UI.ru.proj_role = "Роль";
UI.ru.proj_category = "Категория";
UI.ru.proj_process = "Процесс";
UI.ru.proj_breakdown_eyebrow = "До / после — разбор";
UI.ru.proj_credits = "Команда";
UI.ru.proj_tools = "Инструменты";
UI.ru.proj_next = "Следующий проект";
UI.ru.proj_cinema = "Кинорежим";
UI.ru.proj_reel_aria = "Ролик проекта";
UI.ru.proj_seek_aria = "Перемотка";
UI.ru.player_play_aria = "Воспроизвести";
UI.ru.player_pause_aria = "Пауза";
UI.ru.player_mute_aria = "Выключить звук";
UI.ru.player_unmute_aria = "Включить звук";

UI.ru.about_eyebrow = "Обо мне";
UI.ru.about_headline_html = "Привет, я Дархан.<br />Заставляю вещи двигаться — это моя работа.";
UI.ru.about_p1 =
  "Я моушн-дизайнер и аниматор из Астаны, работаю с 2D-анимацией, CGI, айдентикой брендов, UI-анимацией и визуальными эффектами. За последние восемь лет я работал как в агентствах, так и в штате компаний, поэтому одинаково уверенно чувствую себя и при разработке концепции с нуля, и при встраивании в уже существующую дизайн-систему.";
UI.ru.about_p2 =
  "Изначально я учился на редакционного иллюстратора, и это до сих пор влияет на то, как я мыслю темпом и композицией — каждый проект начинается со сториборда, прежде чем стать таймлайном. Больше всего для меня важна работа, которая уважает внимание зрителя: ничто не движется без причины.";
UI.ru.about_resume = "Скачать резюме (PDF)";
UI.ru.about_software = "Инструменты";
UI.ru.about_career = "Карьера";
UI.ru.timeline_role_1 = "Старший моушн-дизайнер";
UI.ru.timeline_org_1 = "Фриланс / независимо";
UI.ru.timeline_role_2 = "Моушн-дизайнер";
UI.ru.timeline_org_2 = "Northline Pictures";
UI.ru.timeline_role_3 = "Младший аниматор";
UI.ru.timeline_org_3 = "Firebrand Studios";
UI.ru.timeline_role_4 = "Редакционный иллюстратор";
UI.ru.timeline_org_4 = "Фриланс";

UI.ru.contact_eyebrow = "Связаться";
UI.ru.contact_title = "Давайте создадим что-то живое.";
UI.ru.contact_name = "Имя";
UI.ru.contact_name_error = "Пожалуйста, укажите имя.";
UI.ru.contact_email = "Email";
UI.ru.contact_email_error = "Пожалуйста, укажите корректный email.";
UI.ru.contact_message = "Сообщение";
UI.ru.contact_message_error = "Расскажите немного о проекте.";
UI.ru.contact_send = "Отправить";
UI.ru.contact_elsewhere = "Другие каналы";
UI.ru.contact_resume_link = "Резюме (PDF)";
UI.ru.contact_location_note =
  "Нахожусь в Казахстане, в городе Астана — работаю с клиентами по всему миру. Обычно отвечаю в течение 1–2 рабочих дней.";
UI.ru.contact_status_fix = "Пожалуйста, исправьте выделенные поля.";
UI.ru.contact_status_sending = "Отправка…";
UI.ru.contact_status_success = "Спасибо — сообщение отправлено. Отвечу в течение пары дней.";
UI.ru.contact_status_error =
  "Что-то пошло не так при отправке — попробуйте ссылку mailto ниже.";
UI.ru.contact_status_mailto = "Открываю почтовый клиент для отправки…";

UI.kk = {
  skip_link: "Мазмұнға өту",
  nav_toggle_aria: "Мәзірді ашу",
  nav_home: "Басты бет",
  nav_work: "Жұмыстар",
  nav_about: "Мен туралы",
  nav_contact: "Байланыс",
  lang_switch_aria: "Тіл",

  brand_name: "Дархан Сартай",
  footer_tagline: "Қозғалу үшін жасалған.",
  footer_email: "Email",
  footer_linkedin: "LinkedIn",
  footer_vimeo: "Vimeo",
  cinema_close_aria: "Кино режимін жабу",

  hero_headline_html: "Адамдарды<br />қозғалысқа<br />келтіретін моушн.",
  hero_lede:
    "Мен Дарханмын — 2D, 3D, бренд айдентикасы және VFX бағыттарында жұмыс істейтін моушн-дизайнер әрі аниматормын, оқиғасын қозғалысқа келтіргісі келетін агенттіктер, студиялар және брендтерге көмектесемін.",
  hero_sound_off: "▸ ДЫБЫС ӨШІРУЛІ",
  hero_sound_on: "▸ ДЫБЫС ҚОСУЛЫ",
  scroll_cue: "ТӨМЕН СЫРҒЫТУ",
  home_eyebrow_selected: "Таңдаулы жұмыстар / 2023–2025",
  home_recent_reels: "Соңғы роликтер",
  home_view_all: "Барлық жұмыстарды көру",
  cap1_title: "2D және 3D анимация",
  cap1_body:
    "After Effects, Cinema 4D және Blender-де жасалған кейіпкерлік және абстрактілі анимация, иллюстрация жүйелері мен CGI.",
  cap2_title: "Бренд және UI қозғалысы",
  cap2_body:
    "Инженерлерге тікелей тапсыруға дайын айдентика жүйелері, іске қосу роликтері және өнім микроинтеракциялары.",
  cap3_title: "VFX және титрлар",
  cap3_body: "Кино, сериал және жарнамалық жұмыстарға арналған композитинг, симуляция және титр дизайны.",
  cta_eyebrow: "Фриланс және толық жұмыс уақытына қолжетімдімін",
  cta_title: "Қозғалыстағы жобаңыз бар ма?",
  cta_button: "Әңгімені бастау",

  work_eyebrow: "Архив",
  work_title: "Барлық жұмыстар",
  work_aria_filter: "Санат бойынша сүзу",
  work_filter_all: "Барлық жұмыстар",
  work_empty_html:
    'Бұл сүзгіге сәйкес жоба әзірге жоқ — жақында қайта қараңыз немесе осындай жоба туралы <a href="contact.html" style="text-decoration:underline;">хабарласыңыз</a>.',

  proj_back: "← Жұмыстарға оралу",
  proj_client: "Клиент",
  proj_year: "Жыл",
  proj_role: "Рөл",
  proj_category: "Санат",
  proj_process: "Процесс",
  proj_breakdown_eyebrow: "Дейін / кейін — талдау",
  proj_credits: "Топ",
  proj_tools: "Құралдар",
  proj_next: "Келесі жоба",
  proj_cinema: "Кино режимі",
  proj_reel_aria: "Жоба роликі",
  proj_seek_aria: "Айналдыру",
  player_play_aria: "Ойнату",
  player_pause_aria: "Кідірту",
  player_mute_aria: "Дыбысты өшіру",
  player_unmute_aria: "Дыбысты қосу",

  about_eyebrow: "Мен туралы",
  about_headline_html: "Сәлем, мен Дарханмын.<br />Заттарды қозғалысқа келтіру — менің кәсібім.",
  about_p1:
    "Мен Астанада тұратын моушн-дизайнер және аниматормын, 2D анимация, CGI, брендтердің айдентикасы, UI қозғалысы және VFX бағыттарында жұмыс істеймін. Соңғы сегіз жылда агенттіктерде де, компания құрамында да жұмыс істедім, сондықтан концепцияны бастан жасауда да, дайын дизайн-жүйеге қосылуда да бірдей еркінмін.",
  about_p2:
    "Бастапқыда редакциялық иллюстратор болып оқыдым, бұл әлі күнге дейін менің қарқын мен композицияны қалай ойлайтыныма әсер етеді — әрбір жоба таймлайнға айналмас бұрын раскадровкадан басталады. Мен үшін ең маңыздысы — көрермен назарын құрметтейтін жұмыс: ешнәрсе себепсіз қозғалмайды.",
  about_resume: "Резюмені жүктеу (PDF)",
  about_software: "Құралдар",
  about_career: "Мансап",
  timeline_role_1: "Аға моушн-дизайнер",
  timeline_org_1: "Фриланс / тәуелсіз",
  timeline_role_2: "Моушн-дизайнер",
  timeline_org_2: "Northline Pictures",
  timeline_role_3: "Кіші аниматор",
  timeline_org_3: "Firebrand Studios",
  timeline_role_4: "Редакциялық иллюстратор",
  timeline_org_4: "Фриланс",

  contact_eyebrow: "Байланысу",
  contact_title: "Бірге бір нәрсені қозғалысқа келтірейік.",
  contact_name: "Аты-жөні",
  contact_name_error: "Атыңызды енгізіңіз.",
  contact_email: "Email",
  contact_email_error: "Жарамды email мекенжайын енгізіңіз.",
  contact_message: "Хабарлама",
  contact_message_error: "Жоба туралы қысқаша айтып беріңіз.",
  contact_send: "Хабарлама жіберу",
  contact_elsewhere: "Басқа арналар",
  contact_resume_link: "Резюме (PDF)",
  contact_location_note:
    "Қазақстанда, Астана қаласында тұрамын — әлемнің кез келген жеріндегі клиенттермен жұмыс істеймін. Әдетте 1–2 жұмыс күні ішінде жауап беремін.",
  contact_status_fix: "Белгіленген өрістерді түзетіңіз.",
  contact_status_sending: "Жіберілуде…",
  contact_status_success: "Рахмет — хабарлама жіберілді. Бір-екі күн ішінде жауап беремін.",
  contact_status_error:
    "Жіберу кезінде қателік шықты — төмендегі mailto сілтемесін пайдаланып көріңіз.",
  contact_status_mailto: "Жіберуді аяқтау үшін пошта клиентін ашып жатырмын…",
};

// Category labels (id must match CATEGORIES ids in js/data.js)
const CATEGORY_I18N = {
  "2d": { ru: "2D-анимация", kk: "2D анимация" },
  "3d": { ru: "3D / CGI", kk: "3D / CGI" },
  brand: { ru: "Айдентика бренда", kk: "Бренд айдентикасы" },
  ui: { ru: "UI-анимация", kk: "UI қозғалысы" },
  vfx: { ru: "VFX", kk: "VFX" },
  titles: { ru: "Титры", kk: "Титрлер" },
};

// Per-project translation overrides, keyed by slug (see js/data.js).
// Anything omitted falls back to the English text automatically.
// `credits` is an array of translated ROLE strings only, in the same
// order as the project's `credits` array in data.js — names (people,
// studios) stay as written since they're proper nouns.
const PROJECT_I18N = {
  "aperture-rebrand": {
    ru: {
      role: "Ведущий моушн-дизайнер",
      blurb: "Кинетическая система айдентики для запуска продукта бренда наушников.",
      description:
        "Aperture нужна была моушн-айдентика, которая одинаково хорошо работала бы и в 6-секундном бампере, и в 90-секундном ролике запуска, не теряя формы. Я создал модульную систему языка форм и типографики, реагирующей на звук, а затем оформил её в виде живого гайдлайна, чтобы внутренняя команда могла анимировать будущие релизы самостоятельно.",
      credits: ["Моушн-дизайн", "Саунд-дизайн", "Креативное руководство"],
    },
    kk: {
      role: "Жетекші моушн-дизайнер",
      blurb: "Құлаққап брендінің өнім шығарылымына арналған кинетикалық айдентика жүйесі.",
      description:
        "Aperture-ге 6 секундтық бампер мен 90 секундтық іске қосу фильмінде де пішінін жоғалтпайтын моушн-айдентика қажет болды. Мен пішін тілі мен дыбысқа үн қататын типографияның модульдік жүйесін жасап, оны тірі стиль нұсқаулығы ретінде рәсімдедім, осылайша олардың ішкі командасы келесі шығарылымдарды өз бетінше анимациялай алады.",
      credits: ["Моушн-дизайн", "Дыбыс дизайны", "Креативті басшылық"],
    },
  },
  "wayfinder-titles": {
    ru: {
      role: "Дизайнер титров",
      blurb: "Заглавные титры для мини-сериала о дальних парусных путешествиях.",
      description:
        "По брифу нужно было ощущение рукописной карты, а не цифровой графики. Я вручную отрисовал библиотеку береговых линий в Illustrator, а затем настроил риг в After Effects, чтобы камера могла двигаться по бесконечно разворачивающейся карте, а титры проступали прямо из линий.",
      credits: ["Дизайн и анимация", "Исполнительный продюсер"],
    },
    kk: {
      role: "Титр дизайнері",
      blurb: "Ұзақ қашықтыққа жүзу туралы шектеулі сериалдың бастапқы титрлары.",
      description:
        "Брифте цифрлық емес, қолмен сызылған карта сезімі керек болды. Мен Illustrator-да жағалау сызықтарының кітапханасын қолмен сызып, After Effects-те риг жасадым, осылайша камера үздіксіз ашылатын картамен жылжып, титрлар сызықтардың өзінен пайда болады.",
      credits: ["Дизайн және анимация", "Атқарушы продюсер"],
    },
  },
  "cascade-app": {
    ru: {
      role: "Моушн- и интеракшн-дизайнер",
      blurb: "Система микровзаимодействий для онбординга банковского приложения.",
      description:
        "Работая напрямую с Figma-файлом продуктовой команды, я разработал грамматику переходов для онбординга, показа баланса и подтверждения переводов, а затем экспортировал весь набор в формате Lottie, чтобы разработчики могли внедрить их в сборку без повторной анимации.",
      credits: ["Моушн-дизайн", "Продуктовый дизайн"],
    },
    kk: {
      role: "Моушн және интеракшн дизайнері",
      blurb: "Банктік қосымшаның таныстыру процесіне арналған микроинтеракциялар жүйесі.",
      description:
        "Өнім командасының Figma файлымен тікелей жұмыс істей отырып, мен таныстыру, баланс көрсету және аударымды растау үшін ауысу грамматикасын әзірледім, содан кейін бүкіл жинақты Lottie форматында экспорттадым, осылайша инженерлер оны қайта анимациясыз құрастыруға тікелей қоса алады.",
      credits: ["Моушн-дизайн", "Өнім дизайны"],
    },
  },
  "hollow-vfx": {
    ru: {
      role: "VFX-художник",
      blurb: "Переход от практических эффектов к цифровому существу в короткометражном хорроре.",
      description:
        "Один непрерывный кадр, в котором практический протез руки превращается в полностью CG-существо. Я отвечал за симуляцию разрыва поверхности и композитинг, объединяющий практическую съёмку с CG-переходом.",
      credits: ["VFX и композитинг", "Режиссёр", "Практические эффекты"],
    },
    kk: {
      role: "VFX суретшісі",
      blurb: "Хоррор қысқа метражды фильміне арналған практикалық әсерден цифрлық жәндікке айналу.",
      description:
        "Практикалық протез қол толықтай CG жәндікке айналатын бір үздіксіз кадр. Мен беттің жыртылу симуляциясы мен практикалық түсірілімді CG-мен біріктіретін композитинг үшін жауап бердім.",
      credits: ["VFX және композитинг", "Режиссёр", "Практикалық эффекттер"],
    },
  },
  "understory-explainer": {
    ru: {
      role: "Аниматор и иллюстратор",
      blurb: "Объясняющий ролик, переводящий науку об углероде в почве на понятный визуальный язык.",
      description:
        "Исследования Understory довольно сложны; ролик должен был провести неподготовленного зрителя через них меньше чем за две минуты, не упрощая суть. Я выбрал стиль бумажной аппликации с настоящей глубиной резкости в движении камеры, чтобы наука оставалась понятной, а визуал — тёплым.",
      credits: ["Иллюстрация и анимация", "Сценарий"],
    },
    kk: {
      role: "Аниматор және иллюстратор",
      blurb: "Топырақтағы көміртегі туралы ғылымды қарапайым қозғалысқа айналдырған түсіндірме роликі.",
      description:
        "Understory зерттеулері күрделі; ролик дайын емес көрерменді екі минуттан аз уақытта, мазмұнын жеңілдетпей түсіндіруі керек болды. Мен қағаз аппликациясы стилін таңдадым, камера қозғалысында нақты тереңдік әсерімен, осылайша ғылым түсінікті, ал бейне жылы болып қалады.",
      credits: ["Иллюстрация және анимация", "Сценарий"],
    },
  },
  "monoline-brand": {
    ru: {
      blurb:
        "Анимированная айдентика для крафтовой обжарочной кофе, созданная в первую очередь для соцсетей.",
      description:
        "Лёгкий моушн-набор для Instagram и упаковки небольшой обжарочной — зацикленный знак, три паттерна переходов и правило анимации типографики, чтобы небольшая команда могла стабильно публиковать контент без дизайнера в штате.",
      credits: ["Моушн-дизайн"],
    },
    kk: {
      blurb:
        "Мамандандырылған кофе қуыратын брендке арналған, ең алдымен әлеуметтік желілерге бағытталған анимацияланған айдентика.",
      description:
        "Шағын кофе қуыратын брендтің Instagram-ы мен қаптамасына арналған жеңіл моушн-жинақ — қайталанатын белгі, үш өту үлгісі және типография анимациясы ережесі, осылайша олардың шағын командасы дизайнерсіз де тұрақты жариялай алады.",
      credits: ["Моушн-дизайн"],
    },
  },
};

/* ---------------------------------------------------------------- */

function getLang() {
  const stored = localStorage.getItem("site-lang");
  if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
  const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
  return SUPPORTED_LANGS.includes(browser) ? browser : DEFAULT_LANG;
}

function setLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  localStorage.setItem("site-lang", lang);
  applyStaticI18n(lang);
  window.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}

// t(key) — look up a UI string, falling back to English, then the key itself.
function t(key, lang) {
  lang = lang || getLang();
  return (UI[lang] && UI[lang][key]) || UI.en[key] || key;
}

function categoryLabel(id, lang) {
  lang = lang || getLang();
  const label = CATEGORIES.find((c) => c.id === id);
  const fallback = label ? label.label : id;
  return (CATEGORY_I18N[id] && CATEGORY_I18N[id][lang]) || fallback;
}

// Returns { role, blurb, description, credits } with per-language
// overrides applied where they exist, falling back to English.
function projectI18n(project, lang) {
  lang = lang || getLang();
  const override = (PROJECT_I18N[project.slug] && PROJECT_I18N[project.slug][lang]) || {};
  const credits = project.credits.map((c, i) => ({
    name: c.name,
    role: (override.credits && override.credits[i]) || c.role,
  }));
  return {
    role: override.role || project.role,
    blurb: override.blurb || project.blurb,
    description: override.description || project.description,
    credits,
  };
}

function formatWorkCount(n, lang) {
  lang = lang || getLang();
  if (lang === "ru") {
    const mod10 = n % 10;
    const mod100 = n % 100;
    if (mod10 === 1 && mod100 !== 11) return `${n} проект`;
    if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100)) return `${n} проекта`;
    return `${n} проектов`;
  }
  if (lang === "kk") return `${n} жоба`;
  return `${n} project${n === 1 ? "" : "s"}`;
}

// Applies every data-i18n / data-i18n-html / data-i18n-aria / data-i18n-content
// element on the current page, and updates <html lang>.
function applyStaticI18n(lang) {
  lang = lang || getLang();
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"), lang);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.getAttribute("data-i18n-html"), lang);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"), lang));
  });
  document.querySelectorAll("[data-i18n-content]").forEach((el) => {
    el.setAttribute("content", t(el.getAttribute("data-i18n-content"), lang));
  });

  document.querySelectorAll(".lang-switch [data-lang]").forEach((btn) => {
    btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    btn.setAttribute("aria-current", btn.getAttribute("data-lang") === lang ? "true" : "false");
  });
}

function initLangSwitch() {
  document.querySelectorAll(".lang-switch [data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyStaticI18n(getLang());
  initLangSwitch();
});
