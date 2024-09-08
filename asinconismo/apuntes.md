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

### fetch()

Es una promesa

-------------------------------------------------------------------------------

## Async & Await

Async:

genera que el codigo pase de sincrono, a asincrono, la diferencia que tiene con las promesas es que Es una forma mas legible de poder leer los pasos. Async & Await devuelcve una promesa, entonces el resultado es lo mismo

Await : Indica que espera que se resuelva la promesa, en otras palabras pregunta si ya esta listo, si si, procede a continuar con el codigo, sino, espera

### Try y catch

es el que nos va a permitor manejar los errores en el Async y en el await

* Try : codigo que se ejecuta cuando la funcion devuelve true
* catch : nos va a rregresar el error de lo que no esta funcionando

## For await of

se utiliza cuando tenemos que hacer  mas de una peticion, pues es un bucle que utiliza de fondo un async await de fondo, para poder pasar esas peticiones de fornma asincrona

### ¿Qué hace throw en JavaScript?

El throw es como una forma de decirle a JavaScript: "¡Ocurrió un problema, detén lo que estás haciendo!". Cuando el código encuentra algo inesperado o incorrecto, puedes usar throw para crear un "error" y detener la ejecución normal.

        function divide(a, b) {
            if (b === 0) {
                throw new Error("No se puede dividir por cero");
            }
            return a / b;
        }

#### ¿Qué pasa después de throw?
Cuando JavaScript encuentra throw, deja de ejecutar el código normal y busca un catch que pueda "atrapar" ese error:

---------------------------------------------------------------------------------------
