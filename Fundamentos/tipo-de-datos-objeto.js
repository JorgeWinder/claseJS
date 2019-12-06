// Forma 1 para crear objetos //

const monitor = new Object()

monitor.id = "2354"
monitor.color = "Negro"
monitor.tamano = "19 pulgadas"

// Forma 2 para crear objetos //

const pc = {disco_duro: "1TB", memoria: "4GB", cpu: "Core i5"}

//----------------------------//

let lista_pcs = [
    {
    disco_duro: "1TB", 
    memoria: "4GB", 
    cpu: "Core i5"
    }, 
    {disco_duro: "2TB", 
    memoria: "8GB", 
    cpu: "Core i7"
    },
    {disco_duro: "4TB", 
    memoria: "10GB", 
    cpu: "Core i9"
    }
]

//lista_pcs.push(pc)
//lista_pcs.push({disco_duro: "1TB", memoria: "4GB", cpu: "Core i5"})


console.log(monitor)
console.log(pc)

console.log("Lista de objetos")
console.log(lista_pcs)


