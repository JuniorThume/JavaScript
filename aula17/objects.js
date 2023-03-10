let pessoa = {
    nome: 'Junior',
    olho: 'Verde',
    cabelo: 'Castanho',
    esporte: 'Futebol',
    idade: 22,

}

console.log(pessoa['nome'])

let jsonPessoa = JSON.stringify(pessoa)
let jsonstring = jsonPessoa.toString()

console.log(jsonstring)