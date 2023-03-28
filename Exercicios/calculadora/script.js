const buttons = document.getElementsByTagName('input');
const display_val = document.getElementById('val')
const display_op = document.getElementById('oper')
const display_old_val = document.getElementById('old_val')
console.log(display_old_val)
const num_btn = document.getElementById('operators')

for(let i of buttons){
    if(Number(i.value) || i.value == 0 || i.value == '.'){
        i.addEventListener('click', setDisplay)
    }else if(i.value == '='){
        i.addEventListener('click', calculate)
    }else if(i.value == 'C'){
        i.addEventListener('click', clearDisplay)
    }else if(i.value == '+/-'){
        i.addEventListener('click', invert)
    }else {
        i.addEventListener('click', operators)
    }
}

function setDisplay() {
    let disp = String(display_val.innerText)
    if(disp.indexOf('.') != -1 && (this.value == '.' || disp == '')) {
        alert('Quer fazer reticiencias')
    }else{
        display_val.innerText += this.value
    }
    
}

function invert() {
    if(display_val.innerText != ''){
        display_val.innerText = Number(display_val.innerText)*-1
    }
}

function calculate() {
    if(display_val.innerText != '' && display_old_val.innerText !='' && display_op.innerText !=''){
        display_val.innerHTML = eval(`${display_old_val.innerText}${display_op.innerText}${display_val.innerText}`)
        display_old_val.innerText = ''
        display_op.innerText = ''   
    }
}

function operators(){
    
    if(display_old_val.innerText == ''){
        display_old_val.innerText = display_val.innerText
        display_val.innerHTML = ''
    }else{
        if(display_op.innerText !='%'){
            display_old_val.innerText = eval(`${display_old_val.innerText}${display_op.innerText}${display_val.innerText}`)
            display_val.innerText = ''
        } else {
            let aux = Number(display_val.innerText)
            console.log(aux)
            display_val.innerText = Number(display_val.innerText) * (aux/100)
        } 
    }
    if(display_old_val.innerText != ''){
        display_op.innerText = this.value
    }
}

function clearDisplay() {
    display_val.innerText = ''
    display_old_val.innerText = ''
    display_op.innerText = ''
}



