const person = {
  name: "John",
  lastName: "Parker",
  age: 21,
  profession: "SDE",
  address: "NYC",
  education: false,
  married: true,
  siblings: ["Lily", "Anna", "Peter"],
  greeting: function (name) {
    return "hello my name is " + name;
  },
  greet(name) {
    return `Hello there my name is ${name}`;
  },
};

console.log(person.greeting("Anna"));
console.log(person.name);
console.log(person.address);
console.log(person.siblings[2]);

// Overwriting Object values
person.name = "Clem";
console.log(person.name);

console.log(person.greet("chirag"));
