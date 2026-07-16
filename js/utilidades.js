// Función para formatear fechas
function formatearFecha(fecha) {
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return new Date(fecha).toLocaleDateString('es-GT', opciones);
}

// Función para truncar texto
function truncarTexto(texto, longitud = 100) {
    if (texto.length <= longitud) return texto;
    return texto.substring(0, longitud) + '...';
}

// Función para resaltar coincidencias
function resaltarCoincidencias(texto, termino) {
    if (!termino || termino.trim() === '') return texto;
    const regex = new RegExp(termino.trim(), 'gi');
    return texto.replace(regex, match => `<mark>${match}</mark>`);
}

// Función para validar email
function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Función para manejar errores de API
function manejarError(error) {
    console.error('Error:', error);
    mostrarNotificacion('Ocurrió un error. Por favor, intenta de nuevo.', 'error');
}

// Exportar funciones para uso global
window.formatearFecha = formatearFecha;
window.truncarTexto = truncarTexto;
window.resaltarCoincidencias = resaltarCoincidencias;
window.validarEmail = validarEmail;
window.manejarError = manejarError;