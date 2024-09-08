const urls = [
    "https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/location",
    "https://rickandmortyapi.com/api/episode"
];

/*for await (urls of data){

}*/

async function fetchData() {

    try{

        for await (let url of urls){
            let response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            let data = await response.json();
            console.log (data)
        }

    }catch (error) {
        console.log(`error al fech urls ${error}`)
    }
}

fetchData()