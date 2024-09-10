fetch(url, {
    method: 'HTTP_METHOD', // Método HTTP: 'GET', 'POST', 'PUT', 'DELETE', etc.
    headers: {
        'Content-Type': 'mime/type', // Tipo de contenido. Ejemplo: 'application/json'
        'Authorization': 'Bearer token', // (Opcional) Encabezado de autorización
        // Otros encabezados pueden ir aquí
    },
    body: JSON.stringify(data), // (Opcional) Cuerpo de la solicitud, generalmente en formato JSON
    credentials: 'include', // (Opcional) Envía cookies con la solicitud. Valores: 'omit', 'same-origin', 'include'
    mode: 'cors', // (Opcional) Modo de la solicitud: 'cors', 'no-cors', 'same-origin'
    cache: 'default', // (Opcional) Control del caché: 'default', 'no-cache', 'reload', 'force-cache', 'only-if-cached'
    redirect: 'follow', // (Opcional) Cómo manejar redirecciones: 'follow', 'error', 'manual'
    referrerPolicy: 'no-referrer', // (Opcional) Política de referencia: 'no-referrer', 'no-referrer-when-downgrade', etc.
    // Otros campos opcionales también pueden ir aquí
}).then(response => {
    return response.json(); // Procesa la respuesta como JSON
}).catch(error => {
    console.error('Error:', error); // Maneja cualquier error
});
