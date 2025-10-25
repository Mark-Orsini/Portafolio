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
        'organizations-desc': 'Información sobre participación en organizaciones se agregará próximamente.',
        
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
        'footer-description': 'Técnico Profesional en Programación.',
        'footer-links-title': 'Enlaces Rápidos',
        'footer-social-title': 'Sígueme',
        'footer-rights': 'Todos los derechos reservados.',
        'footer-made-with': 'Hecho con',
        'footer-and': 'y',
        
        // Settings
        'settings-title': 'Configuración',
        'settings-back': 'Volver al Portafolio',
        'settings-themes-title': 'Temas de Color',
        'settings-themes-desc': 'Selecciona el tema de color que más te guste',
        'settings-language-title': 'Idioma',
        'settings-language-desc': 'Elige el idioma en el que deseas ver el contenido',
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
        'language-default': 'Predeterminado'
    },
    
    en: {
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
        'home-greeting': 'Hello! I am',
        'home-title': 'Professional Programming Technician',
        'home-subtitle': 'Creating innovative digital solutions',
        'home-cta-portfolio': 'View Portfolio',
        'home-cta-contact': 'Contact',
        'about-title': 'About Me',
        'about-intro': 'I am Mark Orsini Carrillo, a Programming student at Liceo Comercial Vate Vicente Huidobro, Santiago, Chile.',
        'about-passion': 'I consider myself a person with great willingness for continuous learning.',
        'about-personality': 'I am a positive, kind, and sociable person.',
        'about-future': 'My goal is to continue growing as a professional in technology.',
        'services-title': 'Services',
        'services-subtitle': 'Areas where I can add value',
        'service-web-title': 'Web Development',
        'service-web-desc': 'Creating modern, responsive websites.',
        'service-backend-title': 'Backend Development',
        'service-backend-desc': 'Development of APIs and server logic.',
        'service-db-title': 'Databases',
        'service-db-desc': 'Design and management of SQL databases.',
        'clients-title': 'Educational Experiences',
        'clients-subtitle': 'Projects during my training',
        'client-school': 'Liceo Comercial Vate Vicente Huidobro',
        'client-school-desc': 'Academic projects',
        'client-personal': 'Personal Projects',
        'client-personal-desc': 'Independent development',
        'skills-title': 'Skills',
        'skills-technical': 'Technical Skills',
        'skills-soft': 'Soft Skills',
        'skill-teamwork': 'Teamwork',
        'skill-leadership': 'Leadership',
        'skill-social': 'Sociable',
        'skill-friendly': 'Friendly',
        'skill-attentive': 'Attentive',
        'skill-flexible': 'Flexible',
        'education-title': 'Education',
        'education-tp-title': 'Professional Programming Technician',
        'education-school': 'Liceo Comercial Vate Vicente Huidobro',
        'education-desc': 'Professional technical training in programming.',
        'certifications-title': 'Certifications',
        'certifications-subtitle': 'Currently obtaining certifications',
        'certifications-coming-soon': 'Certifications will be added soon',
        'experience-title': 'Experience',
        'experience-subtitle': 'My development journey',
        'experience-student': 'Currently in academic training.',
        'references-title': 'References',
        'references-subtitle': 'Available upon request',
        'references-available': 'References available through contact.',
        'portfolio-title': 'Portfolio',
        'portfolio-subtitle': 'My featured projects',
        'portfolio-coming-soon': 'Projects coming soon.',
        'organizations-title': 'Organizations',
        'organizations-subtitle': 'Extracurricular activities',
        'organizations-desc': 'Information will be added soon.',
        'contact-title': 'Contact',
        'contact-subtitle': 'Have a project? Lets talk!',
        'contact-info-title': 'Contact Information',
        'contact-email-label': 'Email',
        'contact-location-label': 'Location',
        'contact-form-title': 'Send me a message',
        'contact-name-label': 'Name',
        'contact-email-input': 'Email',
        'contact-subject': 'Subject',
        'contact-message': 'Message',
        'contact-send-btn': 'Send Message',
        'footer-description': 'Professional Programming Technician.',
        'footer-links-title': 'Quick Links',
        'footer-social-title': 'Follow Me',
        'footer-rights': 'All rights reserved.',
        'footer-made-with': 'Made with',
        'footer-and': 'and',
        'settings-title': 'Settings',
        'settings-back': 'Back to Portfolio',
        'settings-themes-title': 'Color Themes',
        'settings-themes-desc': 'Select your favorite theme',
        'settings-language-title': 'Language',
        'settings-language-desc': 'Choose your language',
        'settings-options-title': 'Additional Options',
        'settings-animations': 'Animations',
        'settings-animations-desc': 'Enable or disable animations',
        'settings-smooth-scroll': 'Smooth Scrolling',
        'settings-smooth-scroll-desc': 'Enable smooth scroll',
        'settings-restore': 'Restore Defaults',
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
        'language-default': 'Default'
    },
    
    ru: {
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
        'home-greeting': 'Привет! Я',
        'home-title': 'Техник по программированию',
        'home-subtitle': 'Создаю цифровые решения',
        'home-cta-portfolio': 'Портфолио',
        'home-cta-contact': 'Связаться',
        'about-title': 'Обо мне',
        'services-title': 'Услуги',
        'clients-title': 'Клиенты',
        'skills-title': 'Навыки',
        'education-title': 'Образование',
        'certifications-title': 'Сертификаты',
        'experience-title': 'Опыт',
        'references-title': 'Рекомендации',
        'portfolio-title': 'Портфолио',
        'organizations-title': 'Организации',
        'contact-title': 'Контакты',
        'settings-title': 'Настройки',
        'theme-dark': 'Темная',
        'theme-light': 'Светлая'
    },
    
    zh: {
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
        'home-greeting': '你好！我是',
        'home-title': '专业编程技术员',
        'home-subtitle': '创造数字解决方案',
        'home-cta-portfolio': '查看作品集',
        'home-cta-contact': '联系我',
        'about-title': '关于我',
        'services-title': '服务',
        'skills-title': '技能',
        'contact-title': '联系',
        'settings-title': '设置',
        'theme-dark': '深色',
        'theme-light': '浅色'
    },
    
    ja: {
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
        'home-greeting': 'こんにちは！私は',
        'home-title': 'プログラミング技術者',
        'home-subtitle': 'デジタルソリューション',
        'home-cta-portfolio': 'ポートフォリオ',
        'home-cta-contact': '連絡',
        'about-title': '私について',
        'services-title': 'サービス',
        'skills-title': 'スキル',
        'contact-title': '連絡先',
        'settings-title': '設定',
        'theme-dark': 'ダーク',
        'theme-light': 'ライト'
    },
    
    ko: {
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
        'home-greeting': '안녕하세요! 저는',
        'home-title': '프로그래밍 기술자',
        'home-subtitle': '디지털 솔루션 창조',
        'home-cta-portfolio': '포트폴리오 보기',
        'home-cta-contact': '연락하기',
        'about-title': '소개',
        'services-title': '서비스',
        'skills-title': '기술',
        'contact-title': '연락처',
        'settings-title': '설정',
        'theme-dark': '다크',
        'theme-light': '라이트'
    },
    
    pt: {
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
        'home-greeting': 'Olá! Eu sou',
        'home-title': 'Técnico em Programação',
        'home-subtitle': 'Criando soluções digitais',
        'home-cta-portfolio': 'Ver Portfólio',
        'home-cta-contact': 'Contatar',
        'about-title': 'Sobre Mim',
        'services-title': 'Serviços',
        'skills-title': 'Habilidades',
        'contact-title': 'Contato',
        'settings-title': 'Configurações',
        'theme-dark': 'Escuro',
        'theme-light': 'Claro'
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