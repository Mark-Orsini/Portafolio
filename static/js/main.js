/* ========================================
    FUNCIONALIDADES PRINCIPALES - PORTAFOLIO MARK ORSINI
    Autor: Mark Orsini Carrillo
    Descripción: Funciones principales del portafolio
   ======================================== */

// ============ VALIDACIÓN DE FORMULARIOS ============

// Función para validar campo de formulario usando 'this'
function validarCampo(elemento) {
    const valor = elemento.value.trim();
    const tipo = elemento.type;
    
    // Validar según el tipo de campo
    if (tipo === 'email') {
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
        if (!emailValido && valor !== '') {
            elemento.style.borderColor = '#ef4444';
            return false;
        } else {
            elemento.style.borderColor = '#10b981';
            return true;
        }
    } else if (elemento.required && valor === '') {
        elemento.style.borderColor = '#ef4444';
        return false;
    } else if (valor !== '') {
        elemento.style.borderColor = '#10b981';
        return true;
    }
    
    elemento.style.borderColor = '';
    return true;
}

// Función para enviar formulario de contacto
function enviarFormulario(evento) {
    evento.preventDefault();
    
    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const asunto = document.getElementById('asunto').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    
    // Validar que todos los campos estén llenos
    if (!nombre || !email || !asunto || !mensaje) {
        mostrarAlerta('Por favor, completa todos los campos', 'error');
        return;
    }
    
    // Validar email
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
        mostrarAlerta('Por favor, ingresa un email válido', 'error');
        return;
    }
    
    // Crear enlace mailto
    const mailtoLink = `mailto:markorsini11@gmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\n\nMensaje:\n${mensaje}`)}`;
    
    // Abrir cliente de correo
    window.location.href = mailtoLink;
    
    // Mostrar mensaje de éxito
    mostrarAlerta('Redirigiendo a tu cliente de correo...', 'success');
    
    // Limpiar formulario después de 2 segundos
    setTimeout(() => {
        document.getElementById('formularioContacto').reset();
        // Resetear colores de borde
        document.querySelectorAll('.form-control').forEach(input => {
            input.style.borderColor = '';
        });
    }, 2000);
}

// ============ SISTEMA DE ALERTAS/NOTIFICACIONES ============

// Función para mostrar alertas
function mostrarAlerta(mensaje, tipo = 'info') {
    // Colores según tipo
    const colores = {
        'success': 'linear-gradient(135deg, #10b981, #14b8a6)',
        'error': 'linear-gradient(135deg, #ef4444, #f97316)',
        'warning': 'linear-gradient(135deg, #f59e0b, #eab308)',
        'info': 'linear-gradient(135deg, #3b82f6, #06b6d4)'
    };
    
    // Iconos según tipo
    const iconos = {
        'success': '✓',
        'error': '✕',
        'warning': '⚠',
        'info': 'ℹ'
    };
    
    const alerta = document.createElement('div');
    alerta.className = 'alerta-personalizada';
    alerta.innerHTML = `
        <span class="alerta-icono">${iconos[tipo]}</span>
        <span class="alerta-mensaje">${mensaje}</span>
    `;
    alerta.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colores[tipo]};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-weight: 600;
        animation: slideInFromTop 0.4s ease-out;
        max-width: 400px;
    `;
    
    document.body.appendChild(alerta);
    
    // Remover después de 4 segundos
    setTimeout(() => {
        alerta.style.animation = 'slideOutToTop 0.4s ease-in';
        setTimeout(() => alerta.remove(), 400);
    }, 4000);
}

// ============ DETECCIÓN DE SCROLL Y EFECTOS ============

// Variable para controlar el último scroll
let ultimoScroll = 0;

// Función para detectar dirección del scroll
function detectarDireccionScroll() {
    const scrollActual = window.pageYOffset;
    const botonMenu = document.getElementById('botonMenuFlotante');
    
    if (!botonMenu) return;
    
    // Si scrollea hacia abajo
    if (scrollActual > ultimoScroll && scrollActual > 100) {
        botonMenu.style.transform = 'translateY(-100px)';
    } else {
        botonMenu.style.transform = 'translateY(0)';
    }
    
    ultimoScroll = scrollActual;
}

