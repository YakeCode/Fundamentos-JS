# Mutabilidad

Modifica el array original

Métodos mutables: copyWithin, fill, pop, push, reverse, shift, sort, splice, unshift.

* array.push (ingresar) -> agrega 1 o mas elementos al final de un array 
* array.pop(borrar) -> Elimina el ultimo elemento de un array

-----------------------------------------------------------------------------------------------

# Inmutabilidad

No modifica el array original, por lo general crea una copia o crea otro nuevo

* array.concat ([array a unir]): concatena o une 2 arrays y los vuelve 1
    const newFruits = fruist.concat['naranja', 'manzana']

* array.map() -> permite aplicar una funcion a cada uno de los elementos del array y nos permite cnstruir un nuevo array con el resultado

    numbers = [2,4,6]
    numbers.map((numbers)=>numbers * 2) // 4 8 12

* array.forEach  - itera cada uno de los elementos del array

    numbers = [2,4,6]
    numbers.forEach((num)=>console.log(num)) 2 4 6


* array.filter - pasa por una funcion condicion y crea un nuevo array con los elementos que pasan la condicion

        const numbersforfilter = [1,2,3,4,5,6]

        let numerospares = (num)=>{
            return num  % 2 === 0 // divisibles por 2
        }

        let newNumbers = numbersforfilter.filter(numerospares)

        console.log (newNumbers)


* array.reduce - Ejecuta una funcion reductora  devolviendo como resultado un unico valor, sintetiza informacion redundante

    ()=>{} la funcion interna que tiene reduce contiene 2 parametros principales y 1 opcional
    * Acomulador :  Guarda lo que vaya hacioendo el codigo que le demos
    * Valor actual :  Cada uno de los elementos del array que va a iterar
        * Valor Inicial :  Este es el valor opcional, y con el podemos comenzar el acomulador con algo antes de que comience a iterar, o tambien lo podriamos utilizar para darle un numero de indice

    Array.reduce ( 
        (acomulador, valorActual) => {
            return acomulador + valorActual, valorInicial
        }
    )

###### ejemplo 

const words = ['apple', 'hello', 'bye', 'banana', 'manzana', 'bye', 'hello']

const wordFrecuency = (acomulador, valorActual)=>{
    if(!acomulador[valorActual] ){
        acomulador[valorActual] = 1
    }else {
        acomulador[valorActual] ++
    }
    return acomulador
}

const repetidas = words.reduce(wordFrecuency,{})

console.log (repetidas) // { apple: 1, hello: 2, bye: 2, banana: 1, manzana: 1 }

* Array.find(condicion) devuelve el primer elemento que cumpla con una condicion en forma de funcion

* Array.findIndex () Devuelve el indice del primer elemento en un array que satisface una condicion en forma de funcion SI NO ENCUENTRA NADIE QUE LA CUMPLA DEVUELVE -1 

* Array.slice(desde, hasta+1) - Crea una copia superficial de una porcion del array espeficicada  por indices
    CREAR COPIA DE ATRAS HACIA ADELANTE
        Array.slice(-desde, hasta+1)
        - desde : el ultimo seria -1 y apartir de ahi seguirioa -2 ... etc 

       - si quiero los ultimos 3 pondria slice(-3)
       - desde el indice 2 hasta el penultimo (-2) : slice(2,-2)



----------------------------------------------------------------------------------------


Otros metodos que no cambian el array original: slice, concat, toReversed, slice, toSorted, toSoliced.