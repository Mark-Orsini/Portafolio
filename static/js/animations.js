/* ========================================
   ANIMACIONES Y EFECTOS - PORTAFOLIO MARK ORSINI
   Autor: Mark Orsini Carrillo
   Descripción: Efectos visuales y animaciones con JS
   ======================================== */

// ============ EFECTOS HOVER USANDO 'this' ============

// Efecto hover para tarjetas usando 'this'
function efectoHoverTarjeta(elemento, esHover) {
    if (esHover) {
        elemento.style.transform = 'translateY(-10px)';
        elemento.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
    } else {
        elemento.style.transform = 'translateY(0)';
        elemento.style.boxShadow = '';
    }
}

// Efecto hover para botones usando 'this'
function efectoHoverBoton(elemento, esHover) {
    if (esHover) {
        elemento.style.transform = 'translateY(-3px)';
    } else {
        elemento.style.transform = 'translateY(0)';
    }
}

// Efecto hover para redes sociales usando 'this'
function efectoHoverRedSocial(elemento, esHover) {
    if (esHover) {
        elemento.style.transform = 'translateY(-5px) rotate(360deg)';
    } else {
        elemento.style.transform = 'translateY(0) rotate(0deg)';
    }
}

// Efecto hover para badges de habilidades usando 'this'
function efectoHoverBadge(elemento, esHover) {
    if (esHover) {
        elemento.style.transform = 'scale(1.05) rotate(2deg)';
    } else {
        elemento.style.transform = 'scale(1) rotate(0deg)';
    }
}

// Efecto hover para items de contacto usando 'this'
function efectoHoverContacto(elemento, esHover) {
    if (esHover) {
        elemento.style.transform = 'translateX(10px)';
        elemento.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
    } else {
        elemento.style.transform = 'translateX(0)';
        elemento.style.backgroundColor = '';
    }
}

// ============ ANIMACIONES DE SCROLL REVEAL ============

// Función para animar elementos al entrar en el viewport
function animarAlScroll() {
    const elementos = document.querySelectorAll('.scroll-reveal');
    
    elementos.forEach(elemento => {
        const posicionElemento = elemento.getBoundingClientRect();
        const alturaVentana = window.innerHeight;
        
        // Si el elemento está visible en el viewport
        if (posicionElemento.top < alturaVentana * 0.85) {
            elemento.classList.add('revealed');
        }
    });
}

// ============ ANIMACIÓN DE BARRAS DE PROGRESO ============

// Función para animar las barras de progreso cuando son visibles
function animarBarrasProgreso() {
    const barras = document.querySelectorAll('.barra-progreso-fill');
    
    barras.forEach(barra => {
        const posicionBarra = barra.getBoundingClientRect();
        const alturaVentana = window.innerHeight;
        
        // Si la barra está visible
        if (posicionBarra.top < alturaVentana * 0.9 && !barra.classList.contains('animada')) {
            // Obtener el ancho objetivo
            const anchoObjetivo = barra.style.width;
            
            // Resetear y animar
            barra.style.width = '0';
            setTimeout(() => {
                barra.style.width = anchoObjetivo;
                barra.classList.add('animada');
            }, 100);
        }
    });
}

// ============ EFECTO PARALLAX ============

// Variables para parallax
let posicionScrollAnterior = 0;

// Función para efecto parallax en elementos
function efectoParallax() {
    const posicionScroll = window.pageYOffset;
    const elementosParallax = document.querySelectorAll('.parallax-slow, .parallax-medium, .parallax-fast');
    
    elementosParallax.forEach(elemento => {
        const velocidad = elemento.classList.contains('parallax-slow') ? 0.5 : 
                         elemento.classList.contains('parallax-medium') ? 0.3 : 0.1;
        
        const translateY = posicionScroll * velocidad;
        elemento.style.transform = `translateY(${translateY}px)`;
    });
    
    posicionScrollAnterior = posicionScroll;
}

// ============ ANIMACIÓN DE TEXTO TYPING ============

// Función para efecto de texto escribiéndose
function efectoTyping(elementoId, texto, velocidad = 50) {
    const elemento = document.getElementById(elementoId);
    if (!elemento) return;
    
    let indice = 0;
    elemento.textContent = '';
    
    const intervalo = setInterval(() => {
        if (indice < texto.length) {
            elemento.textContent += texto.charAt(indice);
            indice++;
        } else {
            clearInterval(intervalo);
        }
    }, velocidad);
}

// ============ PARTÍCULAS FLOTANTES ============

// Función para crear partículas flotantes en el fondo
function crearParticulas(contenedorId, cantidad = 20) {
    const contenedor = document.getElementById(contenedorId);
    if (!contenedor) return;
    
    for (let i = 0; i < cantidad; i++) {
        const particula = document.createElement('div');
        particula.className = 'particle';
        
        // Posición aleatoria
        particula.style.left = Math.random() * 100 + '%';
        particula.style.top = Math.random() * 100 + '%';
        
        // Tamaño aleatorio
        const tamano = Math.random() * 4 + 2;
        particula.style.width = tamano + 'px';
        particula.style.height = tamano + 'px';
        
        // Duración de animación aleatoria
        const duracion = Math.random() * 10 + 15;
        particula.style.animationDuration = duracion + 's';
        
        // Delay aleatorio
        const delay = Math.random() * 5;
        particula.style.animationDelay = delay + 's';
        
        contenedor.appendChild(particula);
    }
}

// ============ CONTADOR ANIMADO ============

