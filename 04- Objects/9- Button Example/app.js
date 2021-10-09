const counter = {
  count: 0,
  increment() {
    console.log(this);
    this.count++;
    console.log(this.count);
  },
};

const btn = document.querySelector(".increment");
console.log(btn);

// fail
// btn.addEventListener("click", counter.increment);

// Some edge cases = We cant remove this event listener later if we want to.
// btn.addEventListener("click", counter.increment.bind(counter));
// btn.removeEventListener("click", counter.increment.bind(counter));

// No errors or edge cases
const increment = counter.increment.bind(counter);
btn.addEventListener("click", increment);
btn.removeEventListener("click", increment);
