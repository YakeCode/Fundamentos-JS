const usersDatabase = [
    {
        username: "andres",
        password: "123",
    },
    {
        username: "caro",
        password: "456",
    },
    {
        username: "mariana",
        password: "789",
    },
];

const usersTimeline = [
    {
        username: "Estefany",
        timeline: "Me encanta Javascript!",
    },
    {
        username: "Oscar",
        timeline: "Bebeloper es lo mejor!",
    },
    {
        username: "Mariana",
        timeline: "A mí me gusta más el café que el té",
    },
    {
        username: "Andres",
        timeline: "Yo hoy no quiero trabajar",
    },
];

let userName;
let password;

userName = 'mariana';
password = '789';

let usuarioEncontrado;

function usuarioExistente(username, password) {
    usuarioEncontrado = false;
    
    for (let i = 0; i < usersDatabase.length; i++) {
        if (
            usersDatabase[i].username === userName && 
            usersDatabase[i].password === password
        ) {
            console.log('BIENVENID@');
            usuarioEncontrado = true;
            break;
        }
    }
    
    if (!usuarioEncontrado) {
        console.log('Correo o contraseña incorrectos');
    }

    return usuarioEncontrado
}

usuarioExistente(userName, password);

///////////////////////


let signIn = ()=>{
    if (usuarioEncontrado === true){
        console.log(`Bienvenido ${userName}`)
    }
}

signIn(usuarioEncontrado)


