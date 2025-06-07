export class Person{

    constructor(namePerson,age,country){
        this.namePerson = namePerson
        this.age = age
        this.country = country
    }

    introduceYourself(){
        return  `Hi Im ${this.namePerson}, I m ${this.age} years old and I live in ${this.country}`
    }
    
}