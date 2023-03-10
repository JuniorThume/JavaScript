var btn = document.getElementById('btn')
btn.addEventListener('click', verifica)
var fano = new Date().getFullYear();
var ano = document.querySelector('#input-ano')
var img = document.getElementById('img')
var desc = document.querySelector('div#msg > p')
function verifica(){
    img.style. display = 'block'
    if(ano.value.length == 0 || Number(ano.value) > fano){
        alert('[ERROR] Verifique os dados e tente novamente')
    }else{
        var radsex = document.getElementsByName('radsex')
        var idade = verificaAno()
        var anos = fano - Number(ano.value)
        var sexo = undefined
        
        if(radsex[0].checked){
            sexo = 'Feminino'
        }else{
            sexo = 'Masculino'
        }
        desc.innerHTML = `Foi identificada uma pessoa do sexo <strong>${sexo}</strong> com ${anos} anos!`
        img.src = `images/${idade}${sexo[0]}.jpg`
    }
}

function verificaAno(){
    var idade = new Date().getFullYear()
    idade -= ano
    var faixa = undefined
    if(idade <12 && idade >=0){
        faixa = 'crianca'
    }else if(idade >=12 && idade < 18){
        faixa = 'jovem'
    }else if(idade >=18 && idade < 60) {
        faixa = 'adulto'
    }else {
        faixa = 'idoso'
    }
    return faixa
}