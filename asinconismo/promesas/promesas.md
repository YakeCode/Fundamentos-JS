# Promesas-Promises

Las promesas son lo que va a permitir pasar nuestro codigo de sincrono a asincrono. estas tienen 3 estados 

### Estados de la promesa

* Pending-Pendiente : Es cuando la promesa se va a crear
* Fullfilled : Va a venir cuando la promesa se resuelva
* Rejected () : Cuando la promesa no se resolvio

### callback de las promesas

* Resolve : Cuando la promesa se resuelve de forma satisfactoria
* Reject : La promesa no se puede resolver

###  Metodos de las promesas

* then(()=>{}) : Se ejecuta cuando la promesa se resuelve, cuando ya paso por Fullfilled, y ya se resolvio Resolve
* cath(()=>{}) : Cuando la promesa no se resuelve, con el cath vamos a poder ontener el error para poder imprimirlo y que nos pueda decir lo que esta pasando que hace que la promesa no se resuelva

        promise
            .then((exito) => {
                console.log(exito);
            })
            .catch((fail) => {
                console.log(fail);
            });
