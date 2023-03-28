const submit_btn = document.querySelector('input[type="submit"]');
const input_conv = document.querySelector('#convidado');
console.log(input_conv.value)
const div_conv = document.querySelector('#convidados');
const total = document.querySelector('#total')
const popUp_elem = document.querySelector('#popUp')
const convidados = [];
let nome = "";
submit_btn.addEventListener('click', validations)
document.addEventListener('keypress', function(e){
    if(e.key == 'Enter') {
        validations()
    }
})

function adicionaConv() {
    let nome = String(input_conv.value)
    if(nome == '') {
        alert("Digite o nome do convidado no campo abaixo")
    }else if(convidados.length < 80){
        convidados.push(nome)
        let item = document.createElement('div');
        item.innerText = `${nome}`
        item.setAttribute('class', 'convidado_adicionado')
        item.addEventListener('click', remove_item)
        div_conv.appendChild(item)
        input_conv.value = ""
        input_conv.focus()
        total.innerText = String(convidados.length)
    }
}

function validations(){
    if(convidados.indexOf(String(input_conv.value))== -1){
        if(input_conv.value.length < 3 && input_conv.value > 0){
            if(Number(input_conv.value)){
                alert("Não é possível adicionar valores em uma lista de convidados")
                input_conv.value = ""
                input_conv.focus()
            }else if(confirm(`Tem certeza que deseja adicionar ${input_conv.value} na lista de convidados`)){
                adicionaConv()
            }
        }else{
            adicionaConv()
        }
    }else {
        alert("Convidado já consta na lista")
        input_conv.value = ""
    }
}

function remove_item(){
    
    let val_rem = this.innerText
    let ind_rem = convidados.indexOf(this.innerText)
    convidados.splice(ind_rem, 1);
    div_conv.childNodes.forEach(element => {
        if(element.innerText == val_rem){
            div_conv.removeChild(element)
        }
    })
    total.innerText = String(convidados.length) 
}


