// Using Selectors inside the element.

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const butn = question.querySelector(".btn");
  butn.addEventListener("click", function (e) {
    console.log(question);
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

// Traversing the DOM

// const btns = document.querySelectorAll(".btn");
// console.log(btns);

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const answer = e.currentTarget.parentElement.parentElement;
//     answer.classList.toggle("show-text");
//   });
// });
