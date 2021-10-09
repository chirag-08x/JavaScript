/*
Arrow Functions = no name, always expression to variable, no function keyword, treat this keyword differently than normal functions
*/

// *********************************************** Basics ***************************************************************
/* 
If we have only one line in our arrow function we can emit curly braces after the arrow as well as the return statement.
*/
const sayHi = () => console.log("Hello");
sayHi();

// If we are passing just one parameter as an argument we can emit the paranthesis
const single = (value) => value * 2;
const num = single(8);
console.log(num);

const triple = (arg1, arg2, arg3) => arg1 * arg2 * arg3;
const num2 = triple(10, 15, 20);
console.log(num2);

// Multiple Lines(curly braces), returning result
const calcPower = (base, exp) => {
  const result = Math.pow(base, exp);
  return result;
};
const pow = calcPower(4, 3);
console.log(pow);

// returning object = If we want to return object in a single line without using the return statement, then in that case we have to wrap that object inside paranthesis, other wise arrow function will get confused b/w whether that's an object or the curly braces of object

// Error
// cosnt object = () => {name:"john", age:20};

const object = () => ({ name: "john", age: 20 });
console.log(object());

/*
Arrow functions as callback function ==> there are 2 ways to set up arrow function as callback function, i.e. either by declaring them seprately or by using them as anonymous functions inside the statement.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Since code is single line we neither have to set up curly braces nor the return statement, we can even omit argument paranthesis if we want.
const big = numbers.filter((number) => number > 4);
console.log(big);

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => console.log("You clicked me"));
