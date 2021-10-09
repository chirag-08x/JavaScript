/* 
Prototypal Inheritance Model 
Prototypes are the mechanism by which JavaScript objects inherit features from one another. JS uses Prototypal Inheritance Model. This means that every constructor function/class has a proptotype property, that is shared by the every instance of the constructor/class. So any properties or methods or prototype can be accessed by every instance. Prototype Property returns an object. 
*/

// Used to store methods on a prototype. Prototype methods can be shared within multiple function/classes.

function Account(name, balance) {
  this.name = name;
  this.balance = balance;
  //   this.deposit = function (amount) {
  //     this.balance += amount;
  //     console.log(`Hello ${this.name} your account balance is ${this.balance}`);
  //   };
}

const bob = new Account("Bob", 500);
const john = new Account("John", 100);

console.log(bob);
console.log(john);

console.log(Account.prototype);

// Since bankname, deposit function  is gonna be same for every customer that comes in, it's better to set is as a prototype.
Account.prototype.bankName = "CHASE";
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name} your account balance is ${this.balance}`);
};

bob.deposit();
john.deposit();

console.log(john.bankName);
console.log(bob.bankName);

// *********************************************Property Lookup***********************************************************

// The way property lookup works is that it first looks inside the object, if that property is present in the object it goes with it, if not then it looks for prototypes and other thing. If a property is declared both inside the object and the prototype the one inside the object will be considered.

function Shopping(name, age) {
  this.name = name;
  this.age = age;
  this.groceryItems = function (items) {
    console.log(`Items ordered by ${this.name} are ${items}`);
  };
}

Shopping.prototype.groceryItems = function (items) {
  console.log(
    `Items ordered by ${this.name} are ${items} and your age is ${this.age}`
  );
};

// the one inside the shopping fucntion will get fired not the prototype one, since both have the same names.
const chirag = new Shopping("chirag", 21);
chirag.groceryItems(["Peanut Butter", "milk", "cheese"]);

// ********************************* Everything in JS is an Object *******************************************************

/*
Everything is JS in object, when we type new function_name, what we basically do is that we create a new empty 
object {} ==> which it send back to the constructor and that constructor returns back the answer in the object. That why we always have access to prototype property which is an object property only.
*/

// Whenever we create any array, string, number, boolean, map, filter etc. what we are doing is basically creating a object only which then references back to it's constructor and function accoding;

// Both of the below statements means the same.
const a = [];
const b = new Array();
console.log(a, b);

const c = "";
const d = new String();
console.log(c, d);
