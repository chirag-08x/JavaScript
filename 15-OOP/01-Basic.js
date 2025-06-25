// OOP stands for Object-Oriented Programming. It's a programming paradigm based on the concept of "objects", which contain data (properties) and behavior (methods).

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(location){
        console.log(`Hello my name is ${this.name} and I'm ${this.age} years old, and I am from ${location}`)
    }
}

const p1 = new Person("chirag", 24);
p1.greet("Pune")



// Inheritance
class Employee extends Person{
    constructor(name, age, company){
        super(name, age);
        this.company = company
    }

    work(){
        console.log(`${this.name} has passed the interview of ${this.company}`)
    }
}

const e1 = new Employee("chirag", 24, "HSBC");
e1.work()