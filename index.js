import { Person } from "./week1/persona.js"


let personaCinco = new Person('Steve',25,'Mexico')

console.log(personaCinco.namePerson)
console.log(personaCinco.age)
console.log(personaCinco.country)


let personValues = {...personaCinco}

console.log(personValues)

const whoIs = (persona) => {
    return `Hello my name is ${persona.namePerson}, I m ${persona.age} years old and I m from ${persona.country}`
} 

console.log(whoIs(personaCinco))

console.log(personaCinco.introduceYourself())

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