// ============ COPIAR AL PORTAPAPELES ============

// Función para copiar texto al portapapeles
function copiarAlPortapapeles(texto) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(texto).then(() => {
            mostrarAlerta('Copiado al portapapeles', 'success');
        }).catch(() => {
            mostrarAlerta('No se pudo copiar', 'error');
        });
    } else {
        // Fallback para navegadores antiguos
        const textarea = document.createElement('textarea');
        textarea.value = texto;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        
        try {
            document.execCommand('copy');
            mostrarAlerta('Copiado al portapapeles', 'success');
        } catch (err) {
            mostrarAlerta('No se pudo copiar', 'error');
        }
        
        document.body.removeChild(textarea);
    }
}

// ============ COMPARTIR EN REDES SOCIALES ============

// Función para compartir en redes sociales
function compartirEnRedes(red) {
    const url = window.location.href;
    const titulo = 'Portafolio de Mark Orsini Carrillo';
    const texto = 'Mira mi portafolio profesional de programación';
    
    const urls = {
        'facebook': `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        'twitter': `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(texto)}`,
        'linkedin': `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        'whatsapp': `https://wa.me/?text=${encodeURIComponent(texto + ' ' + url)}`,
        'telegram': `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(texto)}`
    };
    
    if (urls[red]) {
        window.open(urls[red], '_blank', 'width=600,height=400');
    }
}

// ============ MODO DE LECTURA / IMPRESIÓN ============

// Función para activar modo de impresión
function activarModoImpresion() {
    window.print();
}

// ============ ESTADÍSTICAS DE VISITA ============

// Función para registrar estadísticas básicas (localStorage)
function registrarEstadistica() {
    const visitas = parseInt(localStorage.getItem('visitas') || '0');
    localStorage.setItem('visitas', (visitas + 1).toString());
    
    const primeraVisita = localStorage.getItem('primeraVisita');
    if (!primeraVisita) {
        localStorage.setItem('primeraVisita', new Date().toISOString());
    }
    
    localStorage.setItem('ultimaVisita', new Date().toISOString());
}

// Función para obtener estadísticas
function obtenerEstadisticas() {
    return {
        visitas: parseInt(localStorage.getItem('visitas') || '0'),
        primeraVisita: localStorage.getItem('primeraVisita'),
        ultimaVisita: localStorage.getItem('ultimaVisita')
    };
}

// ============ MODO OSCURO / CLARO RÁPIDO ============

// Función para alternar rápidamente entre oscuro y claro
function alternarModoRapido() {
    const temaActual = obtenerTemaActual();
    const temasOscuros = ['dark', 'dark-blue', 'dark-red', 'dark-green', 'dark-purple'];
    
    if (temasOscuros.includes(temaActual)) {
        cambiarTema('light');
    } else {
        cambiarTema('dark');
    }
}

// ============ BÚSQUEDA EN LA PÁGINA ============

