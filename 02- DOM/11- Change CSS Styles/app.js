const random = document.querySelector(".random");
console.log(random.style);

// Not the best way to do it, since it took us 4 repeating lines of code to do so. That's why it's better to add that
// class and give styles to it in CSS only and then add that class to the element.

// random.style.color = "white";
// random.style.background = "blue";
// random.style.textTransform = "capitalize";
// random.style.fontSize = "2rem";

random.classList.add("title");
