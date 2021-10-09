const sidebar = document.querySelector(".sidebar");
const bars = document.querySelector(".expand");
const closeBtn = document.querySelector(".close");

bars.addEventListener("click", function (e) {
  sidebar.classList.toggle("hide-sidebar");
});

closeBtn.addEventListener("click", function (e) {
  sidebar.classList.add("hide-sidebar");
});
