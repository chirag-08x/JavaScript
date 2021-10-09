/*
When Spread Operator is Passed inside as a function Argument, it becomes rest Operator, or if it is not passed as first item in the array object. What rest Operator allows us to do is to have an infinite number of inputs/argumets in our function. It works similar as Python args and *kwargs.
*/

const fruits = ["Apples", "Banana", "Orange", "Peach", "Lemon"];
// Since []...] is passed as a second argument it becomes rest operator and collects all the left items in the Array.
const [first, second, ...all] = fruits;
console.log(first);
console.log(second);
console.log(all);

console.log();

const person = { name: "john", age: 21, job: "developer" };
const { name, ...others } = person;
console.log(name);
console.log(others);

console.log();

// Function Arguments.
function infSum(name, ...args) {
  // We can also use map, filter, reduce, etc any other operation.
  let final = 0;
  args.forEach(function (item) {
    final += item;
  });
  console.log(name, final);
}

// First argument will point to name, and others to (...args)
// We can also directly pass the array items inside the function without using array and spread operator.
// infSum("Chirag",20, 30, 5, 10 )
const scores = [10, 20, 30, 5, 10];
// This is Spread Operator as it is spreading out the scores Array.
infSum("Chirag", ...scores);
