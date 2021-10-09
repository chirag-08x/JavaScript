const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

// // First Approach <slides approach>

// function carousel() {
//   if (counter === slides.length) {
//     counter = 0;
//   }
//   if (counter < 0) {
//     counter = slides.length - 1;
//   }
//   slides.forEach(function (slide) {
//     slide.style.transform = `translateX(-${counter * 100}%)`;
//   });
// }

// Button Approach

prevBtn.style.display = "none";
function carousel() {
  if (counter < slides.length - 1) {
    nextBtn.style.display = "inline-block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "inline-block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
