const myPromise = new Promise((resolve, reject) => {
    const nome = "JUNIOR"

    if(nome == "JUNIOR") {
        resolve("Login realizado com sucesso")
    }else {
        reject("Usuário não cadastrado")
    }
})


myPromise.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})


//Encadeamento de then's
const myPromise2 = new Promise((resolve, reject) => {
    const nome = "JUNIOR"

    if(nome == "JUNIOR") {
        resolve("Login realizado com sucesso")
    }else {
        
        reject("Usuário não cadastrado")
    }
})


myPromise.then((data)=>{
    return data.toUpperCase()
}).then((StringModificada)=> {
    console.log(StringModificada)
})

//Retorno do catch

const myPromise3 = new Promise((resolve, reject) => {
    const nome = "JAO"

    if(nome == "JUNIOR") {
        resolve("Login realizado com sucesso")
    }else {
        throw new Error("Usuário não cadastrado")
        reject("Usuário não cadastrado")
    }
})

myPromise3.then((data)=> {
    console.log(data)
}).catch((err)=>{
    console.log("Aconteceu um erro: " + err)
})


//Resolver varias promessas com Promise.all()

const p1 = new Promise((resolve,reject) => {
    setTimeout(()=> {
        resolve("p1 ok")
    },2000)
    
})

const p2 = new Promise((resolve,reject) => {
    resolve("p2 ok")
})
const p3 = new Promise((resolve,reject) => {
    resolve("p3 ok")
})

const resolveAll = Promise.all([p1,p2,p3]).then((data)=> {
    console.log(data)
})

//Resolver varias promessas com Promise.race()

const p4 = new Promise((resolve,reject) => {
    setTimeout(()=> {
        resolve("p4 ok")
    },2000)
    
})

const p5 = new Promise((resolve,reject) => {
    resolve("p5 ok")
})
const p6 = new Promise((resolve,reject) => {
    resolve("p6 ok")
})

const resolveRace = Promise.race([p1,p2,p3]).then((data)=> {
    console.log(data)
})

//Fetch request
// Fetch API

const userName = 'JuniorThume'

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
}).then((response)=> {
    console.log(typeof response)
    return response.json()
}).then((data)=> {
    console.log(data.id)
}).catch((error)=> {
    console.log(error.toString())
})
