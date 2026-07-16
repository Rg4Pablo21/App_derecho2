// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', function() {
    inicializarApp();
    cargarEstado();
    actualizarEstadisticas();
    mostrarActividadReciente();
    cargarCarpetas();
});

function inicializarApp() {
    // Navegación
    const enlaces = document.querySelectorAll('.nav-link');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const pagina = this.dataset.pagina;
            cambiarPagina(pagina);
            document.getElementById('navegacion').classList.remove('abierto');
        });
    });
    
    // Menu móvil
    document.getElementById('menuToggle').addEventListener('click', function() {
        document.getElementById('navegacion').classList.toggle('abierto');
    });
    
    // Cambiar tema
    document.getElementById('btnTema').addEventListener('click', function() {
        cambiarTema();
    });
    
    // Usuario
    document.getElementById('btnUsuario').addEventListener('click', function() {
        if (usuarioActual) {
            cerrarSesion();
        } else {
            document.getElementById('modalLogin').classList.add('mostrar');
        }
    });
    
    // Modales
    document.querySelectorAll('.modal-cerrar').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').classList.remove('mostrar');
        });
    });
    
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('mostrar');
            }
        });
    });
    
    // Login
    document.getElementById('formLogin').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('emailLogin').value;
        const password = document.getElementById('passwordLogin').value;
        iniciarSesion(email, password);
    });
    
    // Registro
    document.getElementById('formRegistro').addEventListener('submit', function(e) {
        e.preventDefault();
        const nombre = document.getElementById('nombreRegistro').value;
        const email = document.getElementById('emailRegistro').value;
        const password = document.getElementById('passwordRegistro').value;
        registrarUsuario(nombre, email, password);
    });
    
    // Cambiar entre login y registro
    document.getElementById('mostrarRegistro').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('modalLogin').classList.remove('mostrar');
        document.getElementById('modalRegistro').classList.add('mostrar');
    });
    
    document.getElementById('mostrarLogin').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('modalRegistro').classList.remove('mostrar');
        document.getElementById('modalLogin').classList.add('mostrar');
    });
    
    // Búsqueda rápida en inicio
    document.getElementById('btnBuscarInicio').addEventListener('click', function() {
        const termino = document.getElementById('busquedaInicio').value;
        if (termino.trim()) {
            document.getElementById('inputBusqueda').value = termino;
            cambiarPagina('buscar');
            realizarBusqueda(termino);
            agregarHistorial(termino);
        }
    });
    
    document.getElementById('busquedaInicio').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('btnBuscarInicio').click();
        }
    });
    
    // Chips de leyes populares
    document.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', function() {
            const ley = this.dataset.ley;
            document.getElementById('selectLey').value = ley;
            cambiarPagina('buscar');
            realizarBusqueda(ley);
            agregarHistorial(ley);
        });
    });
    
    // Búsqueda principal
    document.getElementById('btnBuscar').addEventListener('click', function() {
        const termino = document.getElementById('inputBusqueda').value;
        const ley = document.getElementById('selectLey').value;
        const materia = document.getElementById('selectMateria').value;
        realizarBusqueda(termino, ley, materia);
        if (termino.trim()) {
            agregarHistorial(termino);
        }
    });
    
    document.getElementById('inputBusqueda').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('btnBuscar').click();
        }
    });
    
    // Historial
    document.getElementById('btnLimpiarHistorial').addEventListener('click', function() {
        limpiarHistorial();
    });
    
    // Cargar tema guardado
    const temaGuardado = localStorage.getItem('tema');
    if (temaGuardado) {
        temaActual = temaGuardado;
        aplicarTema(temaActual);
    }
    
    // Cargar favoritos
    cargarFavoritos();
}

function cambiarPagina(pagina) {
    document.querySelectorAll('.pagina').forEach(p => p.classList.remove('activa'));
    
    const paginaElement = document.getElementById(pagina);
    if (paginaElement) {
        paginaElement.classList.add('activa');
    }
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('activo');
        if (link.dataset.pagina === pagina) {
            link.classList.add('activo');
        }
    });
    
    const titulos = {
        inicio: 'Inicio',
        buscar: 'Buscar artículos',
        favoritos: 'Mis favoritos',
        historial: 'Historial de búsquedas'
    };
    document.title = `${titulos[pagina]} - Asistente Jurídico GT`;
}

function cambiarTema() {
    temaActual = temaActual === 'claro' ? 'oscuro' : 'claro';
    aplicarTema(temaActual);
    localStorage.setItem('tema', temaActual);
    
    const icono = document.querySelector('#btnTema i');
    icono.className = temaActual === 'claro' ? 'fas fa-moon' : 'fas fa-sun';
}

