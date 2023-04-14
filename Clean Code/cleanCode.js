//1 - Nomeando variáveis e funções

// jeito errado
const d = new Date();
const x = 5;
const y = 10;

// jeito certo
const currentDate = new Date();
const speed = 5;
const numberOfTires = 4;

// jeito errado
function fn(a, b) {
    return a * b;
}

// jeito certo
function multiply(num1, num2) {
    return num1 * num2;
}

// jeito errado
const p = { n: "João", a: 22 };

// jeito certo
const person = { name: "João", age: 22 };

// 2- organização de código

const name = "Junior";
const age = 21;

if (x == 5) {
    console.log("OI");
} else {
    console.log("Outra coisa");
}

// 3 - comentarios
// Evite redundâncias e comentarios desnecessarios
// Documente funções com argumentos a serem passados e explique a lógica

// jeito errado
function addNumber(num1, num2) {
    return a + b;
}

//jeito certo

/*
 *Soma dois numeros e retorna o resultado
 *@param {number} a - O primeiro numero
 *@param {number} b - O segundo numero
 *@return {number} O resultado da soma
 */
function addNumber2(num1, num2) {
    return a + b;
}

//jeito errado
const result1 = x < 0 ? 0 : x > 100 ? 100 : x;

//jeito certo
//garante que o valor esteja entre 0 e 100
const result2 = x < 0 ? 0 : x > 100 ? 100 : x;

//4 - Duplicação de código
// Exige eventuais refatorações
const SPACE = ''

function getFullName(firstName, lastName){
    const fullName = firstName + SPACE + lastName;
    return fullName
}

function getEmployeeFullName(firstName, lastName){
    const fullName = firstName + SPACE + lastName;
    return fullName
}


function getPrice(product) {
    let price

    if(product === "Caneta"){
        price = 20
    }else if(product === "Apagador"){
        price = 30
    }else if(product === "Lápis"){
        price = 5
    }

    return price
}

const products = {
    caneta: 20,
    apagador: 30,
    lápis: 5, 
}

function getProductPrice(product){
    return products[product]
}


//5 - estruturas de controle claras

//jeito errado
if(!isNotValid){
    //....
}

//jeito certo
if(isValid){
    //....
}


//jeito errado
let message1
if(isSucess){
    message1 = "Sucesso"
}else {
    message1 = "Falha"
}

// jeito certo

const message2 = isSucess ? "Sucesso" : "Falha"