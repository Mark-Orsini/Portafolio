// Variables globales para el sidebar
let sidebarAbierto = false;
let anchoVentana = window.innerWidth;

// Función para alternar el sidebar (abrir/cerrar)
function alternarSidebar() {
    if (sidebarAbierto) {
        cerrarSidebar();
    } else {
        abrirSidebar();
    }
}

// Función para abrir el sidebar
function abrirSidebar() {
    const sidebar = document.getElementById('barraLateral');
    const overlay = document.getElementById('overlayFondo');
    const botonMenu = document.getElementById('botonMenuFlotante');
    
    sidebar.classList.add('active');
    overlay.classList.add('active');
    sidebarAbierto = true;
    
    // Cambiar icono del botón a 'X'
    botonMenu.innerHTML = '<i class="fas fa-times"></i>';
    
    // Prevenir scroll del body cuando el sidebar está abierto
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el sidebar
function cerrarSidebar() {
    const sidebar = document.getElementById('barraLateral');
    const overlay = document.getElementById('overlayFondo');
    const botonMenu = document.getElementById('botonMenuFlotante');
    
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    sidebarAbierto = false;
    
    // Restaurar icono del botón a barras
    botonMenu.innerHTML = '<i class="fas fa-bars"></i>';
    
    // Restaurar scroll del body
    document.body.style.overflow = '';
}

// Función para navegar a una sección específica
function navegarSeccion(evento, seccionId, elemento) {
    evento.preventDefault();
    
    // Cerrar el sidebar
    cerrarSidebar();
    
    // Actualizar el elemento activo en la navegación
    actualizarNavActivo(elemento);
    
    // Navegar a la sección con smooth scroll
    const seccion = document.getElementById(seccionId);
    if (seccion) {
        setTimeout(() => {
            seccion.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300); // Esperar a que se cierre el sidebar
    }
}

// Función para navegar a una sección (versión sin evento)
function navegarASeccion(seccionId) {
    cerrarSidebar();
    
    const seccion = document.getElementById(seccionId);
    if (seccion) {
        setTimeout(() => {
            seccion.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
    }
}

// Función para actualizar el elemento activo en la navegación
function actualizarNavActivo(elementoActivo) {
    // Remover la clase 'active' de todos los nav-items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Añadir 'active' al elemento clickeado
    if (elementoActivo) {
        elementoActivo.classList.add('active');
    }
}

// Función para detectar la sección visible y actualizar navegación
function detectarSeccionVisible() {
    const secciones = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');
    
    let seccionActual = '';
    
    secciones.forEach(seccion => {
        const seccionTop = seccion.offsetTop;
        const seccionHeight = seccion.clientHeight;
        const scrollPos = window.scrollY + 100; // Offset de 100px
        
        if (scrollPos >= seccionTop && scrollPos < seccionTop + seccionHeight) {
            seccionActual = seccion.getAttribute('id');
        }
    });
    
    // Actualizar nav items
    navItems.forEach(item => {
        item.classList.remove('active');
        const href = item.getAttribute('href');
        if (href && href.substring(1) === seccionActual) {
            item.classList.add('active');
        }
    });
}

// Función para ajustar la posición del sidebar según el ancho de la ventana
function ajustarPosicionSidebar() {
    const nuevoAncho = window.innerWidth;
    
    // Si cambia entre móvil y desktop
    if ((anchoVentana <= 768 && nuevoAncho > 768) || (anchoVentana > 768 && nuevoAncho <= 768)) {
        // Cerrar el sidebar para evitar problemas visuales durante la transición
        if (sidebarAbierto) {
            cerrarSidebar();
        }
    }
    
    anchoVentana = nuevoAncho;
}

// Función de efecto hover para el botón de menú usando 'this'
function efectoHoverBotonMenu(elemento, esHover) {
    if (esHover) {
        elemento.style.transform = 'scale(1.1) rotate(90deg)';
        elemento.style.boxShadow = '0 12px 48px rgba(99, 102, 241, 0.4)';
    } else {
        elemento.style.transform = 'scale(1) rotate(0deg)';
        elemento.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
    }
}

// Función de efecto hover para items de navegación usando 'this'
function efectoHoverNavItem(elemento, esHover) {
    if (esHover && !elemento.classList.contains('active')) {
        elemento.style.transform = 'translateX(5px)'; // Ajustado para izquierda
        elemento.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    } else if (!elemento.classList.contains('active')) {
        elemento.style.transform = 'translateX(0)';
        elemento.style.backgroundColor = '';
    }
}

// Función para manejar el scroll del sidebar en móvil
function manejarScrollSidebar() {
    const sidebar = document.getElementById('barraLateral');
    
    // Prevenir el scroll del body cuando se está scrolleando el sidebar
    sidebar.addEventListener('touchmove', function(e) {
        e.stopPropagation();
    }, { passive: false });
}

// Función para cerrar sidebar al presionar ESC
function cerrarSidebarConESC(evento) {
    if (evento.key === 'Escape' && sidebarAbierto) {
        cerrarSidebar();
    }
}

// Función para manejar gestos táctiles (swipe)
let touchStartX = 0;
let touchEndX = 0;

function manejarTouchStart(evento) {
    touchStartX = evento.changedTouches[0].screenX;
}

function manejarTouchEnd(evento) {
    touchEndX = evento.changedTouches[0].screenX;
    manejarGesto();
}

function manejarGesto() {
    const diferencia = touchEndX - touchStartX;
    const umbral = 50; // Mínimo de píxeles para considerar un swipe
    
    // Swipe derecha para cerrar (ya que es izquierda)
    if (diferencia > umbral && sidebarAbierto) {
        cerrarSidebar();
    }
    // Swipe izquierda para abrir (desde el borde izquierdo)
    else if (diferencia < -umbral && !sidebarAbierto && touchStartX < 50) {
        abrirSidebar();
    }
}

// Función para inicializar el sidebar
function inicializarSidebar() {
    const overlay = document.getElementById('overlayFondo');
    const sidebar = document.getElementById('barraLateral');
    
    // Event listener para el overlay
    if (overlay) {
        overlay.addEventListener('click', cerrarSidebar);
    }
    
    // Event listener para detectar sección visible al hacer scroll
    window.addEventListener('scroll', detectarSeccionVisible);
    
    // Event listener para ajustar posición del sidebar al redimensionar
    window.addEventListener('resize', ajustarPosicionSidebar);
    
    // Event listener para cerrar con ESC
    document.addEventListener('keydown', cerrarSidebarConESC);
    
    // Event listeners para gestos táctiles
    document.addEventListener('touchstart', manejarTouchStart, { passive: true });
    document.addEventListener('touchend', manejarTouchEnd, { passive: true });
    
    // Manejar scroll del sidebar
    manejarScrollSidebar();
    
    // Detectar sección visible al cargar
    detectarSeccionVisible();
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', inicializarSidebar);