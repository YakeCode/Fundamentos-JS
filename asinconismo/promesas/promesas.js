const promise = new Promise ((resolve, reject)=>{
    let operationSuccessfull = true;
    setTimeout(()=>{
        if (!operationSuccessfull){
            reject ('Operacion denegada')
        }else{
            resolve('Operacion EXITOSA')
            
        }
    },1000)
    
})

promise
    .then((exito) => {
        console.log(exito);
    })
    .catch((fail) => {
        console.log(fail);
    });
