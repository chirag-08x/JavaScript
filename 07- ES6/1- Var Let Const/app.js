// var = decalre, update, redeclare.

// decalare
var a = 10;
console.log("var", a);
// update
a = 200;
console.log("var", a);
// re-declare
var a = 500;
console.log("var", a);

// let = declare, update, re-declaration not allowed

// declare
let amount = 100;
console.log("let", amount);
// update
amount = 250;
console.log("let", amount);

// const = declare, no-update, no re-declaration
// cannot mutate primitive(stirng, num, etc) types

const total = 100;
console.log("const", total);

// Error
// total = 200;

// Mutating non-primitive types
const arr = [1, 2, 3, 4, 5];
arr[3] = 100;
console.log(arr);

// Mutating is allowed, updating is not, Error
// arr = [1, 2, 5, 10, 55];

// ****************************************** Function vs Block Scope ***************************************************

// Another key difference between var, let and const is -
// var = function Scope, i.e. if var is declared inside the function it can only be accesed within the funciton, but if var is declared inside the scope it is globally accessible.
// let, const = block Scope {} - anything within {}

// Global Scope

var num = 25;

function greet() {
  // Local Scope
  //   Same is gonna work for let and const.
  var random = "random val";
  console.log(
    `Hello there, your lucky number is ${num} and random value is ${random}`
  );
}

greet();

// Error = declared inside the function
// console.log(random);

var sum = 1500;
var test = true;
let letTest = 786;
const constTest = "HTML";

if (test) {
  // Global
  var sum = "apples and onions";
  //   Local
  let letTest = 1725;
  //   Local
  const constTest = "JS";
  console.log("hello there test is true");
}

console.log(sum);
console.log(letTest);
console.log(constTest);
