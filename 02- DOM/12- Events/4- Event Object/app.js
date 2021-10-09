// Event Object = e/evt (passed as an argument inside the function)

// We can replace e/evt with the selectors passed inside the event listener. for example instead of            heading.classList.add("className") we can do it as e.classList.add("blue"); The argument e/evt will always select the element itself on which the event listener is being called itself. We can name e/evt/event anything it's just an argument passed inside the function. Best practice is to use e/evt/event

// currentTarget = returns the element selected or target.

// event.type or argument.type == returns the type of event that is being triggered.

// preventDefault() - This method can prevent the default behaviour of any element. For example the default behaviour of the link is that if we click on it, it will take us to the top of the page, using preventdefault() we can prevent this behaviour. Mostly used with forms, whenever we submit a form to prevent that page refresh we can use it.

const heading = document.querySelector("h1");
const btn = document.querySelector(".btn");
const link = document.getElementById("link");

// heading.addEventListener("click", function () {
//   heading.classList.add("blue");
// });

heading.addEventListener("click", function (event) {
  //   console.log(event);
  console.log(event.currentTarget);
  event.currentTarget.classList.add("red");
});

btn.addEventListener("click", function (e) {
  console.log(e.currentTarget);
  e.currentTarget.classList.add("blue");
  console.log(e.type);
});

// Prevents the link to scroll back to the top of the page once clicked
function preventClick(e) {
  e.preventDefault();
}

link.addEventListener("click", preventClick);
