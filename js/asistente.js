function enviarMensajeChat() {
    const input = document.getElementById('inputChat');
    const mensaje = input.value.trim();
    
    if (!mensaje) return;
    
    // Agregar mensaje del usuario
    agregarMensajeChat('usuario', mensaje);
    input.value = '';
    
    // Simular respuesta de IA
    setTimeout(() => {
        const respuesta = generarRespuestaIA(mensaje);
        agregarMensajeChat('ia', respuesta);
    }, 500);
}

function agregarMensajeChat(tipo, contenido) {
    const contenedor = document.getElementById('chatMensajes');
    const mensajeDiv = document.createElement('div');
    mensajeDiv.className = `mensaje ${tipo}`;
    mensajeDiv.style.animation = 'aparecer 0.3s ease';
    
    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatar.innerHTML = tipo === 'usuario' ? '<i class="fas fa-user"></i>' : '<i class="fas fa-robot"></i>';
    
    const burbuja = document.createElement('div');
    burbuja.className = 'burbuja';
    burbuja.innerHTML = contenido;
    
    mensajeDiv.appendChild(avatar);
    mensajeDiv.appendChild(burbuja);
    contenedor.appendChild(mensajeDiv);
    
    // Scroll al final
    contenedor.scrollTop = contenedor.scrollHeight;
}

function generarRespuestaIA(pregunta) {
    const preguntaLower = pregunta.toLowerCase();
    let respuesta = '';
    let fuentes = [];
    
    // Buscar artículos relevantes
    const resultados = buscarArticulos(pregunta);
    
    if (resultados.length === 0) {
        return `
            <p>No encontré información específica sobre "${pregunta}" en mi base de datos.</p>
            <p>Te recomiendo buscar en el <strong>Código Civil</strong> o <strong>Constitución</strong> de Guatemala.</p>
            <span class="fuente">Fuente: Base de datos jurídica de Guatemala</span>
        `;
    }
    
    // Tomar el artículo más relevante
    const articulo = resultados[0];
    const leyNombre = obtenerLey(articulo.ley_id)?.nombre || '';
    
    respuesta = `
        <p><strong>Artículo ${articulo.numero} - ${articulo.titulo}</strong></p>
        <p>${articulo.texto}</p>
        <p><strong>Explicación:</strong> ${articulo.explicacion}</p>
        ${articulo.ejemplo ? `<p><strong>Ejemplo:</strong> ${articulo.ejemplo}</p>` : ''}
        <span class="fuente">Fuente: ${leyNombre}, Artículo ${articulo.numero}</span>
    `;
    
    // Si hay más resultados, agregar sugerencias
    if (resultados.length > 1) {
        const sugerencias = resultados.slice(1, 4).map(art => 
            `Artículo ${art.numero} - ${art.titulo}`
        ).join(', ');
        respuesta += `
            <p style="margin-top: 12px; font-style: italic;">
                También te puede interesar: ${sugerencias}
            </p>
        `;
    }
    
    return respuesta;
}

// Función para el asistente desde el chat
document.addEventListener('DOMContentLoaded', function() {
    // Las sugerencias ya tienen eventos en app.js
});