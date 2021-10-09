/*
Global Scope = Any variable declared outside the code block is called Global Scope, i.e. we can access it from anywhere in the 
program.

Local Scope = Any variable declared inside the code block is called Local Scope, i.e. we can only access it within those block of 
scopes.

The above definition for local and global scope is only applicable to let and const and not to var, since it functions differently 
and
it's in best practice not to use it.
*/

// Global
let c = "Chirag";
console.log(c);

function changeName() {
  c = "Dakota";
}

changeName();
console.log(c);

// Local
function names() {
  let a = "James";
  console.log(a);
}

names();
// console.log(a); // will give the error "a is not defined" since it is declared inside the function.

if (true) {
  let b = "Robinson";
}
// console.log(b); // will give the error "b is not defined" since it is declared inside the if block.

// The program first looks up variable inside the local scope then moves to the global scope.

const globalNum = 5;

function add(num1, num2) {
  const globalNum = 10;
  const final = num1 + num2 + globalNum;
  return final;
}

a = add(10, 15);
console.log(a);
