/*
Closure = Closure gives you an access to an outer function's scope from an inner function.
Make Private variables with closure.
*/

function outer() {
  let privateVar = "secret";
  function inner() {
    console.log(`Hello there the secret is ${privateVar}.`);
  }
  // Invoking the function inside the function only;
  //   inner();

  //   Returning the inner function itself which needs to be invoked somewhere to access the data and print it.
  return inner;
}

// Works in first case when function is invoked inside the function only.
outer();

// Second Case

// Method 1
const result = outer();
console.log("result", result);
result();

// Method 2
outer()();
