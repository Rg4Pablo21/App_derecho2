function realizarBusqueda(termino, ley = '', materia = '') {
    const resultadosDiv = document.getElementById('resultados');
    
    if (!termino || termino.trim() === '') {
        resultadosDiv.innerHTML = '<p class="mensaje-vacio">Ingresa un término de búsqueda</p>';
        return;
    }
    
    // Obtener resultados de la búsqueda
    let resultados = buscarArticulos(termino);
    
    // Filtrar por ley
    if (ley) {
        const leyObj = baseDatos.leyes.find(l => l.nombre === ley);
        if (leyObj) {
            resultados = resultados.filter(art => art.ley_id === leyObj.id);
        }
    }
    
    // Filtrar por materia
    if (materia) {
        const leyesMateria = baseDatos.leyes.filter(l => l.materia === materia);
        const idsLeyes = leyesMateria.map(l => l.id);
        resultados = resultados.filter(art => idsLeyes.includes(art.ley_id));
    }
    
    // Mostrar resultados
    if (resultados.length === 0) {
        resultadosDiv.innerHTML = `
            <div class="mensaje-vacio">
                <p>No se encontraron artículos para "${termino}"</p>
                <p style="font-size: 0.9rem; margin-top: 8px;">Intenta con otras palabras clave</p>
            </div>
        `;
        return;
    }
    
    resultadosDiv.innerHTML = resultados.map(art => {
        const leyNombre = obtenerLey(art.ley_id)?.nombre || 'Ley no especificada';
        const materiaNombre = obtenerLey(art.ley_id)?.materia || '';
        return `
            <div class="resultado" onclick="mostrarDetalleArticulo(${art.id})">
                <h3>Artículo ${art.numero} - ${art.titulo}</h3>
                <p>${art.texto.substring(0, 150)}${art.texto.length > 150 ? '...' : ''}</p>
                <div class="meta">
                    <span><i class="fas fa-book"></i> ${leyNombre}</span>
                    <span><i class="fas fa-gavel"></i> ${materiaNombre}</span>
                    <span><i class="fas fa-hashtag"></i> Art. ${art.numero}</span>
                </div>
            </div>
        `;
    }).join('');
}

// Función global para mostrar detalle de artículo
window.mostrarDetalleArticulo = function(id) {
    const articulo = obtenerArticulo(id);
    if (!articulo) return;
    
    const leyNombre = obtenerLey(articulo.ley_id)?.nombre || 'Ley no especificada';
    const materiaNombre = obtenerLey(articulo.ley_id)?.materia || '';
    const esFavorito = favoritos.some(fav => fav.id === articulo.id);
    
    const detalleDiv = document.getElementById('detalleArticulo');
    detalleDiv.innerHTML = `
        <div class="detalle-articulo">
            <h2>Artículo ${articulo.numero} - ${articulo.titulo}</h2>
            <div class="meta-articulo">
                <span><i class="fas fa-book"></i> ${leyNombre}</span>
                <span><i class="fas fa-gavel"></i> ${materiaNombre}</span>
                <span><i class="fas fa-hashtag"></i> Art. ${articulo.numero}</span>
            </div>
            
            <div class="texto-articulo">
                <strong>Texto completo:</strong><br>
                ${articulo.texto}
            </div>
            
            <div class="seccion">
                <i class="fas fa-lightbulb"></i> Explicación sencilla
            </div>
            <div class="explicacion">
                ${articulo.explicacion}
            </div>
            
            <div class="seccion">
                <i class="fas fa-list"></i> Conceptos jurídicos importantes
            </div>
            <ul class="lista-conceptos">
                ${articulo.conceptos.map(c => `<li>${c}</li>`).join('')}
            </ul>
            
            <div class="seccion">
                <i class="fas fa-example"></i> Ejemplo práctico
            </div>
            <div class="ejemplo">
                ${articulo.ejemplo}
            </div>
            
            ${articulo.casos ? `
                <div class="seccion">
                    <i class="fas fa-scale-balanced"></i> Casos relacionados
                </div>
                <ul class="lista-conceptos">
                    ${articulo.casos.map(c => `<li>${c}</li>`).join('')}
                </ul>
            ` : ''}
            
            ${articulo.relacionados && articulo.relacionados.length > 0 ? `
                <div class="seccion">
                    <i class="fas fa-link"></i> Artículos relacionados
                </div>
                <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 1rem;">
                    ${articulo.relacionados.map(num => {
                        const artRel = baseDatos.articulos.find(a => a.numero === num);
                        return artRel ? `
                            <button class="chip" onclick="mostrarDetalleArticulo(${artRel.id})">
                                Art. ${artRel.numero} - ${artRel.titulo}
                            </button>
                        ` : '';
                    }).join('')}
                </div>
            ` : ''}
            
            <button class="btn-favorito ${esFavorito ? 'activo' : ''}" onclick="toggleFavorito(${articulo.id})">
                <i class="fas ${esFavorito ? 'fa-heart' : 'fa-heart-o'}"></i>
                ${esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            </button>
        </div>
    `;
    
    document.getElementById('modalArticulo').classList.add('mostrar');
};

// Buscar desde actividad reciente y chips
function buscarTermino(termino) {
    document.getElementById('inputBusqueda').value = termino;
    cambiarPagina('buscar');
    realizarBusqueda(termino);
}