
function fn3(){
    setTimeout(() => {
        console.log("timeout");
    },3000)
    console.log("Fn3")
}
function fn2(){
    fn3();
    console.log("end fn2")
}
function fn1(){
    fn2();
    console.log("end fn1")
}

function main(){
    fn1();
    console.log("end main")
}

main()
