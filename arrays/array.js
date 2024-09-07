const numbers = [1,2,3,4,5]

let currentValue = 0;

for (let i = 0; i < numbers.length; i++){
    
    currentValue += numbers[i]
}

console.log (currentValue)

////////////

let suma = numbers.reduce((acomulador, valorActual)=>acomulador + valorActual, 0 )

console.log (suma)

/////////////////

let sum = 0

let funcionsumadora = (num)=> {
    return sum += num //sum = sum + num 
    }

let sumarforeach = numbers.forEach(funcionsumadora)

console.log(`este es el resultado de for each ${sum}`)

/////////////////////
const duplicar = numbers.map((numbers)=>numbers * 2)

console.log (duplicar)

    numbers.forEach((num)=>console.log(num))// 2 4 6

//////////// filter 

const numbersforfilter = [1,2,3,4,5,6]

let numerospares = (num)=>{
    return num  % 2 === 0 // divisibles por 2
}

let newNumbers = numbersforfilter.filter(numerospares)

console.log (newNumbers)

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

console.log (repetidas) 

/////////////////

const numbersforfind = [1,2,3,4,5,6]

let functionfind = (numberfind)=>{
    return numberfind > 3
}
const sigientenumero = numbersforfind.find(functionfind)

console.log(`el numero de find deberia ser 4 y es ${sigientenumero}`)

const indexfind = numbersforfind.findIndex(functionfind)

console.log(`el index de la condicion es [ ${indexfind} ]`)

///////////////////////////