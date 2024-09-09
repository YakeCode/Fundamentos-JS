
async function fetchData (){
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character")
    
        const data = await response.json()
        console.log(data)
        
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData ()

const miPractica = async () => {
    
    try {
        const api = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        
        // Verifica si la respuesta fue exitosa
        if (!api.ok) {
            throw new Error(`HTTP error! status: ${api.status}`);
        }

        const dataForApi = await api.json();
        console.log(dataForApi);

    } catch (error) { 
        console.log(`Ha ocurrido un error: ${error}`);
    }
}

miPractica();
