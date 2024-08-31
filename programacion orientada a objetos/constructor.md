# Funcion Constructora

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

### Agregar propiedades y a la funcion constructora

nombre de la funcion constructora.prototype.propiedad a ingresar = 'valor por defecto'

    Persona.prototype.phone = '0000'

    Persona.prototype.hello = ()=>{
        `hola. soy ${this.name}`
    }