# Class - Clase

Una clase es un una especie de molde de los cuales se van a generar objetos

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

const persona1 = new Persona ('juan', 30)