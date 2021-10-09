// Data Types = 7 in Total
// Primitive = String, Number, Boolean, Null, Undefined, Symbol(ES6) - to be covered later
// (Non-Primitive Data Types)Objects = Arrays, Functions, Objects

// typeof - operator to check data type of a value or variable

// String
const text = "some text";
console.log(text);
console.log(typeof text);
console.log(typeof "chirag");

// Number
const number = 45;
console.log(number);
console.log(typeof number);
console.log(typeof 20);

// Boolean
const value1 = true;
const value2 = false;
console.log(value1);
console.log(value2);
console.log(typeof value1);
console.log(typeof value2);

// Null
const result = null;
console.log(result);
// There is a bug in JS where typeof null, outputs as to be object, which is false.
console.log(typeof result);

// Undefined = not defined, or value not provided.
let names;
console.log(names);
console.log(typeof names);

/*
Undefined = "JS cannot find the value for this". Ex. =>
            1. Variable without value. 
            2. missing function arguments.
            3. missing object properties.
*/

// null = "developer sets the value, null means nothing or empty value"
