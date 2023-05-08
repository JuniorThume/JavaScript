/*var str = "Hoje é 18/04 e amanhá será 19/04. Meu aniversário é 22/11"

var regex = /[\d]{1,2}/g

    var teste = str.match(regex)
    console.log(teste)
    console.log(teste)
*/

var str = "O pato chato tem sapato de gato"
var regex = /([gp]|ch)ato/g
var arr;

while(arr = regex.exec(str)){
    var msg = `Encontrei ${arr[0]} em ${arr.index}.\n Proximo começa em ${regex.lastIndex}`
    console.log(msg)
}

