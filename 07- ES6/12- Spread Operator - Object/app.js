const person = {
  name: "bob",
  age: 21,
  job: "developer",
};
console.log(person);

// Can also new properties,this creates a new copy of the person object, so if we made any modifications to new Person object it will not reflect inside the original object.
// We can also overwrite the property while destrcuturing
const newPerson = { ...person, city: "Chicago", city: "NYC" };
newPerson.name = "bella";
console.log(newPerson);