function aplicarTema(tema) {
    document.documentElement.setAttribute('data-tema', tema);
}

function cargarEstado() {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
        try {
            usuarioActual = JSON.parse(usuarioGuardado);
            actualizarUsuarioUI();
        } catch(e) {
            console.error('Error al cargar usuario:', e);
        }
    }
    
    const favoritosGuardados = localStorage.getItem('favoritos');
    if (favoritosGuardados) {
        try {
            favoritos = JSON.parse(favoritosGuardados);
        } catch(e) {
            console.error('Error al cargar favoritos:', e);
        }
    }
    
    const historialGuardado = localStorage.getItem('historial');
    if (historialGuardado) {
        try {
            historial = JSON.parse(historialGuardado);
        } catch(e) {
            console.error('Error al cargar historial:', e);
        }
    }
}

function actualizarUsuarioUI() {
    const btnUsuario = document.getElementById('btnUsuario');
    const nombreSpan = btnUsuario.querySelector('span');
    
    if (usuarioActual) {
        nombreSpan.textContent = usuarioActual.nombre || 'Usuario';
        btnUsuario.style.background = 'rgba(46, 125, 50, 0.3)';
    } else {
        nombreSpan.textContent = 'Iniciar sesión';
        btnUsuario.style.background = 'rgba(255,255,255,0.08)';
    }
}

function iniciarSesion(email, password) {
    if (email && password) {
        usuarioActual = {
            id: 1,
            nombre: 'Estudiante de Derecho',
            email: email
        };
        localStorage.setItem('usuario', JSON.stringify(usuarioActual));
        actualizarUsuarioUI();
        document.getElementById('modalLogin').classList.remove('mostrar');
        mostrarNotificacion('¡Sesión iniciada correctamente!');
    } else {
        mostrarNotificacion('Por favor, completa todos los campos', 'error');
    }
}

function cerrarSesion() {
    usuarioActual = null;
    localStorage.removeItem('usuario');
    actualizarUsuarioUI();
    mostrarNotificacion('Sesión cerrada');
}

function registrarUsuario(nombre, email, password) {
    if (nombre && email && password && password.length >= 6) {
        usuarioActual = {
            id: 2,
            nombre: nombre,
            email: email
        };
        localStorage.setItem('usuario', JSON.stringify(usuarioActual));
        actualizarUsuarioUI();
        document.getElementById('modalRegistro').classList.remove('mostrar');
        mostrarNotificacion('¡Registro exitoso! Bienvenido ' + nombre);
    } else {
        mostrarNotificacion('Por favor, completa todos los campos correctamente', 'error');
    }
}

function mostrarNotificacion(mensaje, tipo = 'exito') {
    const notificacion = document.createElement('div');
    notificacion.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 12px;
        background: ${tipo === 'error' ? '#c62828' : '#2e7d32'};
        color: white;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: aparecer 0.3s ease;
        max-width: 400px;
    `;
    notificacion.textContent = mensaje;
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        notificacion.style.opacity = '0';
        notificacion.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            notificacion.remove();
        }, 300);
    }, 3000);
}

function actualizarEstadisticas() {
    document.getElementById('totalArticulos').textContent = baseDatos.articulos.length;
    document.getElementById('totalFavoritos').textContent = favoritos.length;
    document.getElementById('totalBusquedas').textContent = historial.length;
}

function agregarHistorial(termino) {
    if (!termino || termino.trim() === '') return;
    
    const entrada = {
        termino: termino.trim(),
        fecha: new Date().toLocaleString(),
        timestamp: Date.now()
    };
    
    historial = historial.filter(h => h.termino !== entrada.termino);
    historial.unshift(entrada);
    
    if (historial.length > 50) {
        historial = historial.slice(0, 50);
    }
    
    localStorage.setItem('historial', JSON.stringify(historial));
    actualizarEstadisticas();
}

function mostrarActividadReciente() {
    const lista = document.getElementById('listaActividad');
    const historialReciente = historial.slice(0, 5);
    
    if (historialReciente.length === 0) {
        lista.innerHTML = '<p class="mensaje-vacio">No hay actividad reciente</p>';
        return;
    }
    
    lista.innerHTML = historialReciente.map(item => `
        <div class="item-actividad" onclick="buscarTermino('${item.termino}')">
            <span class="termino">${item.termino}</span>
            <span class="tiempo">${item.fecha}</span>
        </div>
    `).join('');
}

// Función global para buscar desde actividad reciente
window.buscarTermino = function(termino) {
    document.getElementById('inputBusqueda').value = termino;
    cambiarPagina('buscar');
    realizarBusqueda(termino);
};