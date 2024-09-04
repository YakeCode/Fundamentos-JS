const usersDatabase=[
    {
        username:"andres",
        password:"123",
    },
    {
        username:"caro",
        password:"456",
    },
    {
        username:"mariana",
        password:"789",
    },
];

const usersTimeline=[
    {
        username:"Estefany",
        timeline:"Me encata Javascript!",
    },
    {
        username:"Oscar",
        timeline:"Bebeloper es lo mejor!",
    },
    {
        username:"Mariana",
        timeline:"A mi me gusta mÃ¡s el cafÃ© que el tÃ©",
    },{
        username:"Andres",
        timeline:"Yo hoy no quiero trabajar",
    },
];

let userName;
let password;

function usuarioExistente (username, password) {
    for (let i = i < usersDatabase.length;i ++;){
        if (
            usersDatabase[i].userName === userName && 
            usersDatabase[i].password === password
        ){
            console.log ('BIENVENID@')
        } else {
            console.log('correo o contraseña incorrectos')
        }
    }
}

