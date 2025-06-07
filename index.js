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