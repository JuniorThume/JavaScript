let pessoas = ["Joao", "Tanha", "Jose", "Junior","Leo","Digo"]
let div = document.querySelector("#nomes")

showDivs()

function createDiv(name) {
    let par = document.createElement("p");
    par.addEventListener('click',)
    par.innerHTML = `Nome do cidadão: <strong>${name}</strong>`
    div.appendChild(par)
}

function showDivs() {
    div.innerHTML = ""
    save()
    let arrPeople = JSON.parse(localStorage.getItem("pessoas"))
    console.log(arrPeople)
    for(let per in arrPeople){
        createDiv(arrPeople[per])
    }
}


function remove(index){
    if(pessoas.length == 0){
        alert("Lista já está vazia")
    }
    pessoas.splice(index, 1);
    showDivs()
}


function save() {
    localStorage.setItem("pessoas", JSON.stringify(pessoas))
}
