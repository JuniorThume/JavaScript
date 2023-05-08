let btnAlt = document.getElementById("btnAlt")
let btnLarg = document.getElementById("btnLarg")
let outAlt = document.getElementById("altVal")
let outLarg = document.getElementById("largVal")

btnAlt.addEventListener('click', () =>{
    outAlt.innerText = window.innerHeight + "px"
})

btnLarg.addEventListener('click', () => {
    outLarg.innerHTML = innerWidth + "px"
    window.resizeTo()  
})




