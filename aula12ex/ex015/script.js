function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img')
    var saud = document.querySelector('div#saudacao')
    //var hora = new Date().getHours()
    var hora = 18
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >=12 && hora <= 18) {
        img.src = 'images/afternoon.jpg'
        document.body.style.backgroundColor = '#87cefa';
        saud.innerHTML = 'Boa tarde!'
    }else if (hora >18 && hora <= 23) {
        img.src = 'images/night.jpg'
        document.body.style.backgroundColor = '#012840';
        saud.innerHTML = 'Boa noite!'
    }
}