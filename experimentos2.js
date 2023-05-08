function esperaPor(tempo) {
    const futuro = Date.now() + tempo;
    while(Date.now() < futuro) {}
}

setTimeout(()=>{console.log("EXEC#1")},400)
setTimeout(()=>{
    esperaPor(3000)
    console.log("EXEC#2")
},300)

esperaPor(2000)
console.log("Fim")