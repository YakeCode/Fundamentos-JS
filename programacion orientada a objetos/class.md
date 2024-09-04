# Class - Clase

Una clase es un un es molde de los cuales se van a generar objetos



    class Objeto {
        constructor(var1, var2) {
            this.key1 = var1;
            this.key2 = var2
        }
        metodo(){
            codigo a ejecutar
        }
    }

class Persona  {
    constructor (name, age){
        this.name = name
        this.age = age
    }
    saludar(){
        `hola, soy ${this.nombre}`
    }
}

### crear un objeto con la clase

const persona1 = new Persona ('juan', 30) -> esto crea un objeto que a su vez es una instancia de la clase padre

------------------------------------------------------------------------------------------------------

## Prototipos Y herencia 

La propiedad prototipo solo existe en funciones de objetos [Funcion constructora y Clases]

el prototipo va a tener los mismos metodos y las mismas propiedades que vamos a construir en lo que son las clases o las funciones constructoras para que cuando nosotros tengamos alguna instancia o alguna otra clase que extienda de nuestra clase principal podamos compartir los metodos y propiedades

la propiedad de protptipo que se genera sola cuando usamos alguna funcion de objetos [Funcion constructora y Clases] solo funciona con funciones y clases

las instancias no tienen la propiedad de prototipo


#### Prototipo 

Prototipo es un mecanismo por el cual los objetos en JavaScript pueden heredar propiedades y métodos de otros objetos. Cada objeto en JavaScript tiene una propiedad interna llamada [[Prototype]], que apunta a otro objeto, conocido como su prototipo. Cuando accedes a una propiedad o método en un objeto, JavaScript busca primero en el propio objeto. Si no la encuentra, busca en su prototipo, y así sucesivamente hasta llegar al final de la cadena de prototipos. ejemplo:

##### Clase pincipal

class Animal {
    constructor(name,type){
        this.name = name
        this.type = type
    }
    emitirSonido(){
        console.log(`El animal ${this.name} emite un sonido`)
    }
}

#### Herencia

Herencia en JavaScript se refiere al proceso mediante el cual un objeto puede adquirir las propiedades y métodos de otro objeto.

##### Otras clases que utilizan usan los metodos y propiedades de la clase principal

Nota. nos deja rescribir los metodos

###### Extends

Se utiliza para crear una clase nueva trayendo propiedades y metodos de otra clase llamada

    class [claseNueva] extends [Clase padre]{}
    
        class Perro extends Animal{}

###### Super ()

Palabra reservada para traer las propiedades o metodos de una clase padre

    super ( [propiedades a traer separadas por ','] )

    class Perro extends Animal{ 
        constructor (propiedadAtraer1, propiedadAtraer2, [propiedad creada para esta clase]) {
            super ( propiedadAtraer1, propiedadAtraer2,)
            this.[propiedad creada para esta clase] = [propiedad creada para esta clase]
        }
    }
-----------------

class Perro extends Animal{
    constructor (name, type, raza) {
        super (name,type,)
        this.raza = raza
    }
}

##### Prototipo en la practica

Para crear una prototipo para una instancia, debemos apuntar directamente a la clase o funcion constructora, pues las instancias no tienen por dentro [[Protpype]]

###### Para agregarlo solo a la instancia especifica
perro1.nuevoMetodo = ()=>{
    console.log('este es un nuevo metodo') // se agrega solo a la instancia
}

###### Para agregarlo a todas las instancias 

perro1.prototype.segundoMetodo = ()=>{  // no funciona porque la instancia no tiene prototipo
    console.log('segundo metodo')
}

Perro.prototype,segundoMetodo = ()=>{
    console.log('ingresado de forma correcta')
}
