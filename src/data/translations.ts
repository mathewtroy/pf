export const TRANSLATIONS = {
  en: {
    nav: { main: "Main", projects: "Projects", contacts: "Contacts" },
    profile: {
      name: "Aleksandr Kross",
      role: "Software Developer",
      about:
        "Software developer and first-year Master’s student at CTU in Prague. Focused on frontend, backend, and full-stack development.",
      download: "Download CV",
      skills: "Technical Skills",
      projects: "Projects",
      contacts: "Contacts",
      linkGithub: "View on GitHub",
      linkLive: "Open Web App",
    },
    projects: {
      candly: "Social app with posts, likes, search and admin tools.",
      todo: "Task manager with real-time Firestore sync and user authentication.",
      whiteboard: "Interactive drawing app with undo/redo, color selection, and brush size control.",
      vuln: "Automated PHP vulnerability scanner with a demo vulnerable web app.",
      finance: "Personal finance manager built in Kotlin using Jetpack Compose.",
      travel: "Full-stack travel booking app with secure authentication and booking requests.",
      eshop: "Automated Selenium tests for e-commerce workflows.",
    },
    seo: {
      title: "Aleksandr Kross — Software Developer Portfolio",
      description:
        "Portfolio of Aleksandr Kross — Software Developer skilled in React, TypeScript, JavaScript, and Firebase. Explore my projects, skills, and experience.",
      keywords:
        "Aleksandr Kross, Software Developer, React, TypeScript, Firebase, Portfolio, JavaScript, Web Developer",
      ogDescription:
        "Full-stack developer specializing in React, TypeScript, Firebase, and modern web technologies.",
    },
  },

  ru: {
    nav: { main: "Главная", projects: "Проекты", contacts: "Контакты" },
    profile: {
      name: "Александр Кросс",
      role: "Разработчик программного обеспечения",
      about:
        "Разработчик программного обеспечения и студент магистратуры Чешского технического университета в Праге. Фронтенд, бэкенд и фулстек-разработка.",
      download: "Скачать резюме",
      skills: "Технические навыки",
      projects: "Проекты",
      contacts: "Контакты",
      linkGithub: "Посмотреть на GitHub",
      linkLive: "Открыть веб-приложение",
    },
    projects: {
      candly: "Социальное приложение с постами, лайками, поиском и панелью администратора.",
      todo: "Менеджер задач с синхронизацией Firestore в реальном времени и авторизацией пользователей.",
      whiteboard: "Интерактивное приложение для рисования с функциями отмены, выбора цвета и толщины кисти.",
      vuln: "Приложение сканер уязвимостей PHP с демонстрационным уязвимым веб-приложением.",
      finance: "Мобильное приложение для управления личными финансами на Kotlin с использованием Jetpack Compose.",
      travel: "Полнофункциональный сайт для бронирования туров с безопасной авторизацией и системой бронирования.",
      eshop: "Автоматизированные тесты Selenium для проверки процессов интернет-магазина.",
    },
    seo: {
      title: "Александр Кросс — Портфолио разработчика ПО",
      description:
        "Портфолио Александра Кросса — разработчика программного обеспечения с опытом в React, TypeScript и Firebase. Ознакомьтесь с проектами и навыками.",
      keywords:
        "Александр Кросс, разработчик ПО, React, TypeScript, Firebase, JavaScript, портфолио, веб-разработчик",
      ogDescription:
        "Фулстек-разработчик, специализирующийся на React, TypeScript, Firebase и современных веб-технологиях.",
    },
  },
} as const;
