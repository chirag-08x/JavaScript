/*
// Select the Event
// Add event listener to it
// Add the properties to add

// addEventListener("event_name", "callback function")

Events = The action/changes will only take place when we want them to, for example clicking on the button,
hovering, scrolling etc.
*/

// Click Event = Takes place when the element/item is clicked.

const btn = document.querySelector(".btn");

const heading = document.querySelector("h2");

btn.addEventListener("click", function () {
  if (heading.classList.contains("red")) {
    heading.classList.remove("red");
  } else {
    heading.classList.add("red");
  }
});

const para = document.querySelector("p");

function changeColor() {
  if (para.classList.contains("blue")) {
    para.classList.remove("blue");
  } else {
    para.classList.add("blue");
  }
}

// Another way of doing the click event by seprately initializing the callback funtion. Make sure to only type the
// function name and don't invoke it right away by adding brackets for example changeColor(), this will execute the
// function right away without even clicking.
para.addEventListener("click", changeColor);
