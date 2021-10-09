// Note : Inside regular function this points to Global Object

// Inside regular function at global scope this points to window/global object.
/*
function abc() {
  console.log(this);
}
abc();
*/

// Inside a regular function which is inside an object, this points back to the object itself.
/*
const person = {
  name: "chirag",
  age: 30,
  siblings: ["anna", "julie", "sam"],
  greet() {
    console.log(this);
    console.log(
      `Hello my name is ${this.name} and I am ${this.age} years old and I have ${this.siblings.length} siblings and their names are ${this.siblings}.`
    );
  },
};
person.greet();
*/

// Inside a class this points back to the constructor and methods of that class.
/*
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.display = this.displayInfo;
  }
  displayInfo() {
    console.log(`Hello my name is ${this.name} and my age is ${this.age}`);
  }
}

const bob = new Person("bob", 23);
bob.displayInfo();

bob.display();
*/

// Factory Function
/*
function Person(name, age) {
  return {
    fname: name,
    pAge: age,
    info() {
      console.log(
        `Hello my name is ${this.fname} and I am ${this.pAge} years old`
      );
    },
  };
}

const john = Person("john", 25);
john.info();
*/

// Constructor Function

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.info = function () {
//   console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
// };

// const anna = new Person("anna", 19);
// anna.info();

// If we call globally declared function insdie the method, this will refernce to the object itself.
// const person = {
//   name: "chirag",
//   age: 20,
//   degree: "BTech",
//   displaybiodata: biodata,
// };

// function biodata() {
//   console.log(
//     `Hello my name is ${this.name} and I am ${this.age} years old doing ${this.degree}.`
//   );
// }
// person.displaybiodata();

// Inside class method this points to constructor propertiess
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   displayInfo() {
//     console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
//   }
// }

// john = new Person("john", 21);
// john.displayInfo();
