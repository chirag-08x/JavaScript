const container = document.querySelector(".container");
const ul = document.querySelector("ul");
const li = document.querySelector("li");

// Bubbling
/*
li.addEventListener("click", () => {
  console.log("li is clicked");
});

ul.addEventListener("click", () => {
  console.log("ul is clicked");
});

container.addEventListener("click", () => {
  console.log("container is clicked");
});
*/

// Capturing
li.addEventListener("click", () => {
  console.log("li is clicked");
});

/*
// To enable Capturing, we either have to pass true as second argument or function or {capture : true}
ul.addEventListener(
  "click",
  () => {
    console.log("ul is clicked");
  },
  true
);

container.addEventListener(
  "click",
  () => {
    console.log("container is clicked");
  },
  { capture: true }
);
*/

// Stop Propagation = We can also stop propagation of an event on an element, if we don't want it to go further.
li.addEventListener("click", () => {
  console.log("li is clicked");
});

ul.addEventListener(
  "click",
  () => {
    console.log("ul is clicked");
  },
  true
);

container.addEventListener(
  "click",
  (e) => {
    // Event Propagation will stop container, and won't go down the DOM tree any further
    e.stopPropagation();
    console.log("container is clicked");
  },
  { capture: true }
);
