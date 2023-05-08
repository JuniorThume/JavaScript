// Desafio - Identificar se foi digitado um CPF ou E-mail

let patternCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/g
let patternEmail = /[\w]+@[a-zA-Z]+\.[a-zA-Z]+/g

let cpf = "036.217.880-18"
let email = "email@example.com"

function verificaInput(input) {
    if(patternCpf.test(input)){
        console.log("Foi digitado um CPF valido")
    }else if(patternEmail.test(input)) {
        console.log("Foi digitado um Email valido")
    }else {
        throw new Error("Entrada invalida")
    }
}

try {
    verificaInput(email);
}catch(e) {
    console.log("Error: " + e.message)
}

console.log("Fim da Validação")