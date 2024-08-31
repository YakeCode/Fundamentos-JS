# Programacion orientada a objeto POO

### Anatomia de un objeto

Es una estructura de datos que puede tener propiedades o metodos { key : value}

###### Metodos

    Los metodos son funciones que nos ayudan a dar interaccion

    const obj ={
        propiedad:valor,
        propiedad:valor
        
        function hi (){
            return `hola ${obj.priedad}`
        }
    }

    const persona = {
        name : jhon,
        edad : 30,
        direccion:{
            calle : "av 1"
            ciudad : "new man"
        },

        saludar (){
            return `hola soy ${persona.name}`
        }
    }

### Agregar propiedades

objeto.propiedadAingresar = valor para esta propiedad

    persona.telefono = 123456789

### Agregar Metodos

objeto.propiedadAingresar = ()=>{
    metodo a ingresar
}

    persona.despedirse = ()=> {
        console.log(`chao, si necesitas algo me llamas al numero numero ${persona.telefono}`)
    }

    const persona = {
        name : jhon,
        edad : 30,
        direccion:{
            calle : "av 1"
            ciudad : "new man"
        },

        saludar (){
            return `hola soy ${persona.name}`
        },

        telefono : 123456789,

        despedirse : ()=> {
        console.log(`chao, si necesitas algo me llamas al numero numero ${persona.telefono}`)
        }
    }

### Eliminar metodos o propiedades 

Para eliminar metodos o propiedades lo podemos hacer a con la palabra reservada delete mas la propiedad o meodo que deseamos eliminar

    delete objeto.propirdad a eliminar

        delete persona.direccion;

## Funcion Constructora

El objetivo de esta funcion constructora es poder crear objetos de forma escalable. el nombre de la funcion va a empezar por mayuscula y en los parametros se le van a enviar las cuales van a ser las propiedades

    function Persona( name, lastName, age,) {
        this.name = name
        this.lastName = lastName
        this.age = age

    }

###### nota:
            Todos los objetos creados con la funcion constructora se le va a llamar instancias

### Crear instancias con la funcion constructora

const nombre-nuevo-obj = new nombre-funcion-contructora (valores que se le de lo que se le envia a la funcion)

    const persona1 = new Persona ('juan', 'perez', 30)