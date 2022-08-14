//Clase
class Ganado {
    constructor(especie,sexo, peso, edad){
        this.especie = especie
        this.sexo = sexo
        this.peso = peso
        this.edad = edad
    }

}

//Array
const ganados = []

//Evento formulario "submit" - carga de datos
const idForm = document.getElementById("idForm")

idForm.addEventListener("submit", (event) =>{
    event.preventDefault()

    const especie = document.getElementById("especie").value
    const sexo = document.getElementById("sexo").value
    const peso = document.getElementById("peso").value
    const edad = document.getElementById("edad").value

    const ganado1 = new Ganado (especie, sexo, peso, edad)

    ganados.push(ganado1)

    
    console.log (ganados)
    idForm.reset() 

    
})


//Mostrar los valores en el DOM

const btnMostrar = document.getElementById("btnMostrar")
const listado = document.getElementById("listado")

btnMostrar.addEventListener("click", () => {
    listado.innerHTML = ""
    ganados.forEach((ganado,indice) =>{
        listado.innerHTML +=
        `
        <tr>
            <td>${indice} </td>
            <td>${ganado.especie} </td>
            <td>${ganado.sexo} </td>
            <td>${ganado.peso} </td>
            <td>${ganado.edad} </td>
        </tr>
        `
    })
    
})