// Función para animar números (contador)
function animarContador(elementoId, valorFinal, duracion = 2000) {
    const elemento = document.getElementById(elementoId);
    if (!elemento) return;
    
    const valorInicial = 0;
    const incremento = valorFinal / (duracion / 16); // 60 FPS
    let valorActual = valorInicial;
    
    const intervalo = setInterval(() => {
        valorActual += incremento;
        
        if (valorActual >= valorFinal) {
            elemento.textContent = Math.round(valorFinal);
            clearInterval(intervalo);
        } else {
            elemento.textContent = Math.round(valorActual);
        }
    }, 16);
}

// ============ RIPPLE EFFECT ============

// Función para crear efecto ripple en botones
function crearRipple(evento, elemento) {
    const ripple = document.createElement('span');
    const rect = elemento.getBoundingClientRect();
    const tamano = Math.max(rect.width, rect.height);
    const x = evento.clientX - rect.left - tamano / 2;
    const y = evento.clientY - rect.top - tamano / 2;
    
    ripple.style.width = ripple.style.height = tamano + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple-effect');
    
    elemento.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// ============ SMOOTH SCROLL CON EASING ============

// Función para scroll suave con curva de aceleración personalizada
function scrollSuave(objetivo, duracion = 1000) {
    const inicioScroll = window.pageYOffset;
    const distancia = objetivo - inicioScroll;
    let tiempoInicio = null;
    
    function animacion(tiempoActual) {
        if (tiempoInicio === null) tiempoInicio = tiempoActual;
        const tiempoTranscurrido = tiempoActual - tiempoInicio;
        const progreso = Math.min(tiempoTranscurrido / duracion, 1);
        
        // Easing function (ease-in-out)
        const easing = progreso < 0.5 
            ? 4 * progreso * progreso * progreso 
            : 1 - Math.pow(-2 * progreso + 2, 3) / 2;
        
        window.scrollTo(0, inicioScroll + distancia * easing);
        
        if (tiempoTranscurrido < duracion) {
            requestAnimationFrame(animacion);
        }
    }
    
    requestAnimationFrame(animacion);
}

// ============ DETECTAR MODO MÓVIL ============

// Función para detectar si es dispositivo móvil
function esMobile() {
    return window.innerWidth <= 768;
}

// Función para aplicar animaciones específicas según dispositivo
function aplicarAnimacionesDispositivo() {
    const elementos = document.querySelectorAll('[data-animation-mobile], [data-animation-desktop]');
    
    elementos.forEach(elemento => {
        if (esMobile() && elemento.dataset.animationMobile) {
            elemento.classList.add(elemento.dataset.animationMobile);
        } else if (!esMobile() && elemento.dataset.animationDesktop) {
            elemento.classList.add(elemento.dataset.animationDesktop);
        }
    });
}

// ============ LAZY LOADING DE IMÁGENES ============

// Función para carga diferida de imágenes
function inicializarLazyLoading() {
    const imagenes = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    imagenes.forEach(img => imageObserver.observe(img));
}

// ============ ANIMACIÓN DE ENTRADA DE PÁGINA ============

// Función para animar la entrada de la página
function animarEntradaPagina() {
    document.body.classList.add('page-transition-enter');
    
    setTimeout(() => {
        document.body.classList.remove('page-transition-enter');
    }, 600);
}

// ============ CURSOR PERSONALIZADO ============

// Variables para cursor personalizado
let cursorPersonalizado = null;
let cursorActivo = false;

// Función para crear cursor personalizado
function crearCursorPersonalizado() {
    // Solo en dispositivos no táctiles
    if ('ontouchstart' in window) return;
    
    cursorPersonalizado = document.createElement('div');
    cursorPersonalizado.className = 'cursor-trail';
    document.body.appendChild(cursorPersonalizado);
    cursorActivo = true;
    
    document.addEventListener('mousemove', moverCursorPersonalizado);
}

// Función para mover el cursor personalizado
function moverCursorPersonalizado(evento) {
    if (!cursorActivo) return;
    
    cursorPersonalizado.style.left = evento.clientX + 'px';
    cursorPersonalizado.style.top = evento.clientY + 'px';
}

// ============ INICIALIZACIÓN ============

// Función para inicializar todas las animaciones
function inicializarAnimaciones() {
    // Animar entrada de página
    animarEntradaPagina();
    
    // Inicializar lazy loading
    if ('IntersectionObserver' in window) {
        inicializarLazyLoading();
    }
    
    // Event listeners para scroll
    window.addEventListener('scroll', () => {
        animarAlScroll();
        animarBarrasProgreso();
        efectoParallax();
    });
    
    // Event listener para resize
    window.addEventListener('resize', () => {
        aplicarAnimacionesDispositivo();
    });
    
    // Aplicar animaciones según dispositivo
    aplicarAnimacionesDispositivo();
    
    // Ejecutar una vez al cargar
    animarAlScroll();
    animarBarrasProgreso();
    
    // Crear cursor personalizado (opcional, comentado por defecto)
    // crearCursorPersonalizado();
    
    // Añadir efecto ripple a botones con clase específica
    const botonesRipple = document.querySelectorAll('.btn-ripple');
    botonesRipple.forEach(boton => {
        boton.addEventListener('click', function(e) {
            crearRipple(e, this);
        });
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', inicializarAnimaciones);

// Re-inicializar animaciones cuando se redimensiona la ventana (con debounce)
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        animarBarrasProgreso();
    }, 250);
});