import people from "./person.js";

const container = document.querySelector(".section-center");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

container.innerHTML = people
  .map((person, index) => {
    let position = "next";
    if (index === 0) {
      position = "active";
    } else if (index == people.length - 1) {
      position = "last";
    }
    const { name, image, profession, text } = person;
    return `<div class="person ${position}">
                <div class="person-img">
                    <img src="${image}" alt="${name}" />
                </div>
                <h5 class="person-name">${name}</h5>
                <p class="profession">${profession}</p>
                <p class="info">${text}</p>
                <div class="quotes">
                    <i class="fas fa-quote-right"></i>
                </div>
           </div>`;
  })
  .join("");

const startSlider = (type) => {
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let next = active.nextElementSibling;

  if (!next) {
    next = container.firstElementChild;
  }

  active.classList.remove("active");
  last.classList.remove("last");
  next.classList.remove("next");

  if (type === "prev") {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling;
    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove("next");
    next.classList.add("last");
  } else {
    active.classList.add("last");
    last.classList.add("next");
    next.classList.add("active");
  }
};

nextBtn.addEventListener("click", () => {
  startSlider();
});

prevBtn.addEventListener("click", () => {
  startSlider("prev");
});
