var num = document.getElementById('txtnum')
var tab = document.getElementById('tabuada')

function gerar(){
    var item = null
    tab.innerHTML=''
    let sel = document.createElement('select')
    let msg = document.createElement('p')
    msg.innerHTML = 'Tabuada saindo: '
    sel.setAttribute('id', 'seltab')
    sel.setAttribute('name', 'sel')
    sel.setAttribute('size', '11')
    let val = Number(num.value)
    for (var i = 0; i <=10; i++){
        item = document.createElement('option')
        item.innerHTML = `${i} x ${val} = ${i * val}`
        sel.appendChild(item)
    }
    tab.appendChild(msg)
    tab.appendChild(sel)
}