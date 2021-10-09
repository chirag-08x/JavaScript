const openBtn = document.querySelector(".btn");
const closeBtn = document.querySelector(".times");
const modalItem = document.querySelector(".modal");

openBtn.addEventListener("click", function (e) {
  modalItem.classList.remove("hide");
});

closeBtn.addEventListener("click", function (e) {
  modalItem.classList.add("hide");
});