// Función para buscar texto en la página
function buscarEnPagina(textoBusqueda) {
    // Remover resaltados anteriores
    const resaltadosAnteriores = document.querySelectorAll('.resaltado-busqueda');
    resaltadosAnteriores.forEach(el => {
        const parent = el.parentNode;
        parent.replaceChild(document.createTextNode(el.textContent), el);
        parent.normalize();
    });
    
    if (!textoBusqueda || textoBusqueda.length < 3) return;
    
    // Buscar y resaltar
    const contenido = document.querySelector('.contenido-principal');
    if (!contenido) return;
    
    const regex = new RegExp(textoBusqueda, 'gi');
    const walker = document.createTreeWalker(
        contenido,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    
    const nodosTexto = [];
    while (walker.nextNode()) {
        if (walker.currentNode.textContent.match(regex)) {
            nodosTexto.push(walker.currentNode);
        }
    }
    
    nodosTexto.forEach(nodo => {
        const span = document.createElement('span');
        span.innerHTML = nodo.textContent.replace(regex, match => 
            `<mark class="resaltado-busqueda" style="background: var(--color-primario); color: white; padding: 2px 4px; border-radius: 3px;">${match}</mark>`
        );
        nodo.parentNode.replaceChild(span, nodo);
    });
    
    // Scroll al primer resultado
    const primerResultado = document.querySelector('.resaltado-busqueda');
    if (primerResultado) {
        primerResultado.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// ============ TIEMPO EN LA PÁGINA ============

// Variables para tracking de tiempo
let tiempoInicio = Date.now();
let tiempoActivo = 0;
let intervaloTiempo = null;

// Función para iniciar tracking de tiempo
function iniciarTrackingTiempo() {
    intervaloTiempo = setInterval(() => {
        tiempoActivo = Math.floor((Date.now() - tiempoInicio) / 1000);
    }, 1000);
    
    // Guardar tiempo al salir
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('tiempoTotal', 
            parseInt(localStorage.getItem('tiempoTotal') || '0') + tiempoActivo
        );
    });
}

// ============ DETECCIÓN DE DISPOSITIVO ============

// Función para obtener información del dispositivo
function obtenerInfoDispositivo() {
    return {
        esMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        esTablet: /iPad|Android/i.test(navigator.userAgent) && !/Mobile/i.test(navigator.userAgent),
        esDesktop: !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        navegador: navigator.userAgent,
        idioma: navigator.language || navigator.userLanguage,
        resolucion: `${window.screen.width}x${window.screen.height}`,
        colorDepth: window.screen.colorDepth
    };
}

// ============ SCROLL TO TOP ============

// Función para volver arriba suavemente
function volverArriba() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Mostrar botón "volver arriba" cuando se hace scroll
function mostrarBotonVolverArriba() {
    let botonVolverArriba = document.getElementById('botonVolverArriba');
    
    // Crear botón si no existe
    if (!botonVolverArriba) {
        botonVolverArriba = document.createElement('button');
        botonVolverArriba.id = 'botonVolverArriba';
        botonVolverArriba.innerHTML = '<i class="fas fa-arrow-up"></i>';
        botonVolverArriba.onclick = volverArriba;
        botonVolverArriba.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--color-primario), var(--color-secundario));
            border: none;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        `;
        document.body.appendChild(botonVolverArriba);
    }
    
    // Mostrar/ocultar según scroll
    if (window.pageYOffset > 300) {
        botonVolverArriba.style.opacity = '1';
        botonVolverArriba.style.visibility = 'visible';
    } else {
        botonVolverArriba.style.opacity = '0';
        botonVolverArriba.style.visibility = 'hidden';
    }
}

// ============ MODO OFFLINE ============

// Función para detectar estado de conexión
function verificarConexion() {
    if (!navigator.onLine) {
        mostrarAlerta('Sin conexión a Internet', 'warning');
    }
}

// ============ ACCESIBILIDAD ============

// Función para ajustar tamaño de fuente
function ajustarTamanoFuente(accion) {
    const root = document.documentElement;
    const tamanoActual = parseFloat(getComputedStyle(root).fontSize);
    
    if (accion === 'aumentar' && tamanoActual < 20) {
        root.style.fontSize = (tamanoActual + 1) + 'px';
        localStorage.setItem('tamanoFuente', (tamanoActual + 1).toString());
    } else if (accion === 'disminuir' && tamanoActual > 14) {
        root.style.fontSize = (tamanoActual - 1) + 'px';
        localStorage.setItem('tamanoFuente', (tamanoActual - 1).toString());
    } else if (accion === 'resetear') {
        root.style.fontSize = '16px';
        localStorage.removeItem('tamanoFuente');
    }
}

// Función para aplicar tamaño de fuente guardado
function aplicarTamanoFuenteGuardado() {
    const tamanoGuardado = localStorage.getItem('tamanoFuente');
    if (tamanoGuardado) {
        document.documentElement.style.fontSize = tamanoGuardado + 'px';
    }
}

// ============ PRELOAD DE IMÁGENES ============

// Función para precargar imágenes importantes
function precargarImagenes(urls) {
    urls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// ============ ANÁLISIS DE PERFORMANCE ============

// Función para medir tiempos de carga
function analizarPerformance() {
    if (window.performance && window.performance.timing) {
        const timing = window.performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        const domReadyTime = timing.domContentLoadedEventEnd - timing.navigationStart;
        
        console.log('Tiempo de carga total:', loadTime + 'ms');
        console.log('Tiempo DOM ready:', domReadyTime + 'ms');
        
        return {
            loadTime,
            domReadyTime
        };
    }
    return null;
}

// ============ INICIALIZACIÓN GENERAL ============

// Función para inicializar todas las funcionalidades
function inicializarFuncionalidades() {
    // Registrar estadísticas
    registrarEstadistica();
    
    // Iniciar tracking de tiempo
    iniciarTrackingTiempo();
    
    // Aplicar tamaño de fuente guardado
    aplicarTamanoFuenteGuardado();
    
    // Event listeners para scroll
    window.addEventListener('scroll', () => {
        detectarDireccionScroll();
        mostrarBotonVolverArriba();
    });
    
    // Event listeners para conexión
    window.addEventListener('online', () => {
        mostrarAlerta('Conexión restaurada', 'success');
    });
    
    window.addEventListener('offline', () => {
        mostrarAlerta('Sin conexión a Internet', 'warning');
    });
    
    // Verificar conexión inicial
    verificarConexion();
    
    // Analizar performance (solo en desarrollo)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        window.addEventListener('load', () => {
            setTimeout(analizarPerformance, 0);
        });
    }
    
    // Log de información del dispositivo (solo en desarrollo)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('Info del dispositivo:', obtenerInfoDispositivo());
        console.log('Estadísticas:', obtenerEstadisticas());
    }
    
    // Precargar imágenes importantes (si las hay)
    // precargarImagenes(['/static/img/profile.jpg']);
}

// ============ ATAJOS DE TECLADO ============

// Función para manejar atajos de teclado
function manejarAtajosTeclado(evento) {
    // Ctrl/Cmd + K: Abrir/cerrar sidebar
    if ((evento.ctrlKey || evento.metaKey) && evento.key === 'k') {
        evento.preventDefault();
        alternarSidebar();
    }
    
    // Ctrl/Cmd + D: Alternar modo oscuro/claro
    if ((evento.ctrlKey || evento.metaKey) && evento.key === 'd') {
        evento.preventDefault();
        alternarModoRapido();
    }
    
    // Ctrl/Cmd + +: Aumentar fuente
    if ((evento.ctrlKey || evento.metaKey) && evento.key === '+') {
        evento.preventDefault();
        ajustarTamanoFuente('aumentar');
    }
    
    // Ctrl/Cmd + -: Disminuir fuente
    if ((evento.ctrlKey || evento.metaKey) && evento.key === '-') {
        evento.preventDefault();
        ajustarTamanoFuente('disminuir');
    }
    
    // Ctrl/Cmd + 0: Resetear fuente
    if ((evento.ctrlKey || evento.metaKey) && evento.key === '0') {
        evento.preventDefault();
        ajustarTamanoFuente('resetear');
    }
}

// Añadir listener para atajos de teclado
document.addEventListener('keydown', manejarAtajosTeclado);

// ============ MENSAJE DE BIENVENIDA (CONSOLA) ============

// Función para mostrar mensaje en consola
function mostrarMensajeBienvenida() {
    const estilos = [
        'color: #6366f1',
        'font-size: 16px',
        'font-weight: bold',
        'padding: 10px'
    ].join(';');
    
    console.log('%c¡Hola!', estilos);
    console.log('%cGracias por visitar mi portafolio', 'color: #ec4899; font-size: 14px;');
    console.log('%cMark Orsini Carrillo - Técnico en Programación', 'color: #94a3b8; font-size: 12px;');
    console.log('%cGitHub: https://github.com/Mark-Orsini', 'color: #10b981; font-size: 12px;');
}

// ============ INICIALIZAR AL CARGAR ============

document.addEventListener('DOMContentLoaded', function() {
    inicializarFuncionalidades();
    mostrarMensajeBienvenida();
});

// Inicializar cuando la página está completamente cargada
window.addEventListener('load', function() {
    // Remover clase de carga si existe
    document.body.classList.remove('loading');
});