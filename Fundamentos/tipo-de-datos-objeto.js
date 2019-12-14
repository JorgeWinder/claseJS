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
    cpu: "Core i5",
    monitor: {tamaño: "16pg", color: "negro"}
    }, 
    {disco_duro: "2TB", 
    memoria: "8GB", 
    cpu: "Core i7",
    monitor: {tamaño: "15pg", color: "azul"}
    },
    {disco_duro: "4TB", 
    memoria: "10GB", 
    cpu: "Core i9",
    monitor: {tamaño: "13pg", color: "blanco"}
    },
    {disco_duro: "1TB",
    memoria: "4GB",
    cpu: "Core i5",
    monitor: {tamaño: "17pg", color: "negro"}
    }

]

//lista_pcs.push({disco_duro: "4GB",memoria: "2GB", cpu:"Core i3"})

//lista_pcs.push(pc)
//lista_pcs.push({disco_duro: "1TB", memoria: "4GB", cpu: "Core i5"})


console.log(monitor)
console.log(pc)

console.log("Lista de objetos")
console.log(lista_pcs)

// Listar una lista de objetos //

document.write()

lista_pcs.forEach(function(elemento){
    console.log(elemento.cpu + " " + elemento.disco_duro)
    console.log(" Tamaño Monitor "+ elemento.monitor.tamaño)
    document.write(elemento.cpu + " " + elemento.disco_duro)

})

document.write('<br>')
document.write('<br>')

document.write(`
<table>
        <thead>
            <tr>
                <th data-field="id">Name</th>
                <th data-field="name">Item Name</th>
                <th data-field="price">Item Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Alvin</td>
                <td>Eclair</td>
                <td>.87</td>
            </tr>
            <tr>
                <td>Alan</td>
                <td>Jellybean</td>
                <td>.76</td>
            </tr>
            <tr>
                <td>Jonathan</td>
                <td>Lollipop</td>
                <td>.00</td>
            </tr>
        </tbody>
    </table>

    `)
