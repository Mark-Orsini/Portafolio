/* ========================================
   SISTEMA DE TEMAS - PORTAFOLIO MARK ORSINI
   Autor: Mark Orsini Carrillo
   Descripción: Manejo de temas de color
   ======================================== */

// Lista de temas disponibles
const temasDisponibles = [
    'dark',
    'light',
    'dark-blue',
    'blue',
    'red',
    'dark-red',
    'gold',
    'green',
    'dark-green',
    'sky-blue',
    'purple',
    'dark-purple'
];

// Función para obtener el tema actual
function obtenerTemaActual() {
    return localStorage.getItem('tema') || 'dark';
}

// Función para cambiar el tema
function cambiarTema(nombreTema) {
    // Validar que el tema existe
    if (!temasDisponibles.includes(nombreTema)) {
        console.error('Tema no válido:', nombreTema);
        return;
    }
    
    // Obtener el body
    const body = document.body;
    
    // Añadir clase de transición
    body.classList.add('changing-theme');
    
    // Remover todas las clases de tema anteriores
    temasDisponibles.forEach(tema => {
        body.classList.remove(`theme-${tema}`);
    });
    
    // Añadir la nueva clase de tema
    body.classList.add(`theme-${nombreTema}`);
    
    // Guardar en localStorage
    localStorage.setItem('tema', nombreTema);
    
    // Marcar tema activo en la interfaz
    marcarTemaActivo(nombreTema);
    
    // Remover clase de transición después de la animación
    setTimeout(() => {
        body.classList.remove('changing-theme');
    }, 500);
    
    // Mostrar notificación
    mostrarNotificacionTema('Tema cambiado correctamente');
}

// Función para marcar el tema activo visualmente
function marcarTemaActivo(tema) {
    const tarjetasTema = document.querySelectorAll('.tema-card');
    
    tarjetasTema.forEach(tarjeta => {
        if (tarjeta.dataset.tema === tema) {
            tarjeta.classList.add('active');
        } else {
            tarjeta.classList.remove('active');
        }
    });
}

// Función para mostrar notificación de cambio de tema
function mostrarNotificacionTema(mensaje) {
    // Verificar si ya existe una notificación
    const notificacionExistente = document.querySelector('.notificacion-tema');
    if (notificacionExistente) {
        notificacionExistente.remove();
    }
    
    // Crear elemento de notificación
    const notif = document.createElement('div');
    notif.className = 'notificacion-tema';
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
        font-weight: 600;
    `;
    
    document.body.appendChild(notif);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notif.style.animation = 'slideOutToTop 0.4s ease-in';
        setTimeout(() => notif.remove(), 400);
    }, 3000);
}

// Función para aplicar el tema guardado al cargar la página
function aplicarTemaGuardado() {
    const temaGuardado = obtenerTemaActual();
    const body = document.body;
    
    // Remover todas las clases de tema
    temasDisponibles.forEach(tema => {
        body.classList.remove(`theme-${tema}`);
    });
    
    // Aplicar el tema guardado
    body.classList.add(`theme-${temaGuardado}`);
    
    // Marcar como activo en la interfaz si existe
    marcarTemaActivo(temaGuardado);
}

// Función para detectar preferencia del sistema
function detectarPreferenciaSistema() {
    // Solo aplicar si no hay tema guardado
    if (localStorage.getItem('tema')) {
        return;
    }
    
    // Detectar si el usuario prefiere modo oscuro
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        cambiarTema('dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        cambiarTema('light');
    }
}

// Función para escuchar cambios en la preferencia del sistema
function escucharCambiosPreferencia() {
    if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        mediaQuery.addEventListener('change', (e) => {
            // Solo cambiar si el usuario no ha seleccionado un tema manualmente
            if (!localStorage.getItem('tema-manual')) {
                if (e.matches) {
                    cambiarTema('dark');
                } else {
                    cambiarTema('light');
                }
            }
        });
    }
}

// Función para obtener información del tema actual
function obtenerInfoTema() {
    const temaActual = obtenerTemaActual();
    const esOscuro = ['dark', 'dark-blue', 'dark-red', 'dark-green', 'dark-purple'].includes(temaActual);
    
    return {
        nombre: temaActual,
        esOscuro: esOscuro,
        esClaro: !esOscuro
    };
}

// Función para alternar entre modo claro y oscuro
function alternarModoOscuro() {
    const infoTema = obtenerInfoTema();
    
    if (infoTema.esOscuro) {
        cambiarTema('light');
    } else {
        cambiarTema('dark');
    }
}

// Función para previsualizar tema temporalmente (hover)
function previsualizarTema(nombreTema) {
    const body = document.body;
    body.style.transition = 'none';
    
    temasDisponibles.forEach(tema => {
        body.classList.remove(`theme-${tema}`);
    });
    
    body.classList.add(`theme-${nombreTema}`);
    
    setTimeout(() => {
        body.style.transition = '';
    }, 50);
}

// Función para restaurar el tema original después de previsualización
function restaurarTemaOriginal() {
    const temaOriginal = obtenerTemaActual();
    previsualizarTema(temaOriginal);
}

// Función para exportar la configuración de tema
function exportarConfiguracionTema() {
    const config = {
        tema: obtenerTemaActual(),
        fecha: new Date().toISOString()
    };
    
    return JSON.stringify(config);
}

// Función para importar configuración de tema
function importarConfiguracionTema(configJSON) {
    try {
        const config = JSON.parse(configJSON);
        if (config.tema && temasDisponibles.includes(config.tema)) {
            cambiarTema(config.tema);
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error al importar configuración:', error);
        return false;
    }
}

// Inicializar el sistema de temas cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Aplicar tema guardado
    aplicarTemaGuardado();
    
    // Detectar preferencia del sistema si no hay tema guardado
    detectarPreferenciaSistema();
    
    // Escuchar cambios en preferencia del sistema
    escucharCambiosPreferencia();
    
    // Añadir event listeners a las tarjetas de tema si existen
    const tarjetasTema = document.querySelectorAll('.tema-card');
    tarjetasTema.forEach(tarjeta => {
        tarjeta.addEventListener('click', function() {
            const tema = this.dataset.tema;
            cambiarTema(tema);
            localStorage.setItem('tema-manual', 'true'); // Marcar que fue selección manual
        });
        
        // Opcional: Previsualización al hacer hover
        /*
        tarjeta.addEventListener('mouseenter', function() {
            const tema = this.dataset.tema;
            previsualizarTema(tema);
        });
        
        tarjeta.addEventListener('mouseleave', function() {
            restaurarTemaOriginal();
        });
        */
    });
});