// call = runs instantly, i.e. we can't save it in a variable and access it later. Arguments = list of items. Used to call one object function onto another object without actually declaring that function inside that other object.

const john = {
  name: "john",
  age: 22,
  greet() {
    console.log(this);
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
  },
};

const susan = {
  name: "susan",
  age: 21,
};

john.greet();

// Calling greet on susan. We can call any function on any object, need not necessarily have to be declared inside the function.
john.greet.call(susan);

function degree(degree1, degree2) {
  console.log(
    //   Arguments are passed as list of items seprated by commas
    `My name is ${this.name} and my Qualification are ${degree1}, ${degree2}`
  );
}

degree.call(john, "Btech", "MBA");
degree.call(susan, "BSC", "MSC");
