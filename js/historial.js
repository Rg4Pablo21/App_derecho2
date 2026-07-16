function cargarHistorial() {
    const historialGuardado = localStorage.getItem('historial');
    if (historialGuardado) {
        try {
            historial = JSON.parse(historialGuardado);
            actualizarListaHistorial();
            actualizarEstadisticas();
        } catch(e) {
            console.error('Error al cargar historial:', e);
        }
    }
}

function actualizarListaHistorial() {
    const lista = document.getElementById('listaHistorial');
    
    if (historial.length === 0) {
        lista.innerHTML = '<p class="mensaje-vacio">No hay búsquedas registradas</p>';
        return;
    }
    
    lista.innerHTML = historial.map(item => `
        <div class="item-historial" onclick="buscarTermino('${item.termino}')">
            <span class="termino"><i class="fas fa-search" style="color: var(--texto-claro); margin-right: 8px;"></i>${item.termino}</span>
            <span class="meta">${item.fecha}</span>
        </div>
    `).join('');
}

function limpiarHistorial() {
    if (historial.length === 0) return;
    
    if (confirm('¿Estás seguro de que deseas eliminar todo el historial de búsquedas?')) {
        historial = [];
        localStorage.setItem('historial', JSON.stringify(historial));
        actualizarListaHistorial();
        actualizarEstadisticas();
        mostrarActividadReciente();
        mostrarNotificacion('Historial limpiado correctamente');
    }
}

// Cargar historial al inicio
document.addEventListener('DOMContentLoaded', function() {
    cargarHistorial();
});