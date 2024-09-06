# Array's

#### Construccion de arrays

 * array
        const variable = Array (parametros a ingresar)
            const fruits = Array ('apple', 'banana') -> fruits [ 'apple', 'banana' ]
 * array literal
        const variable = [ parametros]
            const oneNumber = [ 1 ]
            const empty = []

### Propiedades de arrays

##### length
    Provee la cantidad de elementos que contiene un array


## Confirmar que un array es un array

    const isArray = Array.isArray('array a validar') -> boolean

## ... Spread Operator

* Copia arrays
    original [1,2,3,4,5]
    copia = [...original]
* Combina arrays
    arr1 [123]
    arr2 [abc]
    combina = [...arr1, ...arr2]
* Crea arrays con elementos adicionales
    arr [123]
    conElementos = [...arr, 'string',number]

