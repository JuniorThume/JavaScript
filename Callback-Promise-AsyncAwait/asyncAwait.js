// sintaxe 

/*function primeiraFuncao(){
    return new Promise((resolve)=> {
        setTimeout(()=>{
            console.log("Esperou um pouco")
            resolve()
        },2000)
    })
}

async function segundaFuncao(){
    console.log("INICIOU")

    await primeiraFuncao()

    console.log("TERMINOU")
}

segundaFuncao()
*/

//aplicação prática

function getUser(id){
    return fetch(`https://reqres.in/api/users?${id}`)
    .then(data => data.json())
    .catch((err) => console.log(err))
}


async function showUserName(id){
    const user = await getUser(id);

    console.log(user.data[id-1].first_name)
}

showUserName(3)