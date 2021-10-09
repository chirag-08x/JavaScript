/*
Hoisting
Function and var declarations are Hoisted.
When we work with function and var declaration we can access these both things, before they are initialized, i.e. till now we can only accessing things by initializing them first above and then using them, but funcitons and var declaration can be accessed before/above they are being declared. Though it is much safer only to use them after/below declaration. Though var does not return the error like const and let, but it does not provide the value either, it returns undefined, it just doesn't break your code by throwing error.
*/

// Won't work here since the function is accesing the variable and const and let don't allow accesing before declaration.
// moreComplex();

const firstName = "chirag";
let lastName = "agrawal";
var random = "random";

// Before
display();

function display() {
  console.log("Hello world");
}

// After
display();

function moreComplex() {
  console.log(firstName, lastName, random);
}

// Works fine here
moreComplex();
