(function () {
  'use strict';

  const translations = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.background': 'Background',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'hero.open': 'Open to work',
      'hero.updated': 'Updated Jul 2026',
      'hero.greeting': "Hello, I'm",
      'hero.description':
        'I am a Backend Developer currently studying at Yandex Practicum. I enjoy building backend applications with Python and Django, continuously improving my programming skills, and working on practical projects.',
      'hero.ctaProjects': 'View Projects',
      'hero.ctaCv': 'Download CV',
      'hero.ctaContact': 'Get in Touch',
      'hero.scroll': 'Scroll',
      'about.tag': 'About Me',
      'about.title': 'Building Backend Solutions',
      'about.p1':
        'I am a Backend Developer focused on building reliable applications with Python and Django. My day-to-day work centers on REST APIs, database design, and clean, maintainable architecture — the kind of foundation that lets products grow without becoming fragile.',
      'about.p2':
        'I am currently studying at Yandex Practicum on the Python Backend Developer track, and I treat learning as something that has to show up in code. Alongside coursework, I build personal and educational projects end to end: structuring apps, modeling data, wiring APIs, working with Git daily, and refining habits around testing, readability, and review.',
      'about.p3':
        'I care about practical problem-solving more than buzzwords — clear interfaces, thoughtful data flow, and code that other people can understand. I am especially interested in backend services and product domains where reliability and careful system design matter, and I am looking for a team where I can keep growing as a developer while shipping real features.',
      'looking.roleLabel': 'Role',
      'looking.role': 'Backend Developer',
      'looking.formatLabel': 'Format',
      'looking.format': 'Remote or hybrid · open to relocation',
      'looking.focusLabel': 'Focus',
      'looking.focus': 'Backend services, APIs, and product-oriented systems',
      'skills.tag': 'Skills',
      'skills.title': 'Technologies I Work With',
      'skills.backend': 'Backend',
      'skills.frontend': 'Frontend (Basic)',
      'skills.tools': 'Tools',
      'background.tag': 'Background',
      'background.title': 'Education & Practice',
      'education.badge': 'Currently Studying',
      'education.program': 'Python Backend Developer Program',
      'education.org': 'Yandex Practicum',
      'education.desc':
        'Backend development program covering Python, Django, REST APIs, databases, testing, and professional workflows — reinforced by hands-on coursework projects.',
      'education.m1': 'Python fundamentals & OOP',
      'education.m2': 'Django & Django ORM',
      'education.m3': 'REST APIs & serializers',
      'education.m4': 'Databases & query optimization',
      'education.m5': 'Testing (pytest) & Git workflows',
      'education.m6': 'Project structure & code review habits',
      'experience.role': 'Backend Developer',
      'experience.org': 'Personal & Educational Projects',
      'experience.desc':
        'Building personal and educational backend projects with Python and Django — REST APIs, databases, Git, and modern backend practices. Details below in Featured Work.',
      'projects.tag': 'Projects',
      'projects.title': 'Featured Work',
      'projects.active': 'Active Development',
      'projects.github': 'View on GitHub',
      'projects.trading.desc':
        'Educational crypto trading bot in Python — modular pipeline from market data to signals, risk rules, and paper execution.',
      'projects.trading.b1': 'Built modular architecture: config → data → strategy → risk → broker → logs',
      'projects.trading.b2': 'EMA crossover strategy with position sizing, stop-loss, and take-profit',
      'projects.trading.b3': 'Live OHLCV via ccxt (Binance); paper mode only — no real orders',
      'projects.crypto.desc':
        'Full-stack cryptocurrency portfolio tracker with Django REST Framework, market data, and portfolio analytics.',
      'projects.crypto.b1': 'Designed REST API for assets, transactions, and portfolio analytics',
      'projects.crypto.b2': 'Integrated market data flow and Docker-based local stack',
      'projects.crypto.b3': 'Structured Django apps for scalable backend growth',
      'projects.blog.desc':
        'First Django project — blog platform with profiles, drafts, categories, and a protected comment system.',
      'projects.blog.b1': 'Implemented CBV-based CRUD for posts and comments',
      'projects.blog.b2': 'Added drafts, categories, locations, and author pages with pagination',
      'projects.blog.b3': 'Optimized queries with select_related to avoid N+1 issues',
      'contact.tag': 'Contact',
      'contact.title': "Let's Connect",
      'contact.subtitle':
        'Open to backend developer opportunities and collaboration on interesting projects.',
      'contact.email': 'Email',
      'contact.formTitle': 'Send a message',
      'contact.name': 'Name',
      'contact.emailLabel': 'Email',
      'contact.message': 'Message',
      'contact.namePh': 'Your name',
      'contact.emailPh': 'you@example.com',
      'contact.messagePh': 'Tell me about the role or idea...',
      'contact.send': 'Send message',
      'contact.formNote': 'Or write directly to kuzzz.geo@gmail.com / Telegram.',
      'footer.copy': '© 2026 Georgiy. Built with HTML, CSS & JavaScript.',
      'footer.updated': 'Last updated: July 2026',
    },
    ru: {
      'nav.home': 'Главная',
      'nav.about': 'Обо мне',
      'nav.skills': 'Навыки',
      'nav.background': 'Путь',
      'nav.projects': 'Проекты',
      'nav.contact': 'Контакты',
      'hero.open': 'Открыт к офферам',
      'hero.updated': 'Обновлено июл 2026',
      'hero.greeting': 'Привет, я',
      'hero.description':
        'Я Backend Developer, сейчас учусь в Яндекс Практикуме. Люблю делать backend на Python и Django, прокачивать навыки и собирать практические проекты.',
      'hero.ctaProjects': 'Смотреть проекты',
      'hero.ctaCv': 'Скачать CV',
      'hero.ctaContact': 'Связаться',
      'hero.scroll': 'Далее',
      'about.tag': 'Обо мне',
      'about.title': 'Собираю backend-решения',
      'about.p1':
        'Я Backend Developer и собираю надёжные приложения на Python и Django. В повседневной работе — REST API, проектирование баз данных и понятная архитектура, на которой продукт может расти без хрупкости.',
      'about.p2':
        'Сейчас учусь в Яндекс Практикуме на треке Python Backend Developer и воспринимаю учёбу как то, что должно проявляться в коде. Параллельно с курсом делаю учебные и личные проекты целиком: структура приложений, модели данных, API, ежедневная работа с Git, привычки вокруг тестов, читаемости и ревью.',
      'about.p3':
        'Мне важнее практичное решение задач, чем громкие слова — понятные интерфейсы, продуманный поток данных и код, который можно читать другим. Интересуют backend-сервисы и продуктовые домены, где важны надёжность и аккуратный системный дизайн. Ищу команду, в которой смогу расти как разработчик и помогать выкатывать реальные фичи.',
      'looking.roleLabel': 'Роль',
      'looking.role': 'Backend Developer',
      'looking.formatLabel': 'Формат',
      'looking.format': 'Remote или hybrid · готов к релокации',
      'looking.focusLabel': 'Фокус',
      'looking.focus': 'Backend-сервисы, API и продуктовые системы',
      'skills.tag': 'Навыки',
      'skills.title': 'С чем работаю',
      'skills.backend': 'Backend',
      'skills.frontend': 'Frontend (базовый)',
      'skills.tools': 'Инструменты',
      'background.tag': 'Путь',
      'background.title': 'Учёба и практика',
      'education.badge': 'Сейчас учусь',
      'education.program': 'Python Backend Developer',
      'education.org': 'Яндекс Практикум',
      'education.desc':
        'Программа по backend-разработке: Python, Django, REST API, базы данных, тестирование и рабочие процессы — с закреплением на учебных проектах.',
      'education.m1': 'Основы Python и ООП',
      'education.m2': 'Django и Django ORM',
      'education.m3': 'REST API и сериализаторы',
      'education.m4': 'БД и оптимизация запросов',
      'education.m5': 'Тесты (pytest) и Git-процессы',
      'education.m6': 'Структура проектов и code review',
      'experience.role': 'Backend Developer',
      'experience.org': 'Личные и учебные проекты',
      'experience.desc':
        'Делаю личные и учебные backend-проекты на Python и Django — REST API, базы данных, Git и современные практики. Подробности — в блоке проектов ниже.',
      'projects.tag': 'Проекты',
      'projects.title': 'Избранные работы',
      'projects.active': 'В разработке',
      'projects.github': 'Смотреть на GitHub',
      'projects.trading.desc':
        'Учебный crypto trading bot на Python — модульный пайплайн от рыночных данных до сигналов, риск-правил и paper-исполнения.',
      'projects.trading.b1': 'Собрал модульную архитектуру: config → data → strategy → risk → broker → logs',
      'projects.trading.b2': 'EMA crossover со sizing, stop-loss и take-profit',
      'projects.trading.b3': 'Live OHLCV через ccxt (Binance); только paper mode — без реальных ордеров',
      'projects.crypto.desc':
        'Full-stack трекер криптопортфеля на Django REST Framework с рыночными данными и аналитикой.',
      'projects.crypto.b1': 'Спроектировал REST API для активов, транзакций и аналитики портфеля',
      'projects.crypto.b2': 'Подключил market data и Docker-стек для локального запуска',
      'projects.crypto.b3': 'Разложил Django apps под масштабируемый backend',
      'projects.blog.desc':
        'Первый Django-проект — блог-платформа с профилями, черновиками, категориями и защищёнными комментариями.',
      'projects.blog.b1': 'Сделал CRUD постов и комментариев на CBV',
      'projects.blog.b2': 'Добавил черновики, категории, локации и страницы авторов с пагинацией',
      'projects.blog.b3': 'Оптимизировал запросы через select_related, чтобы убрать N+1',
      'contact.tag': 'Контакты',
      'contact.title': 'Давайте свяжемся',
      'contact.subtitle':
        'Открыт к backend-офферам и сотрудничеству над интересными проектами.',
      'contact.email': 'Email',
      'contact.formTitle': 'Написать сообщение',
      'contact.name': 'Имя',
      'contact.emailLabel': 'Email',
      'contact.message': 'Сообщение',
      'contact.namePh': 'Ваше имя',
      'contact.emailPh': 'you@example.com',
      'contact.messagePh': 'Расскажите о роли или идее...',
      'contact.send': 'Отправить',
      'contact.formNote': 'Или пишите напрямую на kuzzz.geo@gmail.com / Telegram.',
      'footer.copy': '© 2026 Georgiy. Сделано на HTML, CSS и JavaScript.',
      'footer.updated': 'Обновлено: июль 2026',
    },
  };

  const typingPhrases = {
    en: [
      'Backend Developer',
      'Django & REST API Enthusiast',
      'Building Practical Projects',
    ],
    ru: [
      'Backend Developer',
      'Django и REST API',
      'Делаю практические проекты',
    ],
  };

  let lang = localStorage.getItem('portfolio-lang') || 'en';
  let theme = localStorage.getItem('portfolio-theme') || 'dark';
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80;
  let typingTimer = null;

  const typingElement = document.getElementById('typing-text');
  const langToggle = document.getElementById('lang-toggle');
  const themeToggle = document.getElementById('theme-toggle');
  const progressBar = document.getElementById('scroll-progress');

  function applyTranslations() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key] != null) {
        el.textContent = translations[lang][key];
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang][key] != null) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });
    if (langToggle) {
      langToggle.textContent = lang === 'en' ? 'RU' : 'EN';
      langToggle.setAttribute('aria-label', lang === 'en' ? 'Переключить на русский' : 'Switch to English');
    }
    document.title =
      lang === 'ru'
        ? 'George | Backend Developer'
        : 'George | Backend Developer';
  }

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }

  function restartTyping() {
    if (typingTimer) clearTimeout(typingTimer);
    phraseIndex = 0;
    charIndex = 0;
    isDeleting = false;
    if (typingElement) typingElement.textContent = '';
    typeEffect();
  }

  function typeEffect() {
    if (!typingElement) return;
    const phrases = typingPhrases[lang] || typingPhrases.en;
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40;
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 80;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 500;
    }

    typingTimer = setTimeout(typeEffect, typingSpeed);
  }

  if (langToggle) {
    langToggle.addEventListener('click', function () {
      lang = lang === 'en' ? 'ru' : 'en';
      localStorage.setItem('portfolio-lang', lang);
      applyTranslations();
      restartTyping();
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      theme = theme === 'dark' ? 'light' : 'dark';
      applyTheme();
    });
  }

  applyTheme();
  applyTranslations();
  restartTyping();

  /* Sticky Header + scroll progress */
  const header = document.getElementById('header');

  function handleScrollChrome() {
    if (header) {
      if (window.scrollY > 50) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }
    if (progressBar) {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      progressBar.style.width = pct + '%';
    }
  }

  window.addEventListener('scroll', handleScrollChrome, { passive: true });
  handleScrollChrome();

  /* Mobile Navigation */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav__link');

  function closeMobileMenu() {
    if (!navToggle || !navMenu) return;
    navToggle.classList.remove('active');
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function openMobileMenu() {
    navToggle.classList.add('active');
    navMenu.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      if (navMenu.classList.contains('open')) closeMobileMenu();
      else openMobileMenu();
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  /* Active Navigation Link */
  const sections = document.querySelectorAll('section[id]');

  function setActiveNavLink() {
    const scrollPos = window.scrollY + 120;
    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveNavLink, { passive: true });
  setActiveNavLink();

  /* Scroll Reveal */
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });

  /* Scroll to Top */
  const scrollTopBtn = document.getElementById('scroll-top');

  function handleScrollTopVisibility() {
    if (!scrollTopBtn) return;
    if (window.scrollY > 400) scrollTopBtn.classList.add('visible');
    else scrollTopBtn.classList.remove('visible');
  }

  window.addEventListener('scroll', handleScrollTopVisibility, { passive: true });
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* Smooth Scroll */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* Contact form next URL for FormSubmit */
  const form = document.getElementById('contact-form');
  if (form) {
    const next = document.createElement('input');
    next.type = 'hidden';
    next.name = '_next';
    next.value = window.location.href.split('#')[0] + '#contact';
    form.appendChild(next);
  }
})();
