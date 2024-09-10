# Funcion fetch

```javascript
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

----------------------------------------------------------------------

### Detalle de los parámetros:

- **`url`**: La URL a la que se va a hacer la solicitud.
- **`method`**: Especifica el método HTTP que se va a usar (`GET`, `POST`, `PUT`, `DELETE`, etc.). El valor por defecto es `GET`.
- **`headers`**: Un objeto que contiene los encabezados de la solicitud. Aquí puedes especificar el tipo de contenido (`Content-Type`), la autorización (`Authorization`), entre otros.
- **`body`**: El cuerpo de la solicitud. Se utiliza para enviar datos al servidor, generalmente en formato JSON, pero también puede ser texto, un formulario (`FormData`), o un archivo.
- **`credentials`**: Indica si se deben enviar cookies con la solicitud. Los valores posibles son:
  - `'omit'`: No envía cookies ni credenciales.
  - `'same-origin'`: Solo envía credenciales si la URL está en el mismo origen.
  - `'include'`: Envía credenciales incluso a dominios cruzados.
- **`mode`**: Define el modo de la solicitud. Los modos posibles son:
  - `'cors'`: Permite solicitudes entre dominios.
  - `'no-cors'`: Restricciones en solicitudes entre dominios.
  - `'same-origin'`: Solo permite solicitudes al mismo origen.
- **`cache`**: Controla cómo se maneja la caché:
  - `'default'`: Usa la caché predeterminada.
  - `'no-cache'`: Siempre solicita recursos nuevos.
  - `'reload'`: Fuerza la recarga de los recursos.
  - `'force-cache'`: Usa la caché, incluso si está caducada.
  - `'only-if-cached'`: Solo usa la caché.
- **`redirect`**: Controla cómo se manejan las redirecciones:
  - `'follow'`: Sigue automáticamente las redirecciones.
  - `'error'`: Aborta si hay una redirección.
  - `'manual'`: El desarrollador maneja las redirecciones.
- **`referrerPolicy`**: Define la política de referencia, que controla qué información de referencia se envía con la solicitud.

### Manejo de Promesas:

- **`.then(response => {...})`**: Procesa la respuesta si la solicitud se completa exitosamente. Normalmente, aquí se convierte la respuesta en JSON.
- **`.catch(error => {...})`**: Captura y maneja cualquier error que ocurra durante la solicitud o el procesamiento de la respuesta.
