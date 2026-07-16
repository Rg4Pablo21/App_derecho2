function toggleFavorito(articuloId) {
    const index = favoritos.findIndex(fav => fav.id === articuloId);
    
    if (index > -1) {
        favoritos.splice(index, 1);
        mostrarNotificacion('Artículo removido de favoritos');
    } else {
        const articulo = obtenerArticulo(articuloId);
        if (articulo) {
            const leyNombre = obtenerLey(articulo.ley_id)?.nombre || '';
            favoritos.push({
                id: articulo.id,
                numero: articulo.numero,
                titulo: articulo.titulo,
                ley: leyNombre,
                fecha: new Date().toLocaleString()
            });
            mostrarNotificacion('Artículo agregado a favoritos');
        }
    }
    
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    actualizarEstadisticas();
    actualizarListaFavoritos();
    
    // Actualizar botón en el detalle si está abierto
    const btnFavorito = document.querySelector('.btn-favorito');
    if (btnFavorito) {
        const esFavorito = favoritos.some(fav => fav.id === articuloId);
        btnFavorito.className = `btn-favorito ${esFavorito ? 'activo' : ''}`;
        btnFavorito.innerHTML = `
            <i class="fas ${esFavorito ? 'fa-heart' : 'fa-heart-o'}"></i>
            ${esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        `;
    }
}

function cargarFavoritos() {
    const favoritosGuardados = localStorage.getItem('favoritos');
    if (favoritosGuardados) {
        try {
            favoritos = JSON.parse(favoritosGuardados);
            actualizarListaFavoritos();
            actualizarEstadisticas();
        } catch(e) {
            console.error('Error al cargar favoritos:', e);
        }
    }
}

function actualizarListaFavoritos(carpeta = 'todos') {
    const lista = document.getElementById('listaFavoritos');
    
    let filtrados = favoritos;
    if (carpeta !== 'todos') {
        filtrados = favoritos.filter(fav => {
            const articulo = obtenerArticulo(fav.id);
            if (!articulo) return false;
            const ley = obtenerLey(articulo.ley_id);
            return ley && ley.materia === carpeta;
        });
    }
    
    if (filtrados.length === 0) {
        lista.innerHTML = '<p class="mensaje-vacio">No hay artículos favoritos en esta carpeta</p>';
        return;
    }
    
    lista.innerHTML = filtrados.map(fav => `
        <div class="item-favorito">
            <div class="info" onclick="mostrarDetalleArticulo(${fav.id})">
                <h4>Artículo ${fav.numero} - ${fav.titulo}</h4>
                <p>${fav.ley}</p>
                <small style="color: var(--texto-claro);">Agregado: ${fav.fecha}</small>
            </div>
            <div class="acciones">
                <button class="btn-eliminar" onclick="toggleFavorito(${fav.id})">
                    <i class="fas fa-trash-can"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Inicializar carpetas
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.carpeta').forEach(carpeta => {
        carpeta.addEventListener('click', function() {
            document.querySelectorAll('.carpeta').forEach(c => c.classList.remove('activa'));
            this.classList.add('activa');
            const carpetaNombre = this.dataset.carpeta;
            actualizarListaFavoritos(carpetaNombre);
        });
    });
});