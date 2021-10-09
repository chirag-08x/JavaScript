// Adding/Removing CSS Classes.
// ClassName = Allows us to check, remove, and add class name to an element. There is a caviat with className that
// it can only add one class, if we add another class it will remvoe the previous class added.

// ClassList = To counter the above problem we have classList.

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

const classValue = first.className;
// Returns the class name of the element.
console.log(classValue);

second.className = "colors";
// This will apply "text" class but it will remove/overwrite the colors class.
second.className = "text";
// Also we can do, the below command but we have to give both the class names at the same time.
second.className = "colors text";

const classThirdValue = third.classList;
console.log(classThirdValue);
third.classList.add("colors");
third.classList.add("text");
console.log(classThirdValue);
// to add two or more classes right away;
third.classList.add("colors", "text");
// We can also remove classes by using remove classList method.
third.classList.remove("text");
// We can also check if an element has that class, using contains method
const result = third.classList.contains("colors");
if (result) {
  console.log("Class is Present");
} else {
  console.log("Class not present");
}
