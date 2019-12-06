
let lista = [12, "hola", true]

//-----------------

console.log(lista[0])
console.log(lista[1])
console.log(lista[2])

console.log("Cantidad de elementos: " + lista.length)

//----------------

for(let i=0;i<lista.length;i++){
    console.log(lista[i])
}

//-----------------

lista.push(22.10)

lista.forEach(function(elemento){
    console.log("Push en lista: " + elemento)
})

lista.pop()

lista.forEach(function(elemento){
    console.log("Pop en lista: " + elemento)
})

lista.reverse()

lista.forEach(function(elemento){
    console.log("Reverse en lista: " + elemento)
})

//-----------------------------//

console.log(lista.indexOf(false))

//-----------------------------//

lista.shift()
console.log(lista)


lista.unshift(false)
lista.unshift(22,12)
console.log(lista)

//------------------------//

let cadena = "JOrge , Winder , 31"
const listacadena = cadena.split(",")

listacadena.forEach(function(elemento, index){
    // listacadena[index]  =  elemento
    listacadena[index]  = elemento.trim()
})

console.log(listacadena)





