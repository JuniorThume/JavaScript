//Validando CEP com RegEx

let cep = "01234-050"

let pattern = /\d{5}-\d{3}/g

//Flags 
    //g - global
    //i - case sensitive
    //m - multiline

function isValidCep(cep) { 
    if(pattern.test(cep)){
        console.log("Isto é um CEP válido")
    }else {
        console.log("Isto é um CEP inválido  :(")
    }
 }

 isValidCep(cep);
    