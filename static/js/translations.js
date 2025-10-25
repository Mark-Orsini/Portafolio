/* ========================================
   SISTEMA DE TRADUCCIONES COMPLETO - PORTAFOLIO MARK ORSINI
   Autor: Mark Orsini Carrillo
   Descripción: Sistema completo de traducciones multiidioma
   ======================================== */

// Objeto con todas las traducciones completas
const traducciones = {
    es: {
        // Navegación
        'menu': 'Menú',
        'nav-home': 'Inicio',
        'nav-about': 'Sobre Mí',
        'nav-services': 'Servicios',
        'nav-clients': 'Clientes',
        'nav-skills': 'Habilidades',
        'nav-education': 'Educación',
        'nav-certifications': 'Certificaciones',
        'nav-experience': 'Experiencia',
        'nav-references': 'Referencias',
        'nav-portfolio': 'Portafolio',
        'nav-organizations': 'Organizaciones',
        'nav-contact': 'Contacto',
        'nav-settings': 'Configuración',
        
        // Home
        'home-greeting': '¡Hola! Soy',
        'home-title': 'Técnico Profesional en Programación',
        'home-subtitle': 'Creando soluciones digitales innovadoras y funcionales',
        'home-cta-portfolio': 'Ver Portafolio',
        'home-cta-contact': 'Contactar',
        
        // Sobre Mí
        'about-title': 'Sobre Mí',
        'about-intro': 'Soy Mark Orsini Carrillo, estudiante de Técnico Profesional en Programación en el Liceo Comercial Vate Vicente Huidobro, Santiago, Chile. Mi pasión por la tecnología y el desarrollo de software me impulsa cada día a aprender más y a enfrentar nuevos desafíos.',
        'about-passion': 'Me considero una persona con una gran disposición para el aprendizaje continuo. En el mundo de la programación, donde las tecnologías evolucionan constantemente, me esfuerzo por mantenerme actualizado con los lenguajes y herramientas que domino.',
        'about-personality': 'Más allá de mis capacidades técnicas, valoro profundamente el trabajo en equipo y las relaciones interpersonales. Soy una persona positiva, amable y sociable.',
        'about-future': 'Mi objetivo es seguir creciendo como profesional en el ámbito tecnológico, contribuir con soluciones innovadoras y formar parte de equipos donde pueda aportar mis conocimientos.',
        
        // Servicios
        'services-title': 'Servicios',
        'services-subtitle': 'Áreas en las que puedo aportar valor',
        'service-web-title': 'Desarrollo Web',
        'service-web-desc': 'Creación de sitios web modernos, responsivos y funcionales utilizando HTML, CSS, JavaScript y frameworks modernos.',
        'service-backend-title': 'Desarrollo Backend',
        'service-backend-desc': 'Desarrollo de APIs y lógica de servidor con Python, .NET y otros lenguajes de programación robustos.',
        'service-db-title': 'Bases de Datos',
        'service-db-desc': 'Diseño, implementación y gestión de bases de datos SQL para almacenamiento eficiente de información.',
        
        // Clientes
        'clients-title': 'Experiencias Educativas',
        'clients-subtitle': 'Proyectos desarrollados durante mi formación',
        'client-school': 'Liceo Comercial Vate Vicente Huidobro',
        'client-school-desc': 'Proyectos académicos y colaborativos',
        'client-personal': 'Proyectos Personales',
        'client-personal-desc': 'Desarrollo independiente de aplicaciones',
        
        // Habilidades
        'skills-title': 'Habilidades',
        'skills-technical': 'Habilidades Técnicas',
        'skills-soft': 'Habilidades Blandas',
        'skill-teamwork': 'Trabajo en equipo',
        'skill-leadership': 'Liderazgo',
        'skill-social': 'Sociable',
        'skill-friendly': 'Amigable',
        'skill-attentive': 'Atento',
        'skill-flexible': 'Flexible',
        
        // Educación
        'education-title': 'Educación',
        'education-tp-title': 'Técnico Profesional en Programación',
        'education-school': 'Liceo Comercial Vate Vicente Huidobro',
        'education-desc': 'Formación técnica profesional de nivel medio en programación.',
        
        // Certificaciones
        'certifications-title': 'Certificaciones',
        'certifications-subtitle': 'Actualmente en proceso de obtener certificaciones profesionales',
        'certifications-coming-soon': 'Próximamente se agregarán certificaciones obtenidas',
        
        // Experiencia
        'experience-title': 'Experiencia',
        'experience-subtitle': 'Mi trayectoria en desarrollo de proyectos',
        'experience-student': 'Actualmente en formación académica desarrollando múltiples proyectos educativos.',
        
        // Referencias
        'references-title': 'Referencias',
        'references-subtitle': 'Referencias disponibles a solicitud',
        'references-available': 'Referencias de profesores y mentores disponibles mediante contacto directo.',
        
        // Portafolio
        'portfolio-title': 'Portafolio',
        'portfolio-subtitle': 'Mis proyectos destacados',
        'portfolio-coming-soon': 'Proyectos en desarrollo. Pronto se agregarán repositorios y demostraciones.',
        
        // Organizaciones
        'organizations-title': 'Organizaciones',
        'organizations-subtitle': 'Participación en actividades extracurriculares',
        'organizations-desc': 'Información sobre participación en organizaciones, clubes y actividades comunitarias se agregará próximamente.',
        
        // Contacto
        'contact-title': 'Contacto',
        'contact-subtitle': '¿Tienes un proyecto en mente? ¡Hablemos!',
        'contact-info-title': 'Información de Contacto',
        'contact-email-label': 'Correo Electrónico',
        'contact-location-label': 'Ubicación',
        'contact-form-title': 'Envíame un mensaje',
        'contact-name-label': 'Nombre',
        'contact-email-input': 'Email',
        'contact-subject': 'Asunto',
        'contact-message': 'Mensaje',
        'contact-send-btn': 'Enviar Mensaje',
        
        // Footer
        'footer-description': 'Técnico Profesional en Programación, apasionado por crear soluciones digitales innovadoras.',
        'footer-links-title': 'Enlaces Rápidos',
        'footer-social-title': 'Sígueme',
        'footer-rights': 'Todos los derechos reservados.',
        'footer-made-with': 'Hecho con',
        'footer-and': 'y',
        
        // Settings
        'settings-title': 'Configuración',
        'settings-back': 'Volver al Portafolio',
        'settings-themes-title': 'Temas de Color',
        'settings-themes-desc': 'Selecciona el tema de color que más te guste para personalizar tu experiencia',
        'settings-language-title': 'Idioma',
        'settings-language-desc': 'Elige el idioma en el que deseas ver el contenido del portafolio',
        'settings-options-title': 'Opciones Adicionales',
        'settings-animations': 'Animaciones',
        'settings-animations-desc': 'Activa o desactiva las animaciones',
        'settings-smooth-scroll': 'Desplazamiento Suave',
        'settings-smooth-scroll-desc': 'Habilita el scroll suave entre secciones',
        'settings-restore': 'Restaurar Configuración Predeterminada',
        
        // Temas
        'theme-default': 'Predeterminado',
        'theme-dark': 'Oscuro',
        'theme-light': 'Claro',
        'theme-dark-blue': 'Azul Oscuro',
        'theme-blue': 'Azul',
        'theme-red': 'Rojo',
        'theme-dark-red': 'Rojo Oscuro',
        'theme-gold': 'Dorado',
        'theme-green': 'Verde',
        'theme-dark-green': 'Verde Oscuro',
        'theme-sky-blue': 'Celeste',
        'theme-purple': 'Púrpura',
        'theme-dark-purple': 'Púrpura Oscuro',
        'language-default': 'Predeterminado',
        
        // Años
        'years-2024-2025': '2024 - 2025'
    },
    en: {
        // Navegación
        'menu': 'Menu',
        'nav-home': 'Home',
        'nav-about': 'About Me',
        'nav-services': 'Services',
        'nav-clients': 'Clients',
        'nav-skills': 'Skills',
        'nav-education': 'Education',
        'nav-certifications': 'Certifications',
        'nav-experience': 'Experience',
        'nav-references': 'References',
        'nav-portfolio': 'Portfolio',
        'nav-organizations': 'Organizations',
        'nav-contact': 'Contact',
        'nav-settings': 'Settings',
        
        // Home
        'home-greeting': 'Hello! I am',
        'home-title': 'Professional Programming Technician',
        'home-subtitle': 'Creating innovative and functional digital solutions',
        'home-cta-portfolio': 'View Portfolio',
        'home-cta-contact': 'Contact',
        
        // Sobre Mí
        'about-title': 'About Me',
        'about-intro': 'I am Mark Orsini Carrillo, student of Professional Programming Technician at Liceo Comercial Vate Vicente Huidobro, Santiago, Chile. My passion for technology and software development drives me every day to learn more and face new challenges.',
        'about-passion': 'I consider myself a person with a great disposition for continuous learning. In the world of programming, where technologies evolve constantly, I strive to stay updated with the languages and tools I master.',
        'about-personality': 'Beyond my technical abilities, I deeply value teamwork and interpersonal relationships. I am a positive, kind, and sociable person.',
        'about-future': 'My goal is to continue growing as a professional in the technological field, contribute with innovative solutions and be part of teams where I can contribute my knowledge.',
        
        // Servicios
        'services-title': 'Services',
        'services-subtitle': 'Areas where I can add value',
        'service-web-title': 'Web Development',
        'service-web-desc': 'Creation of modern, responsive and functional websites using HTML, CSS, JavaScript and modern frameworks.',
        'service-backend-title': 'Backend Development',
        'service-backend-desc': 'Development of APIs and server logic with Python, .NET and other robust programming languages.',
        'service-db-title': 'Databases',
        'service-db-desc': 'Design, implementation and management of SQL databases for efficient information storage.',
        
        // Clientes
        'clients-title': 'Educational Experiences',
        'clients-subtitle': 'Projects developed during my training',
        'client-school': 'Liceo Comercial Vate Vicente Huidobro',
        'client-school-desc': 'Academic and collaborative projects',
        'client-personal': 'Personal Projects',
        'client-personal-desc': 'Independent application development',
        
        // Habilidades
        'skills-title': 'Skills',
        'skills-technical': 'Technical Skills',
        'skills-soft': 'Soft Skills',
        'skill-teamwork': 'Teamwork',
        'skill-leadership': 'Leadership',
        'skill-social': 'Sociable',
        'skill-friendly': 'Friendly',
        'skill-attentive': 'Attentive',
        'skill-flexible': 'Flexible',
        
        // Educación
        'education-title': 'Education',
        'education-tp-title': 'Professional Programming Technician',
        'education-school': 'Liceo Comercial Vate Vicente Huidobro',
        'education-desc': 'Medium-level professional technical training in programming.',
        
        // Certificaciones
        'certifications-title': 'Certifications',
        'certifications-subtitle': 'Currently in the process of obtaining professional certifications',
        'certifications-coming-soon': 'Certifications obtained will be added soon',
        
        // Experiencia
        'experience-title': 'Experience',
        'experience-subtitle': 'My trajectory in project development',
        'experience-student': 'Currently in academic training developing multiple educational projects.',
        
        // Referencias
        'references-title': 'References',
        'references-subtitle': 'References available upon request',
        'references-available': 'References from teachers and mentors available through direct contact.',
        
        // Portafolio
        'portfolio-title': 'Portfolio',
        'portfolio-subtitle': 'My featured projects',
        'portfolio-coming-soon': 'Projects in development. Repositories and demonstrations will be added soon.',
        
        // Organizaciones
        'organizations-title': 'Organizations',
        'organizations-subtitle': 'Participation in extracurricular activities',
        'organizations-desc': 'Information on participation in organizations, clubs and community activities will be added soon.',
        
        // Contacto
        'contact-title': 'Contact',
        'contact-subtitle': 'Do you have a project in mind? Let\'s talk!',
        'contact-info-title': 'Contact Information',
        'contact-email-label': 'Email',
        'contact-location-label': 'Location',
        'contact-form-title': 'Send me a message',
        'contact-name-label': 'Name',
        'contact-email-input': 'Email',
        'contact-subject': 'Subject',
        'contact-message': 'Message',
        'contact-send-btn': 'Send Message',
        
        // Footer
        'footer-description': 'Professional Programming Technician, passionate about creating innovative digital solutions.',
        'footer-links-title': 'Quick Links',
        'footer-social-title': 'Follow me',
        'footer-rights': 'All rights reserved.',
        'footer-made-with': 'Made with',
        'footer-and': 'and',
        
        // Settings
        'settings-title': 'Settings',
        'settings-back': 'Back to Portfolio',
        'settings-themes-title': 'Color Themes',
        'settings-themes-desc': 'Select the color theme you like the most to customize your experience',
        'settings-language-title': 'Language',
        'settings-language-desc': 'Choose the language in which you want to view the portfolio content',
        'settings-options-title': 'Additional Options',
        'settings-animations': 'Animations',
        'settings-animations-desc': 'Enable or disable animations',
        'settings-smooth-scroll': 'Smooth Scrolling',
        'settings-smooth-scroll-desc': 'Enable smooth scrolling between sections',
        'settings-restore': 'Restore Default Settings',
        
        // Temas
        'theme-default': 'Default',
        'theme-dark': 'Dark',
        'theme-light': 'Light',
        'theme-dark-blue': 'Dark Blue',
        'theme-blue': 'Blue',
        'theme-red': 'Red',
        'theme-dark-red': 'Dark Red',
        'theme-gold': 'Gold',
        'theme-green': 'Green',
        'theme-dark-green': 'Dark Green',
        'theme-sky-blue': 'Sky Blue',
        'theme-purple': 'Purple',
        'theme-dark-purple': 'Dark Purple',
        'language-default': 'Default',
        
        // Años
        'years-2024-2025': '2024 - 2025'
    },
    ru: {
        // Navegación
        'menu': 'Меню',
        'nav-home': 'Главная',
        'nav-about': 'Обо мне',
        'nav-services': 'Услуги',
        'nav-clients': 'Клиенты',
        'nav-skills': 'Навыки',
        'nav-education': 'Образование',
        'nav-certifications': 'Сертификаты',
        'nav-experience': 'Опыт',
        'nav-references': 'Рекомендации',
        'nav-portfolio': 'Портфолио',
        'nav-organizations': 'Организации',
        'nav-contact': 'Контакты',
        'nav-settings': 'Настройки',
        
        // Home
        'home-greeting': 'Привет! Я',
        'home-title': 'Техник по программированию',
        'home-subtitle': 'Создаю инновационные цифровые решения',
        'home-cta-portfolio': 'Просмотреть портфолио',
        'home-cta-contact': 'Контакт',
        
        // Sobre Mí
        'about-title': 'Обо мне',
        'about-intro': 'Я Марк Орсини Каррильо, студент по специальности "Техник по программированию" в Лицее Коммерческом Вате Висенте Уидобро, Сантьяго, Чили. Моя страсть к технологиям и разработке ПО побуждает меня каждый день учиться больше и сталкиваться с новыми вызовами.',
        'about-passion': 'Я считаю себя человеком с большой склонностью к непрерывному обучению. В мире программирования, где технологии постоянно эволюционируют, я стремлюсь оставаться в курсе языков и инструментов, которые я освоил.',
        'about-personality': 'Помимо моих технических способностей, я высоко ценю командную работу и межличностные отношения. Я позитивный, добрый и общительный человек.',
        'about-future': 'Моя цель - продолжать расти как профессионал в технологической сфере, вносить инновационные решения и быть частью команд, где я могу внести свои знания.',
        
        // Servicios
        'services-title': 'Услуги',
        'services-subtitle': 'Области, где я могу добавить ценность',
        'service-web-title': 'Веб-разработка',
        'service-web-desc': 'Создание современных, адаптивных и функциональных веб-сайтов с использованием HTML, CSS, JavaScript и современных фреймворков.',
        'service-backend-title': 'Backend-разработка',
        'service-backend-desc': 'Разработка API и серверной логики с Python, .NET и другими надежными языками программирования.',
        'service-db-title': 'Базы данных',
        'service-db-desc': 'Дизайн, реализация и управление базами данных SQL для эффективного хранения информации.',
        
        // Clientes
        'clients-title': 'Образовательный опыт',
        'clients-subtitle': 'Проекты, разработанные во время обучения',
        'client-school': 'Лицей Коммерческий Вате Висенте Уидобро',
        'client-school-desc': 'Академические и совместные проекты',
        'client-personal': 'Личные проекты',
        'client-personal-desc': 'Независимая разработка приложений',
        
        // Habilidades
        'skills-title': 'Навыки',
        'skills-technical': 'Технические навыки',
        'skills-soft': 'Мягкие навыки',
        'skill-teamwork': 'Командная работа',
        'skill-leadership': 'Лидерство',
        'skill-social': 'Общительный',
        'skill-friendly': 'Дружественный',
        'skill-attentive': 'Внимательный',
        'skill-flexible': 'Гибкий',
        
        // Educación
        'education-title': 'Образование',
        'education-tp-title': 'Техник по программированию',
        'education-school': 'Лицей Коммерческий Вате Висенте Уидобро',
        'education-desc': 'Среднепрофессиональное техническое образование в программировании.',
        
        // Certificaciones
        'certifications-title': 'Сертификаты',
        'certifications-subtitle': 'В настоящее время в процессе получения профессиональных сертификатов',
        'certifications-coming-soon': 'Скоро будут добавлены полученные сертификаты',
        
        // Experiencia
        'experience-title': 'Опыт',
        'experience-subtitle': 'Моя траектория в разработке проектов',
        'experience-student': 'В настоящее время в академическом обучении, разрабатывая несколько образовательных проектов.',
        
        // Referencias
        'references-title': 'Рекомендации',
        'references-subtitle': 'Рекомендации доступны по запросу',
        'references-available': 'Рекомендации от учителей и наставников доступны через прямой контакт.',
        
        // Portafolio
        'portfolio-title': 'Портфолио',
        'portfolio-subtitle': 'Мои выдающиеся проекты',
        'portfolio-coming-soon': 'Проекты в разработке. Скоро будут добавлены репозитории и демонстрации.',
        
        // Organizaciones
        'organizations-title': 'Организации',
        'organizations-subtitle': 'Участие в внеклассных мероприятиях',
        'organizations-desc': 'Информация об участии в организациях, клубах и общественных мероприятиях будет добавлена скоро.',
        
        // Contacto
        'contact-title': 'Контакты',
        'contact-subtitle': 'У вас есть проект в виду? Давайте поговорим!',
        'contact-info-title': 'Контактная информация',
        'contact-email-label': 'Электронная почта',
        'contact-location-label': 'Местоположение',
        'contact-form-title': 'Отправьте мне сообщение',
        'contact-name-label': 'Имя',
        'contact-email-input': 'Email',
        'contact-subject': 'Тема',
        'contact-message': 'Сообщение',
        'contact-send-btn': 'Отправить сообщение',
        
        // Footer
        'footer-description': 'Техник по программированию, увлеченный созданием инновационных цифровых решений.',
        'footer-links-title': 'Быстрые ссылки',
        'footer-social-title': 'Следите за мной',
        'footer-rights': 'Все права защищены.',
        'footer-made-with': 'Сделано с',
        'footer-and': 'и',
        
        // Settings
        'settings-title': 'Настройки',
        'settings-back': 'Вернуться в портфолио',
        'settings-themes-title': 'Цветовые темы',
        'settings-themes-desc': 'Выберите цветовую тему, которая вам нравится больше всего, для персонализации вашего опыта',
        'settings-language-title': 'Язык',
        'settings-language-desc': 'Выберите язык, на котором вы хотите просматривать содержание портфолио',
        'settings-options-title': 'Дополнительные опции',
        'settings-animations': 'Анимации',
        'settings-animations-desc': 'Включить или отключить анимации',
        'settings-smooth-scroll': 'Плавная прокрутка',
        'settings-smooth-scroll-desc': 'Включить плавную прокрутку между разделами',
        'settings-restore': 'Восстановить настройки по умолчанию',
        
        // Temas
        'theme-default': 'По умолчанию',
        'theme-dark': 'Темный',
        'theme-light': 'Светлый',
        'theme-dark-blue': 'Темно-синий',
        'theme-blue': 'Синий',
        'theme-red': 'Красный',
        'theme-dark-red': 'Темно-красный',
        'theme-gold': 'Золотой',
        'theme-green': 'Зеленый',
        'theme-dark-green': 'Темно-зеленый',
        'theme-sky-blue': 'Небесно-голубой',
        'theme-purple': 'Фиолетовый',
        'theme-dark-purple': 'Темно-фиолетовый',
        'language-default': 'По умолчанию',
        
        // Años
        'years-2024-2025': '2024 - 2025'
    },
    zh: {
        // Navegación
        'menu': '菜单',
        'nav-home': '首页',
        'nav-about': '关于我',
        'nav-services': '服务',
        'nav-clients': '客户',
        'nav-skills': '技能',
        'nav-education': '教育',
        'nav-certifications': '证书',
        'nav-experience': '经验',
        'nav-references': '参考',
        'nav-portfolio': '作品集',
        'nav-organizations': '组织',
        'nav-contact': '联系',
        'nav-settings': '设置',
        
        // Home
        'home-greeting': '你好！我是',
        'home-title': '专业编程技术员',
        'home-subtitle': '创建创新和功能性的数字解决方案',
        'home-cta-portfolio': '查看作品集',
        'home-cta-contact': '联系',
        
        // Sobre Mí
        'about-title': '关于我',
        'about-intro': '我是马克·奥西尼·卡里略，在智利圣地亚哥的瓦特·维森特·乌伊多布罗商业中学学习专业编程技术员。我对技术和软件开发的热情每天都驱使我学习更多并面对新的挑战。',
        'about-passion': '我认为自己是一个对持续学习有很大倾向的人。在编程世界中，技术不断进化，我努力保持更新我掌握的语言和工具。',
        'about-personality': '除了我的技术能力，我非常重视团队合作和人际关系。我是一个积极、善良且善于社交的人。',
        'about-future': '我的目标是在技术领域继续成长，贡献创新解决方案，并成为我可以贡献知识的团队的一部分。',
        
        // Servicios
        'services-title': '服务',
        'services-subtitle': '我可以添加价值的领域',
        'service-web-title': '网页开发',
        'service-web-desc': '使用HTML, CSS, JavaScript和现代框架创建现代、响应式和功能性网站。',
        'service-backend-title': '后端开发',
        'service-backend-desc': '使用Python, .NET和其他健壮编程语言开发API和服务器逻辑。',
        'service-db-title': '数据库',
        'service-db-desc': '设计、实现和管理SQL数据库以高效存储信息。',
        
        // Clientes
        'clients-title': '教育经验',
        'clients-subtitle': '培训期间开发的项目',
        'client-school': '瓦特·维森特·乌伊多布罗商业中学',
        'client-school-desc': '学术和协作项目',
        'client-personal': '个人项目',
        'client-personal-desc': '独立应用开发',
        
        // Habilidades
        'skills-title': '技能',
        'skills-technical': '技术技能',
        'skills-soft': '软技能',
        'skill-teamwork': '团队合作',
        'skill-leadership': '领导力',
        'skill-social': '善于社交',
        'skill-friendly': '友好',
        'skill-attentive': '细心',
        'skill-flexible': '灵活',
        
        // Educación
        'education-title': '教育',
        'education-tp-title': '专业编程技术员',
        'education-school': '瓦特·维森特·乌伊多布罗商业中学',
        'education-desc': '中等专业技术编程培训。',
        
        // Certificaciones
        'certifications-title': '证书',
        'certifications-subtitle': '目前正在获得专业证书',
        'certifications-coming-soon': '很快将添加获得的证书',
        
        // Experiencia
        'experience-title': '经验',
        'experience-subtitle': '我的项目开发轨迹',
        'experience-student': '目前在学术培训中开发多个教育项目。',
        
        // Referencias
        'references-title': '参考',
        'references-subtitle': '参考可应要求提供',
        'references-available': '通过直接联系提供教师和导师的参考。',
        
        // Portafolio
        'portfolio-title': '作品集',
        'portfolio-subtitle': '我的特色项目',
        'portfolio-coming-soon': '项目开发中。很快将添加存储库和演示。',
        
        // Organizaciones
        'organizations-title': '组织',
        'organizations-subtitle': '参与课外活动',
        'organizations-desc': '关于参与组织、俱乐部和社区活动的信息很快将添加。',
        
        // Contacto
        'contact-title': '联系',
        'contact-subtitle': '你有项目想法吗？让我们谈谈！',
        'contact-info-title': '联系信息',
        'contact-email-label': '电子邮件',
        'contact-location-label': '位置',
        'contact-form-title': '给我发消息',
        'contact-name-label': '名称',
        'contact-email-input': '电子邮件',
        'contact-subject': '主题',
        'contact-message': '消息',
        'contact-send-btn': '发送消息',
        
        // Footer
        'footer-description': '专业编程技术员，对创建创新数字解决方案充满热情。',
        'footer-links-title': '快速链接',
        'footer-social-title': '关注我',
        'footer-rights': '保留所有权利。',
        'footer-made-with': '用',
        'footer-and': '和',
        
        // Settings
        'settings-title': '设置',
        'settings-back': '返回作品集',
        'settings-themes-title': '颜色主题',
        'settings-themes-desc': '选择你最喜欢的颜色主题来个性化你的体验',
        'settings-language-title': '语言',
        'settings-language-desc': '选择你想查看作品集内容的语言',
        'settings-options-title': '附加选项',
        'settings-animations': '动画',
        'settings-animations-desc': '启用或禁用动画',
        'settings-smooth-scroll': '平滑滚动',
        'settings-smooth-scroll-desc': '启用部分之间的平滑滚动',
        'settings-restore': '恢复默认设置',
        
        // Temas
        'theme-default': '默认',
        'theme-dark': '深色',
        'theme-light': '浅色',
        'theme-dark-blue': '深蓝',
        'theme-blue': '蓝色',
        'theme-red': '红色',
        'theme-dark-red': '深红',
        'theme-gold': '金色',
        'theme-green': '绿色',
        'theme-dark-green': '深绿',
        'theme-sky-blue': '天蓝',
        'theme-purple': '紫色',
        'theme-dark-purple': '深紫',
        'language-default': '默认',
        
        // Años
        'years-2024-2025': '2024 - 2025'
    },
    ja: {
        // Navegación
        'menu': 'メニュー',
        'nav-home': 'ホーム',
        'nav-about': '私について',
        'nav-services': 'サービス',
        'nav-clients': 'クライアント',
        'nav-skills': 'スキル',
        'nav-education': '教育',
        'nav-certifications': '認定',
        'nav-experience': '経験',
        'nav-references': '参考',
        'nav-portfolio': 'ポートフォリオ',
        'nav-organizations': '組織',
        'nav-contact': '連絡先',
        'nav-settings': '設定',
        
        // Home
        'home-greeting': 'こんにちは！私は',
        'home-title': 'プログラミング技術者',
        'home-subtitle': '革新的で機能的なデジタルソリューションを作成',
        'home-cta-portfolio': 'ポートフォリオを見る',
        'home-cta-contact': '連絡',
        
        // Sobre Mí
        'about-title': '私について',
        'about-intro': '私はマーク・オルシーニ・カーリョ、チリ、サンティアゴのヴァテ・ヴィセンテ・ウイドブロ商業高校でプログラミング技術者の学生です。技術とソフトウェア開発への情熱が毎日私を学び続け、新しい課題に直面するように駆り立てます。',
        'about-passion': '私は継続的な学習に大きな傾向を持つ人だと考えています。技術が常に進化するプログラミングの世界で、私がマスターした言語とツールを最新に保つために努力しています。',
        'about-personality': '私の技術的能力を超えて、チームワークと人間関係を深く重視しています。私は肯定的で親切で社交的な人です。',
        'about-future': '私の目標は技術分野でプロフェッショナルとして成長し続け、革新的なソリューションを貢献し、私の知識を貢献できるチームの一部になることです。',
        
        // Servicios
        'services-title': 'サービス',
        'services-subtitle': '価値を追加できる領域',
        'service-web-title': 'ウェブ開発',
        'service-web-desc': 'HTML, CSS, JavaScriptと現代のフレームワークを使用して現代的でレスポンシブで機能的なウェブサイトを作成。',
        'service-backend-title': 'バックエンド開発',
        'service-backend-desc': 'Python, .NETおよび他の堅牢なプログラミング言語を使用してAPIとサーバーロジックを開発。',
        'service-db-title': 'データベース',
        'service-db-desc': '効率的な情報ストレージのためのSQLデータベースの設計、実装、管理。',
        
        // Clientes
        'clients-title': '教育経験',
        'clients-subtitle': 'トレーニング中に開発されたプロジェクト',
        'client-school': 'ヴァテ・ヴィセンテ・ウイドブロ商業高校',
        'client-school-desc': '学術的および共同プロジェクト',
        'client-personal': '個人プロジェクト',
        'client-personal-desc': '独立したアプリケーション開発',
        
        // Habilidades
        'skills-title': 'スキル',
        'skills-technical': '技術スキル',
        'skills-soft': 'ソフトスキル',
        'skill-teamwork': 'チームワーク',
        'skill-leadership': 'リーダーシップ',
        'skill-social': '社交的',
        'skill-friendly': '親切',
        'skill-attentive': '注意深い',
        'skill-flexible': '柔軟',
        
        // Educación
        'education-title': '教育',
        'education-tp-title': 'プログラミング技術者',
        'education-school': 'ヴァテ・ヴィセンテ・ウイドブロ商業高校',
        'education-desc': '中級専門技術プログラミングトレーニング。',
        
        // Certificaciones
        'certifications-title': '認定',
        'certifications-subtitle': '現在、専門認定を取得中',
        'certifications-coming-soon': '取得した認定はまもなく追加されます',
        
        // Experiencia
        'experience-title': '経験',
        'experience-subtitle': 'プロジェクト開発の軌跡',
        'experience-student': '現在、学術トレーニングで複数の教育プロジェクトを開発中。',
        
        // Referencias
        'references-title': '参考',
        'references-subtitle': '参考はリクエストに応じて利用可能',
        'references-available': '教師とメンターの参考は直接連絡で利用可能。',
        
        // Portafolio
        'portfolio-title': 'ポートフォリオ',
        'portfolio-subtitle': '私の注目プロジェクト',
        'portfolio-coming-soon': 'プロジェクト開発中。リポジトリとデモはまもなく追加されます。',
        
        // Organizaciones
        'organizations-title': '組織',
        'organizations-subtitle': '課外活動への参加',
        'organizations-desc': '組織、クラブ、コミュニティ活動への参加に関する情報はまもなく追加されます。',
        
        // Contacto
        'contact-title': '連絡先',
        'contact-subtitle': 'プロジェクトのアイデアがありますか？話しましょう！',
        'contact-info-title': '連絡情報',
        'contact-email-label': 'メール',
        'contact-location-label': '場所',
        'contact-form-title': 'メッセージを送る',
        'contact-name-label': '名前',
        'contact-email-input': 'メール',
        'contact-subject': '件名',
        'contact-message': 'メッセージ',
        'contact-send-btn': 'メッセージを送る',
        
        // Footer
        'footer-description': 'プログラミング技術者、革新的なデジタルソリューションを作成することに情熱を注いでいます。',
        'footer-links-title': 'クイックリンク',
        'footer-social-title': 'フォローする',
        'footer-rights': 'すべての権利を保有。',
        'footer-made-with': 'で作られた',
        'footer-and': 'と',
        
        // Settings
        'settings-title': '設定',
        'settings-back': 'ポートフォリオに戻る',
        'settings-themes-title': 'カラーテーマ',
        'settings-themes-desc': '経験をカスタマイズするために最も好きなカラーテーマを選択',
        'settings-language-title': '言語',
        'settings-language-desc': 'ポートフォリオの内容を表示したい言語を選択',
        'settings-options-title': '追加オプション',
        'settings-animations': 'アニメーション',
        'settings-animations-desc': 'アニメーションを有効または無効にする',
        'settings-smooth-scroll': 'スムーズスクロール',
        'settings-smooth-scroll-desc': 'セクション間のスムーズスクロールを有効にする',
        'settings-restore': 'デフォルト設定を復元',
        
        // Temas
        'theme-default': 'デフォルト',
        'theme-dark': 'ダーク',
        'theme-light': 'ライト',
        'theme-dark-blue': 'ダークブルー',
        'theme-blue': 'ブルー',
        'theme-red': 'レッド',
        'theme-dark-red': 'ダークレッド',
        'theme-gold': 'ゴールド',
        'theme-green': 'グリーン',
        'theme-dark-green': 'ダークグリーン',
        'theme-sky-blue': 'スカイブルー',
        'theme-purple': 'パープル',
        'theme-dark-purple': 'ダークパープル',
        'language-default': 'デフォルト',
        
        // Años
        'years-2024-2025': '2024 - 2025'
    },
    ko: {
        // Navegación
        'menu': '메뉴',
        'nav-home': '홈',
        'nav-about': '소개',
        'nav-services': '서비스',
        'nav-clients': '클라이언트',
        'nav-skills': '기술',
        'nav-education': '교육',
        'nav-certifications': '자격증',
        'nav-experience': '경험',
        'nav-references': '추천',
        'nav-portfolio': '포트폴리오',
        'nav-organizations': '조직',
        'nav-contact': '연락처',
        'nav-settings': '설정',
        
        // Home
        'home-greeting': '안녕하세요! 저는',
        'home-title': '프로그래밍 기술자',
        'home-subtitle': '혁신적이고 기능적인 디지털 솔루션 생성',
        'home-cta-portfolio': '포트폴리오 보기',
        'home-cta-contact': '연락',
        
        // Sobre Mí
        'about-title': '소개',
        'about-intro': '저는 마크 오르시니 카리요, 칠레 산티아고의 바테 비센테 우이도브로 상업 고등학교에서 프로그래밍 기술자 학생입니다. 기술과 소프트웨어 개발에 대한 열정이 매일 더 배우고 새로운 도전을 마주하도록 합니다.',
        'about-passion': '저는 지속적인 학습에 큰 경향을 가진 사람이라고 생각합니다. 기술이 끊임없이 진화하는 프로그래밍 세계에서, 제가 마스터한 언어와 도구를 최신 상태로 유지하기 위해 노력합니다.',
        'about-personality': '제 기술 능력을 넘어, 팀워크와 대인 관계를 깊이 중시합니다. 저는 긍정적이고 친절하며 사교적인 사람입니다.',
        'about-future': '제 목표는 기술 분야에서 전문가로서 계속 성장하고, 혁신적인 솔루션을 기여하며, 제 지식을 기여할 수 있는 팀의 일부가 되는 것입니다.',
        
        // Servicios
        'services-title': '서비스',
        'services-subtitle': '가치를 추가할 수 있는 영역',
        'service-web-title': '웹 개발',
        'service-web-desc': 'HTML, CSS, JavaScript 및 현대 프레임워크를 사용하여 현대적이고 반응형이며 기능적인 웹사이트 생성.',
        'service-backend-title': '백엔드 개발',
        'service-backend-desc': 'Python, .NET 및 다른 강력한 프로그래밍 언어를 사용하여 API 및 서버 로직 개발.',
        'service-db-title': '데이터베이스',
        'service-db-desc': '효율적인 정보 저장을 위한 SQL 데이터베이스 설계, 구현 및 관리.',
        
        // Clientes
        'clients-title': '교육 경험',
        'clients-subtitle': '훈련 중 개발된 프로젝트',
        'client-school': '바테 비센테 우이도브로 상업 고등학교',
        'client-school-desc': '학술 및 협력 프로젝트',
        'client-personal': '개인 프로젝트',
        'client-personal-desc': '독립 애플리케이션 개발',
        
        // Habilidades
        'skills-title': '기술',
        'skills-technical': '기술 기술',
        'skills-soft': '소프트 기술',
        'skill-teamwork': '팀워크',
        'skill-leadership': '리더십',
        'skill-social': '사교적',
        'skill-friendly': '친절',
        'skill-attentive': '세심',
        'skill-flexible': '유연',
        
        // Educación
        'education-title': '교육',
        'education-tp-title': '프로그래밍 기술자',
        'education-school': '바테 비센테 우이도브로 상업 고등학교',
        'education-desc': '중급 전문 기술 프로그래밍 훈련.',
        
        // Certificaciones
        'certifications-title': '자격증',
        'certifications-subtitle': '현재 전문 자격증 취득 중',
        'certifications-coming-soon': '취득한 자격증은 곧 추가됩니다',
        
        // Experiencia
        'experience-title': '경험',
        'experience-subtitle': '프로젝트 개발 궤적',
        'experience-student': '현재 학술 훈련에서 여러 교육 프로젝트 개발 중.',
        
        // Referencias
        'references-title': '추천',
        'references-subtitle': '추천은 요청 시 제공',
        'references-available': '교사와 멘토의 추천은 직접 연락으로 제공.',
        
        // Portafolio
        'portfolio-title': '포트폴리오',
        'portfolio-subtitle': '내 주목 프로젝트',
        'portfolio-coming-soon': '프로젝트 개발 중. 저장소와 데모는 곧 추가됩니다.',
        
        // Organizaciones
        'organizations-title': '조직',
        'organizations-subtitle': '과외 활동 참여',
        'organizations-desc': '조직, 클럽, 커뮤니티 활동 참여에 대한 정보는 곧 추가됩니다.',
        
        // Contacto
        'contact-title': '연락처',
        'contact-subtitle': '프로젝트 아이디어가 있습니까? 이야기합시다!',
        'contact-info-title': '연락 정보',
        'contact-email-label': '이메일',
        'contact-location-label': '위치',
        'contact-form-title': '메시지 보내기',
        'contact-name-label': '이름',
        'contact-email-input': '이메일',
        'contact-subject': '제목',
        'contact-message': '메시지',
        'contact-send-btn': '메시지 보내기',
        
        // Footer
        'footer-description': '프로그래밍 기술자, 혁신적인 디지털 솔루션 생성에 열정.',
        'footer-links-title': '빠른 링크',
        'footer-social-title': '팔로우',
        'footer-rights': '모든 권리 보유.',
        'footer-made-with': '으로 만든',
        'footer-and': '과',
        
        // Settings
        'settings-title': '설정',
        'settings-back': '포트폴리오로 돌아가기',
        'settings-themes-title': '색상 테마',
        'settings-themes-desc': '경험을 사용자 지정하기 위해 가장 좋아하는 색상 테마 선택',
        'settings-language-title': '언어',
        'settings-language-desc': '포트폴리오 내용을 보고 싶은 언어 선택',
        'settings-options-title': '추가 옵션',
        'settings-animations': '애니메이션',
        'settings-animations-desc': '애니메이션 활성화 또는 비활성화',
        'settings-smooth-scroll': '부드러운 스크롤',
        'settings-smooth-scroll-desc': '섹션 간 부드러운 스크롤 활성화',
        'settings-restore': '기본 설정 복원',
        
        // Temas
        'theme-default': '기본',
        'theme-dark': '다크',
        'theme-light': '라이트',
        'theme-dark-blue': '다크 블루',
        'theme-blue': '블루',
        'theme-red': '레드',
        'theme-dark-red': '다크 레드',
        'theme-gold': '골드',
        'theme-green': '그린',
        'theme-dark-green': '다크 그린',
        'theme-sky-blue': '스카이 블루',
        'theme-purple': '퍼플',
        'theme-dark-purple': '다크 퍼플',
        'language-default': '기본',
        
        // Años
        'years-2024-2025': '2024 - 2025'
    },
    pt: {
        // Navegación
        'menu': 'Menu',
        'nav-home': 'Início',
        'nav-about': 'Sobre Mim',
        'nav-services': 'Serviços',
        'nav-clients': 'Clientes',
        'nav-skills': 'Habilidades',
        'nav-education': 'Educação',
        'nav-certifications': 'Certificações',
        'nav-experience': 'Experiência',
        'nav-references': 'Referências',
        'nav-portfolio': 'Portfólio',
        'nav-organizations': 'Organizações',
        'nav-contact': 'Contato',
        'nav-settings': 'Configurações',
        
        // Home
        'home-greeting': 'Olá! Eu sou',
        'home-title': 'Técnico em Programação',
        'home-subtitle': 'Criando soluções digitais inovadoras e funcionais',
        'home-cta-portfolio': 'Ver Portfólio',
        'home-cta-contact': 'Contato',
        
        // Sobre Mí
        'about-title': 'Sobre Mim',
        'about-intro': 'Eu sou Mark Orsini Carrillo, estudante de Técnico em Programação no Liceu Comercial Vate Vicente Huidobro, Santiago, Chile. Minha paixão pela tecnologia e desenvolvimento de software me impulsiona todos os dias a aprender mais e enfrentar novos desafios.',
        'about-passion': 'Eu me considero uma pessoa com grande disposição para aprendizado contínuo. No mundo da programação, onde as tecnologias evoluem constantemente, eu me esforço para me manter atualizado com as linguagens e ferramentas que domino.',
        'about-personality': 'Além das minhas capacidades técnicas, valorizo profundamente o trabalho em equipe e as relações interpessoais. Sou uma pessoa positiva, amável e sociável.',
        'about-future': 'Meu objetivo é continuar crescendo como profissional na área tecnológica, contribuir com soluções inovadoras e fazer parte de equipes onde possa contribuir com meus conhecimentos.',
        
        // Servicios
        'services-title': 'Serviços',
        'services-subtitle': 'Áreas onde posso adicionar valor',
        'service-web-title': 'Desenvolvimento Web',
        'service-web-desc': 'Criação de sites modernos, responsivos e funcionais usando HTML, CSS, JavaScript e frameworks modernos.',
        'service-backend-title': 'Desenvolvimento Backend',
        'service-backend-desc': 'Desenvolvimento de APIs e lógica de servidor com Python, .NET e outras linguagens de programação robustas.',
        'service-db-title': 'Bancos de Dados',
        'service-db-desc': 'Design, implementação e gerenciamento de bancos de dados SQL para armazenamento eficiente de informações.',
        
        // Clientes
        'clients-title': 'Experiências Educacionais',
        'clients-subtitle': 'Projetos desenvolvidos durante minha formação',
        'client-school': 'Liceu Comercial Vate Vicente Huidobro',
        'client-school-desc': 'Projetos acadêmicos e colaborativos',
        'client-personal': 'Projetos Pessoais',
        'client-personal-desc': 'Desenvolvimento independente de aplicações',
        
        // Habilidades
        'skills-title': 'Habilidades',
        'skills-technical': 'Habilidades Técnicas',
        'skills-soft': 'Habilidades Suaves',
        'skill-teamwork': 'Trabalho em equipe',
        'skill-leadership': 'Liderança',
        'skill-social': 'Sociável',
        'skill-friendly': 'Amigável',
        'skill-attentive': 'Atento',
        'skill-flexible': 'Flexível',
        
        // Educación
        'education-title': 'Educação',
        'education-tp-title': 'Técnico em Programação',
        'education-school': 'Liceu Comercial Vate Vicente Huidobro',
        'education-desc': 'Formação técnica profissional de nível médio em programação.',
        
        // Certificaciones
        'certifications-title': 'Certificações',
        'certifications-subtitle': 'Atualmente no processo de obter certificações profissionais',
        'certifications-coming-soon': 'Certificações obtidas serão adicionadas em breve',
        
        // Experiencia
        'experience-title': 'Experiência',
        'experience-subtitle': 'Minha trajetória no desenvolvimento de projetos',
        'experience-student': 'Atualmente em formação acadêmica desenvolvendo múltiplos projetos educacionais.',
        
        // Referencias
        'references-title': 'Referências',
        'references-subtitle': 'Referências disponíveis sob solicitação',
        'references-available': 'Referências de professores e mentores disponíveis mediante contato direto.',
        
        // Portafolio
        'portfolio-title': 'Portfólio',
        'portfolio-subtitle': 'Meus projetos destacados',
        'portfolio-coming-soon': 'Projetos em desenvolvimento. Repositórios e demonstrações serão adicionados em breve.',
        
        // Organizaciones
        'organizations-title': 'Organizações',
        'organizations-subtitle': 'Participação em atividades extracurriculares',
        'organizations-desc': 'Informações sobre participação em organizações, clubes e atividades comunitárias serão adicionadas em breve.',
        
        // Contacto
        'contact-title': 'Contato',
        'contact-subtitle': 'Tem um projeto em mente? Vamos conversar!',
        'contact-info-title': 'Informações de Contato',
        'contact-email-label': 'E-mail',
        'contact-location-label': 'Localização',
        'contact-form-title': 'Envie-me uma mensagem',
        'contact-name-label': 'Nome',
        'contact-email-input': 'E-mail',
        'contact-subject': 'Assunto',
        'contact-message': 'Mensagem',
        'contact-send-btn': 'Enviar Mensagem',
        
        // Footer
        'footer-description': 'Técnico em Programação, apaixonado por criar soluções digitais inovadoras.',
        'footer-links-title': 'Links Rápidos',
        'footer-social-title': 'Siga-me',
        'footer-rights': 'Todos os direitos reservados.',
        'footer-made-with': 'Feito com',
        'footer-and': 'e',
        
        // Settings
        'settings-title': 'Configurações',
        'settings-back': 'Voltar ao Portfólio',
        'settings-themes-title': 'Temas de Cor',
        'settings-themes-desc': 'Selecione o tema de cor que mais gosta para personalizar sua experiência',
        'settings-language-title': 'Idioma',
        'settings-language-desc': 'Escolha o idioma em que deseja ver o conteúdo do portfólio',
        'settings-options-title': 'Opções Adicionais',
        'settings-animations': 'Animações',
        'settings-animations-desc': 'Ativar ou desativar animações',
        'settings-smooth-scroll': 'Rolagem Suave',
        'settings-smooth-scroll-desc': 'Ativar rolagem suave entre seções',
        'settings-restore': 'Restaurar Configurações Padrão',
        
        // Temas
        'theme-default': 'Padrão',
        'theme-dark': 'Escuro',
        'theme-light': 'Claro',
        'theme-dark-blue': 'Azul Escuro',
        'theme-blue': 'Azul',
        'theme-red': 'Vermelho',
        'theme-dark-red': 'Vermelho Escuro',
        'theme-gold': 'Dourado',
        'theme-green': 'Verde',
        'theme-dark-green': 'Verde Escuro',
        'theme-sky-blue': 'Celeste',
        'theme-purple': 'Roxo',
        'theme-dark-purple': 'Roxo Escuro',
        'language-default': 'Padrão',
        
        // Años
        'years-2024-2025': '2024 - 2025'
    }
};

