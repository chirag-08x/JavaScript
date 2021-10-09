const person = {
  name: "john",
  age: 20,
  siblings: ["anna", "peter"],
  married: true,
  greet: function (name) {
    console.log(`Hello my name is ${name}`);
  },
  sayHello(name) {
    console.log(`Hello my name is ${name}`);
  },
};

// dot notation
console.log(person.name);
person.greet("john");
person.sayHello("peter");

// adding properties
person.city = "chicago";
console.log(person);

// delete property
delete person.siblings; // can store it in a variable too, works same.
console.log(person);

// Nested Objects
// Set variable as property value
// Square bracket notation

// In JS hyphen(-) is not allowed in variable name, but we can use it as a key in Objects, but that key must be wrapped inside string quotes and that key can only be accessed using bracket notation and dot notation.

const age = 60;
let dynamicKey = "dynamic";

const person2 = {
  name: "Peter",
  //If key name and value name are same we can just write it once;
  age,
  married: true,
  greet: function (name) {
    console.log(`Hello my name is ${name}`);
  },
  sayHello(name) {
    console.log(`Hello my name is ${name}`);
  },
  job: {
    title: "developer",
    company: {
      name: "coding addict",
      address: "123 main street",
    },
  },
  "random-value": "random",
  dynamic: "dynamic-value",
};

console.log(person2.job.title);
console.log(person2.job.company.name);
console.log(person2.age);

// Bracket Notation
console.log(person2["random-value"]);
// We can also access every other key with bracket notation, only condition is that the key should be wrapped inside quotes.
console.log(person2["name"]);
console.log(person2["job"]["title"]);
console.log(person2[dynamicKey]);
