let numbers = [1,2,4,7,9,11,34,45,56,76,65,34243,654,4324,543,654,765,23,3453,321,543,75]
let par = []
let impar = []

let result = separa_impar_par(numbers, (x) => {
    if(x % 2 == 0){
        par.push(x)
    }else{
        impar.push(x)
    }
})
console.log(result)
console.log(`Vetor com os pares: ${par}`)
console.log(`Vetor com os impares: ${impar}`)

function separa_impar_par(array, callback){
    for(let i of array){
        callback(i);
    }
}

