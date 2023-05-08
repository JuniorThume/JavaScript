let reg = /([\d]{2})\/([\d]{2})(?:\/([\d]{2,4}))/g
let str = "Eu nasci no dia 22/11/2001"
let aux = reg.exec(str)
console.log(`Eu nasci no dia ${aux[1]} do mes ${aux[2]} no ano de ${aux[3]}`)