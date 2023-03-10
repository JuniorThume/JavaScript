var array = [];
var num = document.getElementById('txtnum')
var sect = document.getElementById('secti')
var sel = document.getElementById('selnums')

function isNumber(n) {
    if(Number(n) >= 0 || Number(n) <=100){
        return true
    }else {
        return false
    }
}

function inList(list, num){
    if(list.indexOf(num) == -1) {
        return false
    }else{
        return true
    }
}

function adicionar(){
    let delelem = document.getElementById('outputs')
    if(!(delelem==null)){
        sect.removeChild(delelem)
    }
    sel.style.display = 'block' 
    if(num.value.length == 0 || inList(array, Number(num.value)) || (Number(num.value) > 100 || Number(num.value) <= 0)) {
        alert('[ERROR] Insira um número ou verifique se o número já se encontra na lista')
        num.value=''
        num.focus()
    }else{
        array.push(Number(num.value))
        var item = document.createElement('option')
        item.innerHTML = `Valor ${Number(num.value)} adicionado`
        sel.appendChild(item)
        num.value = ""
        num.focus()
    }
}

function somar(p) {
    let somaF = null
    for(let index in p){
        somaF += p[index]
    }
    return somaF
}

function arrayInfos(){
    sel.style.display = 'none';
    var div = document.createElement('div');
    div.setAttribute('id','outputs')
    var p = []
    let element = null
    for(let i = 0; i < 5; i++){
        element = document.createElement('p')
        element.innerHTML = ''
        p.push(element)
    }
    for(let elem in p){
        switch(Number(elem)){
            case 0:
                p[elem].innerHTML = `Ao todo, temos ${array.length} números cadastrados`
                break
            case 1:
                p[elem].innerHTML = `O maior valor informado foi ${Math.max(...array)}`
                break
            case 2:
                p[elem].innerHTML = `O maior valor informado foi ${Math.min(...array)}`
                break
            case 3:
                p[elem].innerHTML = `Somando todos os valores, temos ${somar(array)}`
                break
            case 4:
                p[elem].innerHTML = `A média dos valores digitados é ${somar(array)/array.length}`
                break
        }
    }
    sect.appendChild(div)
    for(let addelem in p){
        div.appendChild(p[addelem])
    }  
}



