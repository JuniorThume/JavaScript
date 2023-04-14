


sum(2,2,print)

function sum(n1, n2, callback){
    console.log(n1+n2)
    callback()
}

function print() {
    console.log("Hello world!")
}