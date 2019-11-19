// AND // OR //

/*

    AND = &&
    OR = || 

*/

if (false || true) {
    console.log("Entra")
}else{
    console.log("No entra")
}

if (2==3) {
    console.log("Es igual")
} else {
    console.log("No es igual")
}

if (2!=2) {
    console.log("Es diferente")
} else {
    console.log("No es diferente")
}


if (5==="5") {
    console.log("Es igual")
} else {
    console.log("No es igual")
}

const constante = function(){
    console.log("Es funcion!!!!")
}

constante()

console.log(typeof constante)   

const password = 2354

if(typeof password=="number" && password==2354){
    console.log("Es numérico")    
}else{
    console.log("No es numérico es: " + typeof password)    
}

//------------------------

