// currentTarget = Selects the whole element on which the event is applied on including all it's parents.

// target = identifies the element on which it was occured. It selects only the element that is being targetted and not the whole element. This will only include itself and it's nested children.

const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // e.currentTarget.style.color = "blue";
    e.target.style.color = "blue";
  });
});
