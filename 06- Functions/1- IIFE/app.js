/*
IIFE = Immediately Invoked Function Expression. We don't need to invoke the function outside the function and do extra steps we can right away invoke the function as soon as the script runs.
IIFE is an old way, new and better way is to use Closure.
IIFE provides a simple approach to avoid global scope pollution or a good way at protecting the scope of your function and the variable within it.
*/

// global namescape = can't declare a variable again.

const num1 = 30;
const num2 = 50;

(function () {
  const num3 = 30;
  const num4 = 50;
  console.log(`The result is ${num3 + num4}`);
})();

// Pass Arguments
(function (num1, num2) {
  console.log(`The result is ${num1 + num2}`);
})(10, 15);

// Return Result
const result = (function (num1, num2) {
  return `The result is ${num1 + num2}`;
})(100, 15);
console.log(result);
