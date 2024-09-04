# Operadores de comparación

 * = : Asignar valor
 * == : Compara si son iguales -> puede generar errores
 * === : Estrictamente igual
 * != : Negación - diferente de -> Boolean
 * !== : Negación tanto del valor como en el tipo de dato -> estrictamente diferentes
 * '>' : Mayor a 
 * '<' : Menor a
 * '>=' : Mayor o igual
 * '<=' : Menor o igual

## Operadores Lógicos

 * && : Operador [ Y ] = Se deben cumplir ambas condiciones
 * || : Operador [ O ] = Se puede cumplir una O la otra
 * ! : Operador [ NO ] = Si el valor no es esto, si la condición no es esto -> negación

____________________________________________________________________________________________

# Estructuras de Control

### Condicional if [ SI ]

    if (condicional comparación algo) {
        si la condición se cumple entonces se ejecuta este código
    } else {
        si no se cumple la anterior, se ejecuta este
    }

#### Variante if

    if (condición1) {
        Código a ejecutar si la condición1 es verdadera
    } else if (condición2) {
        Código a ejecutar si la condición1 es falsa y la condición2 es verdadera
    } else if (condición3) {
        Código a ejecutar si las condiciones anteriores son falsas y la condición3 es verdadera
    } else {
     Código a ejecutar si todas las condiciones anteriores son falsas
    }

____________________________________________________________________________________________

### Condicional switch

    switch(condición){
        case valor1: 
            código a ejecutar
            break;
        case valor2: 
            código a ejecutar
            break;
        case valor3:
        case valor4:
            código a ejecutar si se cumple alguna de las 2
            break;
        default :
            código a ejecutar
    }

###### Ejemplo : 

        let expr = "Uvas";
        
        switch(expr){ // ===
            case "Naranjas":
                console.log("Las naranjas cuestan $20 el kilo");
                break;
            case "Manzanas":
                console.log("Las manzanas cuestan $43 el kilo");
                break;
            case "Platanos":
                console.log("El plátano está en $30 el kilo");
                break;
            case "Mangos":
            case "Papayas":
                console.log("Los mangos y las papayas cuestan $25 pesos el kilo");
                break;
            default:
                console.log(`Lo siento, no contamos con ${expr}`);
        }

## Loops - Ciclos

### For

Itera cada elemento de una lista hasta cumplir la condicion

    for (variable; condición; incremento){
        ejecuta este código
    }

###### Ejemplo : 

    let list = ["eat","sleep","code","repeat"]

    for (let i = 0; i '<' list.length; i++){
        console.log(`iterando ${i}`)
    }
        iterando 0
        iterando 1
        iterando 2
        iterando 3

### For Of

for of se utiliza sobre elementos iterables para el [ arrays, "strings" ] y son estos 2 porque ambos son tomados como una lista de algo. Este ciclo itera cada elemento de una lista dada

    for (variable of objeto){
        codigo que ejecuta
    }

    let canasta=["manzana","pera","naranja","uva"];
    
    for(fruta of canasta){
        console.log(fruta);
    }

### For In

se utiliza para iterar objetos

    for (variable on objetoAiterar){
        codigo que ejecuta
    }

    const listaDeCompras={
        manzana:5,
        pera:3,
        naranja:2,
        uva:1,
    };
    
    for(fruta in listaDeCompras){
        console.log(fruta);
    }
        manzana
        pera
        naranja
        uva

    for(fruta in listaDeCompras){
        console.log(`${fruta} : ${listaDeCompras[fruta]}`);
    }
        manzana : 5
        pera : 3
        naranja : 2
        uva : 1

### Ciclo While

se va a ejecutar siempre y cuando la condicion dada se cumpla. con while se debe poner mucho cuidado porque se puede ejecutar un ciclo infiniito si no se hace bien

    while (condicion){
        se ejecuta siempre y cuando la consicion se cumpla
    }

    let contador = 0;
    while(contador<10){
        console.log(contador);
        contador++;   // si no ponemos el incrementador en este caso, entramos en un bucle o siclo infinito pues la condicion siempre se va a cumplir
    }

### Ciclo do While

Primero se ejecuta el codigo antes de validar la condicion

    do {
        codigo a ejecutar
    } while ( condicion)

    let contador=0;
    do {
        console.log(contador);
        contador++;
    } while(contador<10);