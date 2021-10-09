// this is a window object, but when declared inside a object within a function, this references to the object itself.
// Points to the left of dot.

// When "this" keyword is used inside the object it references to the object itself.
// When "this" keyword is used inside regular functions it references to the Global window object.
// When this is used inside the function that is inside an object it still references to object itself.

console.log(this);

const john = {
  firstname: "John",
  lastname: "Anderson",
  fullname: function () {
    console.log(`My full name is ${this.firstname} ${this.lastname}`);
  },
};

const bob = {
  firstname: "Bob",
  lastname: "Sanders",
  fullname: function () {
    console.log(`My full name is ${this.firstname} ${this.lastname}`);
  },
};

john.fullname();
bob.fullname();

// In Regular function (not arrow functions), "this" determines how a function is invoked (left of.) whatever is the left of dot, is invoking the function.

// "this" works differently with arrow function

// If "this" is invoked by an object, then it references to an object.

function showThis() {
  console.log(this);
}

const person1 = {
  name: "emily",
  showThis: showThis,
};
const person2 = {
  name: "monics",
  showThis: showThis,
};

person1.showThis();
person2.showThis();

showThis();

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");

btn1.addEventListener("click", showThis);
btn2.addEventListener("click", showThis);
btn2.addEventListener("click", function () {
  showThis();
});

// Example
const video = {
  title: "JS Tutorial",
  topics: ["ES6", "this keyword", "arrow function"],
  displayTopics() {
    this.topics.forEach(function (item) {
      console.log(this.title, item);
    }, this);
  },
};

video.displayTopics();