// Función para obtener el idioma actual
function obtenerIdiomaActual() {
    return localStorage.getItem('idioma') || 'es';
}

// Función para cambiar el idioma
function cambiarIdioma(codigoIdioma) {
    localStorage.setItem('idioma', codigoIdioma);
    aplicarTraducciones(codigoIdioma);
    marcarIdiomaActivo(codigoIdioma);
    mostrarNotificacion('Idioma cambiado correctamente');
}

// Función para aplicar las traducciones
function aplicarTraducciones(idioma) {
    const traduccion = traducciones[idioma] || traducciones.es;
    const elementos = document.querySelectorAll('[data-translate]');
    
    elementos.forEach(elemento => {
        const clave = elemento.getAttribute('data-translate');
        
        if (traduccion[clave]) {
            if (elemento.hasAttribute('placeholder')) {
                elemento.setAttribute('placeholder', traduccion[clave]);
            } else {
                elemento.textContent = traduccion[clave];
            }
        }
    });
}

// Función para marcar el idioma activo
function marcarIdiomaActivo(idioma) {
    const tarjetasIdioma = document.querySelectorAll('.idioma-card');
    
    tarjetasIdioma.forEach(tarjeta => {
        if (tarjeta.dataset.idioma === idioma) {
            tarjeta.classList.add('active');
        } else {
            tarjeta.classList.remove('active');
        }
    });
}

// Función para mostrar notificación
function mostrarNotificacion(mensaje) {
    const notif = document.createElement('div');
    notif.className = 'notificacion';
    notif.textContent = mensaje;
    notif.style.cssText = 'position: fixed; top: 20px; right: 20px; background: linear-gradient(135deg, var(--color-primario), var(--color-secundario)); color: white; padding: 1rem 1.5rem; border-radius: 10px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2); z-index: 10000; animation: slideInFromTop 0.4s ease-out;';
    
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.style.animation = 'slideOutToTop 0.4s ease-in';
        setTimeout(() => notif.remove(), 400);
    }, 3000);
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    const idiomaActual = obtenerIdiomaActual();
    aplicarTraducciones(idiomaActual);
    marcarIdiomaActivo(idiomaActual);
});