let firstName = "Chirag";
let lastName = "Agrawal";
console.log(firstName);
console.log(lastName);

// Assigning Values and Re-assinging Values for a variable.

let names = "Chirag";
let address, zip, state;
address = "USA";
zip = "410025";
state = "Washington";

console.log(names);
console.log(address);
console.log(zip);
console.log(state);

// Re-assining the value
names = "John";
console.log(names);

// Rules to declare variable name
/*
1 - Can Contain letter, digit, underscore(_), $
2 - Must start with either letter, $ or _
3 - Keywords not allowed (this, let, catch, fuction etc.)
4 - Cannot Start with number
5 - Case Sensetive = fullname != FullName
6 - camelCase or Underscore for best Practice
*/

// const, let, var
/*
const = CONSTANT , cannot be re-assigned later in the code. Also we cannot have undefined value for const, i.e. we must have to pass
a value to const, we canot do const var_name;
var, let = var and let pretty much works same, the only difference is that var is function scope and let is block scope which we will 
study later. The best practice is to use let over var. 
*/

// Not allowed, must provide a value.
// const hello;

const subject = "Javascript";
console.log(subject);
subject = "HTML";
console.log(subject);
