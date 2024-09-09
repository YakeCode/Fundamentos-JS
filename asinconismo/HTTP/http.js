//HTTP

async function fetchData(){
    try{
        const url = await fetch("https://jsonplaceholder.typicode.com/posts")
        const response = await url.json()
        console.log (response)

        if (!url.ok){
            throw new Error(console.log(`no funciona url`) )
        }
    }catch(error){
        console.log(`error en la promesa ${error}`)
    }
}

fetchData()



