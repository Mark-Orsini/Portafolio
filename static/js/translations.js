/* ========================================
   SISTEMA DE TRADUCCIONES - PORTAFOLIO MARK ORSINI
   Autor: Mark Orsini Carrillo
   Descripción: Manejo de múltiples idiomas
   ======================================== */

// Objeto con todas las traducciones
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
        
        // Home/Hero
        'home-greeting': '¡Hola! Soy',
        'home-title': 'Técnico Profesional en Programación',
        'home-subtitle': 'Creando soluciones digitales innovadoras y funcionales',
        'home-cta-portfolio': 'Ver Portafolio',
        'home-cta-contact': 'Contactar',
        
        // Sobre Mí
        'about-title': 'Sobre Mí',
        'about-intro': 'Soy Mark Orsini Carrillo, estudiante de Técnico Profesional en Programación en el Liceo Comercial Vate Vicente Huidobro, Santiago, Chile. Mi pasión por la tecnología y el desarrollo de software me impulsa cada día a aprender más y a enfrentar nuevos desafíos.',
        'about-passion': 'Me considero una persona con una gran disposición para el aprendizaje continuo. En el mundo de la programación, donde las tecnologías evolucionan constantemente, me esfuerzo por mantenerme actualizado con los lenguajes y herramientas que domino. Esta dedicación me ha permitido desarrollar habilidades sólidas en desarrollo web, backend y bases de datos, áreas en las que me siento cada vez más competente y motivado.',
        'about-personality': 'Más allá de mis capacidades técnicas, valoro profundamente el trabajo en equipo y las relaciones interpersonales. Soy una persona positiva, amable y sociable, cualidades que me permiten colaborar efectivamente con otros y crear un ambiente de trabajo productivo y agradable. Me gusta tratar bien a los demás y creo firmemente que el respeto mutuo y la comunicación abierta son fundamentales para el éxito de cualquier proyecto.',
        'about-future': 'Mi objetivo es seguir creciendo como profesional en el ámbito tecnológico, contribuir con soluciones innovadoras y formar parte de equipos donde pueda aportar mis conocimientos y también aprender de otros. Estoy emocionado por las oportunidades que el futuro me depara en esta apasionante industria.',
        
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
        'education-desc': 'Formación técnica profesional de nivel medio en programación, abarcando desarrollo web, bases de datos, programación orientada a objetos y metodologías ágiles.',
        
        // Certificaciones
        'certifications-title': 'Certificaciones',
        'certifications-subtitle': 'Actualmente en proceso de obtener certificaciones profesionales',
        'certifications-coming-soon': 'Próximamente se agregarán certificaciones obtenidas',
        
        // Experiencia
        'experience-title': 'Experiencia',
        'experience-subtitle': 'Mi trayectoria en desarrollo de proyectos',
        'experience-student': 'Actualmente en formación académica desarrollando múltiples proyectos educativos. Próximamente se agregarán experiencias profesionales y prácticas.',
        
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
        
        // Idiomas
        'language-default': 'Predeterminado'
    },
    
    en: {
        // Navigation
        'menu': 'Menu',
        'nav-home': 'Home',
        'nav-about': 'About',
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
        
        // Home/Hero
        'home-greeting': 'Hello! I am',
        'home-title': 'Professional Technician in Programming',
        'home-subtitle': 'Creating innovative and functional digital solutions',
        'home-cta-portfolio': 'View Portfolio',
        'home-cta-contact': 'Contact',
        
        // About
        'about-title': 'About Me',
        'about-intro': 'I am Mark Orsini Carrillo, a student of Professional Programming Technician at Liceo Comercial Vate Vicente Huidobro, Santiago, Chile. My passion for technology and software development drives me every day to learn more and face new challenges.',
        'about-passion': 'I consider myself a person with a great willingness for continuous learning. In the world of programming, where technologies constantly evolve, I strive to stay updated with the languages and tools I master. This dedication has allowed me to develop solid skills in web development, backend, and databases, areas where I feel increasingly competent and motivated.',
        'about-personality': 'Beyond my technical capabilities, I deeply value teamwork and interpersonal relationships. I am a positive, kind, and sociable person, qualities that allow me to collaborate effectively with others and create a productive and pleasant work environment. I like to treat others well and firmly believe that mutual respect and open communication are fundamental to the success of any project.',
        'about-future': 'My goal is to continue growing as a professional in the technological field, contribute with innovative solutions, and be part of teams where I can contribute my knowledge and also learn from others. I am excited about the opportunities that the future holds for me in this exciting industry.',
        
        // Services
        'services-title': 'Services',
        'services-subtitle': 'Areas where I can add value',
        'service-web-title': 'Web Development',
        'service-web-desc': 'Creating modern, responsive, and functional websites using HTML, CSS, JavaScript, and modern frameworks.',
        'service-backend-title': 'Backend Development',
        'service-backend-desc': 'Development of APIs and server logic with Python, .NET, and other robust programming languages.',
        'service-db-title': 'Databases',
        'service-db-desc': 'Design, implementation, and management of SQL databases for efficient information storage.',
        
        // Clients
        'clients-title': 'Educational Experiences',
        'clients-subtitle': 'Projects developed during my training',
        'client-school': 'Liceo Comercial Vate Vicente Huidobro',
        'client-school-desc': 'Academic and collaborative projects',
        'client-personal': 'Personal Projects',
        'client-personal-desc': 'Independent application development',
        
        // Skills
        'skills-title': 'Skills',
        'skills-technical': 'Technical Skills',
        'skills-soft': 'Soft Skills',
        'skill-teamwork': 'Teamwork',
        'skill-leadership': 'Leadership',
        'skill-social': 'Sociable',
        'skill-friendly': 'Friendly',
        'skill-attentive': 'Attentive',
        'skill-flexible': 'Flexible',
        
        // Education
        'education-title': 'Education',
        'education-tp-title': 'Professional Technician in Programming',
        'education-school': 'Liceo Comercial Vate Vicente Huidobro',
        'education-desc': 'Mid-level professional technical training in programming, covering web development, databases, object-oriented programming, and agile methodologies.',
        
        // Certifications
        'certifications-title': 'Certifications',
        'certifications-subtitle': 'Currently in the process of obtaining professional certifications',
        'certifications-coming-soon': 'Certifications obtained will be added soon',
        
        // Experience
        'experience-title': 'Experience',
        'experience-subtitle': 'My journey in project development',
        'experience-student': 'Currently in academic training developing multiple educational projects. Professional experiences and internships will be added soon.',
        
        // References
        'references-title': 'References',
        'references-subtitle': 'References available upon request',
        'references-available': 'References from teachers and mentors available through direct contact.',
        
        // Portfolio
        'portfolio-title': 'Portfolio',
        'portfolio-subtitle': 'My featured projects',
        'portfolio-coming-soon': 'Projects in development. Repositories and demonstrations will be added soon.',
        
        // Organizations
        'organizations-title': 'Organizations',
        'organizations-subtitle': 'Participation in extracurricular activities',
        'organizations-desc': 'Information about participation in organizations, clubs, and community activities will be added soon.',
        
        // Contact
        'contact-title': 'Contact',
        'contact-subtitle': 'Have a project in mind? Let\'s talk!',
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
        'footer-description': 'Professional Technician in Programming, passionate about creating innovative digital solutions.',
        'footer-links-title': 'Quick Links',
        'footer-social-title': 'Follow Me',
        'footer-rights': 'All rights reserved.',
        'footer-made-with': 'Made with',
        'footer-and': 'and',
        
        // Settings
        'settings-title': 'Settings',
        'settings-back': 'Back to Portfolio',
        'settings-themes-title': 'Color Themes',
        'settings-themes-desc': 'Select the color theme you like best to customize your experience',
        'settings-language-title': 'Language',
        'settings-language-desc': 'Choose the language in which you want to view the portfolio content',
        'settings-options-title': 'Additional Options',
        'settings-animations': 'Animations',
        'settings-animations-desc': 'Enable or disable animations',
        'settings-smooth-scroll': 'Smooth Scrolling',
        'settings-smooth-scroll-desc': 'Enable smooth scroll between sections',
        'settings-restore': 'Restore Default Settings',
        
        // Themes
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
        
        // Languages
        'language-default': 'Default'
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
        'home-title': 'Профессиональный техник по программированию',
        'home-subtitle': 'Создаю инновационные и функциональные цифровые решения',
        'home-cta-portfolio': 'Посмотреть портфолио',
        'home-cta-contact': 'Связаться',
        
        // About
        'about-title': 'Обо мне',
        'skills-title': 'Навыки',
        'skills-technical': 'Технические навыки',
        'skills-soft': 'Личные качества',
        'contact-title': 'Контакты',
        'contact-subtitle': 'Есть проект? Давайте обсудим!',
        
        // Settings
        'settings-title': 'Настройки',
        'settings-back': 'Вернуться к портфолио',
        'theme-dark': 'Тёмная',
        'theme-light': 'Светлая',
        'language-default': 'По умолчанию'
    },
    
    zh: {
        // 导航
        'menu': '菜单',
        'nav-home': '首页',
        'nav-about': '关于我',
        'nav-services': '服务',
        'nav-clients': '客户',
        'nav-skills': '技能',
        'nav-education': '教育',
        'nav-certifications': '证书',
        'nav-experience': '经验',
        'nav-references': '推荐',
        'nav-portfolio': '作品集',
        'nav-organizations': '组织',
        'nav-contact': '联系',
        'nav-settings': '设置',
        
        // 主页
        'home-greeting': '你好！我是',
        'home-title': '专业编程技术员',
        'home-subtitle': '创造创新和功能性的数字解决方案',
        'home-cta-portfolio': '查看作品集',
        'home-cta-contact': '联系我',
        
        // 关于
        'about-title': '关于我',
        'skills-title': '技能',
        'skills-technical': '技术技能',
        'skills-soft': '软技能',
        'contact-title': '联系',
        'contact-subtitle': '有项目想法？让我们聊聊！',
        
        // 设置
        'settings-title': '设置',
        'settings-back': '返回作品集',
        'theme-dark': '深色',
        'theme-light': '浅色',
        'language-default': '默认'
    },
    
    ja: {
        // ナビゲーション
        'menu': 'メニュー',
        'nav-home': 'ホーム',
        'nav-about': '私について',
        'nav-services': 'サービス',
        'nav-clients': 'クライアント',
        'nav-skills': 'スキル',
        'nav-education': '教育',
        'nav-certifications': '認定',
        'nav-experience': '経験',
        'nav-references': '推薦',
        'nav-portfolio': 'ポートフォリオ',
        'nav-organizations': '組織',
        'nav-contact': '連絡先',
        'nav-settings': '設定',
        
        // ホーム
        'home-greeting': 'こんにちは！私は',
        'home-title': 'プログラミングの専門技術者',
        'home-subtitle': '革新的で機能的なデジタルソリューションを創造',
        'home-cta-portfolio': 'ポートフォリオを見る',
        'home-cta-contact': '連絡する',
        
        // について
        'about-title': '私について',
        'skills-title': 'スキル',
        'skills-technical': '技術スキル',
        'skills-soft': 'ソフトスキル',
        'contact-title': '連絡先',
        'contact-subtitle': 'プロジェクトのアイデアがありますか？話しましょう！',
        
        // 設定
        'settings-title': '設定',
        'settings-back': 'ポートフォリオに戻る',
        'theme-dark': 'ダーク',
        'theme-light': 'ライト',
        'language-default': 'デフォルト'
    },
    
    ko: {
        // 탐색
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
        
        // 홈
        'home-greeting': '안녕하세요! 저는',
        'home-title': '프로그래밍 전문 기술자',
        'home-subtitle': '혁신적이고 기능적인 디지털 솔루션 창조',
        'home-cta-portfolio': '포트폴리오 보기',
        'home-cta-contact': '연락하기',
        
        // 소개
        'about-title': '소개',
        'skills-title': '기술',
        'skills-technical': '기술 스킬',
        'skills-soft': '소프트 스킬',
        'contact-title': '연락처',
        'contact-subtitle': '프로젝트 아이디어가 있으신가요? 이야기해요!',
        
        // 설정
        'settings-title': '설정',
        'settings-back': '포트폴리오로 돌아가기',
        'theme-dark': '다크',
        'theme-light': '라이트',
        'language-default': '기본'
    },
    
    pt: {
        // Navegação
        'menu': 'Menu',
        'nav-home': 'Início',
        'nav-about': 'Sobre',
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
        'home-title': 'Técnico Profissional em Programação',
        'home-subtitle': 'Criando soluções digitais inovadoras e funcionais',
        'home-cta-portfolio': 'Ver Portfólio',
        'home-cta-contact': 'Contatar',
        
        // Sobre
        'about-title': 'Sobre Mim',
        'skills-title': 'Habilidades',
        'skills-technical': 'Habilidades Técnicas',
        'skills-soft': 'Habilidades Interpessoais',
        'contact-title': 'Contato',
        'contact-subtitle': 'Tem um projeto em mente? Vamos conversar!',
        
        // Configurações
        'settings-title': 'Configurações',
        'settings-back': 'Voltar ao Portfólio',
        'theme-dark': 'Escuro',
        'theme-light': 'Claro',
        'language-default': 'Padrão'
    }
};

