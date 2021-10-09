// Functions as First Class Objects - can be stored in a variable(expression), can be passed as an argument to another function,
// can be returned from another function.

// Higher Order Functions - accepts another function as an argument or returns another function as a result.

// CallBack Functions - passed to another function as an argument and executed inside that function.

// CallBack function
function morning() {
  return `Hello Good Morning`;
}

// CallBack function
function evening() {
  return `Hello Good Evening`;
}

// CallBack function
function night() {
  return "Hello Good night";
}

// Higher Order Function
function greet(fname, cb) {
  const a = cb();
  return `${a} My name is ${fname}, pleased to meet you.`;
}

// Make sure to only pass the function name as an argument, don't invoke it right away, for example we can't do
// const a = greet("Lily", morning())
const a = greet("Lily", morning);
const b = greet("Lily", evening);
const c = greet("Lily", night);

console.log(a);
console.log(b);
console.log(c);
