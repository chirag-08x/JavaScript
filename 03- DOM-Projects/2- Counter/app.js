const button = document.querySelectorAll(".btn");
let num = document.querySelector(".num");
let count = 0;

button.forEach(function (btn) {
  if (btn.classList.contains("decrease")) {
    btn.addEventListener("click", function (e) {
      count--;
      num.textContent = count;
      num.style.color = "red";
    });
  } else if (btn.classList.contains("increase")) {
    btn.addEventListener("click", function (e) {
      count++;
      num.textContent = count;
      num.style.color = "green";
    });
  } else {
    btn.addEventListener("click", function (e) {
      count = 0;
      num.textContent = count;
      num.style.color = "initial";
    });
  }
});
