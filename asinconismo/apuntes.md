# Asincronismo

## Js Engine

### Memory heap

Espacio donde se van a guardar todas las variables, funciones y objetos que creamos, se guardan de forma Random

### Call stack

Pila donde se van a llamar cada una de las funciones que tenemos que ejecutar en nuestro programa 

* Programacion sincrona : Se trabaja una tarea a la vez y de aca viene un nombre que es 

* Stack overflow : Es cuando llevamos nuestro stack de tareas a un punto donde eccede la memoria que tiene permitida para poder ejecutar las tareas o procesos

## Web API

Es la que hace que JS se comporte de forma asincrona y hace que JS trabaje en simultaneo con las funciones que tiene el call stack

Proceso : 

* La web api ejecuta una funcion, la resuelve y cuando termina la manda al una sala de espera (Queue)
* Event loop : Este se encarga de estar preguntando al call Stack si ya esta vacio, y si lo esta toma lo uqe existe en el Queue y lo regresa al call stack para que se termine de ejecutar. Si no esta vacio, va a mantener el Queue en espera hasta que este vacio

## Promesas-Promises

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

-------------------------------------------------------------------------------

## Async & Await

genera que el codigo pase de sincrono, a asincrono, la diferencia que tiene con las promesas es que Es una forma mas legible de poder leer los pasos. Async & Await devuelcve una promesa, entonces el resultado es lo mismo

###