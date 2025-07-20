// Javascript has something called wrapper class, so basically whenever we declare a variable, let's say a string of name, it automatically attaches some methods to it like chatAt, concat, length etc. This happens because eventually that variable is being created using a String class, basically it is an object created using String class

// Object created using String class, that's where the statement comes in, everything in js is an object.
const name = new String("chirag");

// This will point to the string class
console.log(name.__proto__);

// Object created using number class using dot(.) we can access all the methods written on Number class
const age = new Number(10);

// Every Class methods are present on the it's prototypes
// To access an object prototype we do obj.__proto__
// To access a Class prototype we do class.prototype

// lname object __proto__ will be set to String class prototype.
// Since everything is an object in js, so whenever we create a variable in js, it assigns it's __proto__ to it's Class prototype
const lname = new String("agrawal");

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //   getFullName() {
  //     return `${this.name} ${this.age}`;
  //   }
}

// As mentioned before all the methods that are defined in a class are set on protype, so we can do it like this as well.
// It is same as getFullName defined inside the class itself.
Person.prototype.getFullName = function () {
  return `${this.name} ${this.age}`;
};

const p1 = new Person("chirag", 27);
console.log(p1.getFullName());

const p2 = {
  name: "Kartavya",
  age: 10,
};

// so now if we want to have getFullName method on p2 object, we can simply assign it's __proto__ to Person.prototype
p2.__proto__ = Person.prototype;

// or since we have already created out an object p1 from our Person base class, p1 __proto__ is already pointing to Person class prototype, we can use p1.__proto__ as well
p2.__proto__ = p1.__proto__;
console.log(p2.getFullName());

// Prototypal Inheritance
// Below code is an example of protypal inheritance.
const d1 = {
  xp1: "I am inside d1",
};

const d2 = {
  xp2: "I am inside d2",
  __proto__: d1,
};

const d3 = {
  xp2: "I am inside d2",
  __proto__: d2,
};

// Here what will happen is, when we do d3.xp1, first d3 will try to search xp1, if it fails to do so, it will go to it's __proto__ which is pointing to d2 object, then it will search xp1 over there, if it fails to do so, it will go inside d2 __proto__, which is pointing to d1, and finally it will access xp1. If for some reason let's say xp1 didn't even exist on d1 in that case it will keep looking into it's __proto__ until it will finally point back to null.
console.log(d3.xp1); // "I am inside d1

// Any class, or anything in JS, it's __proto__ at last points to the Object, that's why we say everything in js is an Object
// s.__proto__ points to String ---> String.__proto__ points to Object --> Object.__proto__ points to null
const s = "my name is chirag";

// bool.__proto__ points to Boolean ---> Boolean.__proto__ points to Object --> Object.__proto__ points to null
const bool = true;