// Función para obtener el idioma actual
function obtenerIdiomaActual() {
    return localStorage.getItem('idioma') || 'es';
}

// Función para cambiar el idioma
function cambiarIdioma(codigoIdioma) {
    // Guardar en localStorage
    localStorage.setItem('idioma', codigoIdioma);
    
    // Aplicar traducciones
    aplicarTraducciones(codigoIdioma);
    
    // Marcar idioma activo en la interfaz
    marcarIdiomaActivo(codigoIdioma);
    
    // Mostrar notificación de éxito
    mostrarNotificacion('Idioma cambiado correctamente');
}

// Función para aplicar las traducciones a todos los elementos
function aplicarTraducciones(idioma) {
    const traduccion = traducciones[idioma] || traducciones.es;
    
    // Buscar todos los elementos con atributo data-translate
    const elementos = document.querySelectorAll('[data-translate]');
    
    elementos.forEach(elemento => {
        const clave = elemento.getAttribute('data-translate');
        
        if (traduccion[clave]) {
            // Verificar si es un placeholder
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
    // Crear elemento de notificación
    const notif = document.createElement('div');
    notif.className = 'notificacion';
    notif.textContent = mensaje;
    notif.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, var(--color-primario), var(--color-secundario));
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInFromTop 0.4s ease-out;
    `;
    
    document.body.appendChild(notif);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notif.style.animation = 'slideOutToTop 0.4s ease-in';
        setTimeout(() => notif.remove(), 400);
    }, 3000);
}

// Inicializar el sistema de traducciones cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    const idiomaActual = obtenerIdiomaActual();
    aplicarTraducciones(idiomaActual);
    marcarIdiomaActivo(idiomaActual);
});