const form = document.getElementById("form");
const name = document.getElementById("name");
const pass = document.getElementById("password");

form.addEventListener("submit", function (e) {
  // If we don't do prevent default, then by default form on submitting, refresh the page and we won't be able to see anythin in the console.
  e.preventDefault();
  console.log("form submitted");
  console.log(name.value);
  console.log(pass.value);
});
