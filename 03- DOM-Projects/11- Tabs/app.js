// btn, hero-container, hero-text

const btns = document.querySelectorAll(".btn");
const container = document.querySelector(".hero-container");
const hero_text = document.querySelectorAll(".hero-text");

container.addEventListener("click", function (e) {
  const currentElement = e.target.dataset.id;
  if (currentElement) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    hero_text.forEach(function (item) {
      item.classList.remove("active");
      const element = document.getElementById(currentElement);
      element.classList.add("active");
    });
  }
});
