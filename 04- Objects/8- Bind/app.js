// Bind = Does not runs instantly, Can be assigned to a variable, to run later. Arguments = list of items.

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

const susanGreet = greet.bind(susan, "California", "USA");
susanGreet();
const johnGreet = greet.bind(john, "NYC", "USA");
johnGreet();
