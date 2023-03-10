var ini = document.querySelector('#inicio')
var fim = document.querySelector('#fim')
var pas = document.querySelector('#passo')
var res = document.querySelector('#res')
function contar(){
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        alert('Algum campo não foi preenchido')
    }else {
        let ninicio = Number(ini.value)
        let nfim = Number(fim.value)
        let npasso = Number(pas.value)
        let parag = res.querySelector('p')
        parag.innerHTML = "Contando: <br>"
        if(npasso <= 0){
            alert('Valor invalido para o PASSO, considerando como 1')
            npasso = 1
        }
        if (ninicio > nfim){     
            for(var i = ninicio;i > nfim; i-=npasso){
                parag.innerHTML += `${i} \u{1F449} `  
            }  
        }else {
            for(var i = ninicio;i < nfim; i+=npasso){
                parag.innerHTML += `${i} \u{1F449}`
            }
        }
        parag.innerHTML += `${nfim} \u{1F3C1}`
    }
}