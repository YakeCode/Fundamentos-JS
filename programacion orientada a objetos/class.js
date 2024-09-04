//Herencia
class Animal{
    constructor(name,type){
        this.name = name
        this.type = type
    }
    emitirSonido(){
        console.log(`El animal ${this.name} emite un sonido`)
    }
}

class Perro extends Animal{         /* estends : me exriende las propiedades de la clase animal*/
    constructor (name, type, raza) {
        super (                     /* super : me deja usar las propiedades que me traigo de otra clase*/
            name, 
            type,
        )
        this.raza = raza
    }

    emitirSonido () { /* al utilizar una extencion de alguna otra calse, podemos re escribir los metodos aunque tengan el mismo nombre  */

        console.log (`èl perro ladra`)
    }

    correr (){
        console.log (`${this.name} corre `)
    }
}

/*----------------------Generando Instancias----------------------- */

const perro1 = new Perro('nicolas', 'perro', 'pug')

console.log(perro1)

perro1.correr()
perro1.emitirSonido()


//////////////////////// Prototipos

perro1.nuevoMetodo = ()=>{
    console.log('este es un nuevo metodo') // se agrega solo a la instancia
}

perro1.prototype.segundoMetodo = ()=>{  // no funciona porque la instancia no tiene prototipo
    console.log('segundo metodo')
}

Perro.prototype,segundoMetodo = ()=>{
    console.log('ingresado de forma correcta')
}
