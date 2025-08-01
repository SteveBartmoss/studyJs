//seleccionar elementos por su clase "example" solo con js puro

const elements = document.getElementsByClassName("example")
const elements2 = document.querySelectorAll(".example")

// Funcion para sumar solo numeros pares
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function Sumar(arrayNums){

    let suma = 0

    arrayNums.forEach(element => {
        if(element%2==0){
            suma += element
        }    
    });

    return suma
}

console.log(suma(nums))
