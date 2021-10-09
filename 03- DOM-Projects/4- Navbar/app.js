const bar = document.querySelector(".fa-bars");
const nav = document.querySelector(".nav-items");
console.log(nav);

bar.addEventListener("click", function (e) {
  const contains = nav.classList.contains("show");
  if (contains) {
    nav.classList.remove("show");
  } else {
    nav.classList.add("show");
  }
});
