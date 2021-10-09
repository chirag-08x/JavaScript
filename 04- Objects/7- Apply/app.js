// Apply = Runs instantly, Arguments = [array of items]. Also used to call function on objects.

const john = {
  name: "john",
  age: 22,
};

const susan = {
  name: "susan",
  age: 21,
};

function greet(city, country) {
  console.log(
    `Hello my name is ${this.name} and my age is ${this.age} and I live in ${city} ${country}`
  );
}

greet.apply(john, ["NYC", "USA"]);
greet.apply(susan, ["California", "USA"]);
