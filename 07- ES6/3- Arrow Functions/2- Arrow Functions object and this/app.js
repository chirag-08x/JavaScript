// reg functions = "this" refers parent, left of dot.
// arrow functions = refers to it's current surrounding scope.
const bob = {
  name: "bob",
  age: 20,
  sayHi() {
    console.log(this);
    setTimeout(() => {
      console.log(this);
      console.log(
        `Hello my name is ${this.name} and I am ${this.age} years old`
      );
    }, 2000);
  },
};

const anna = {
  name: "anna",
  age: 19,
  sayHi: () => {
    console.log(this);
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
  },
};

bob.sayHi();
// The current surrouding scope of the line below is local scope so this will reference to the window object.
anna.sayHi();
