// innerText = another simple alternative of create text node and then appending it to the element later.
// prepend = prepend is opposite of append, it adds item at the starting of the element instead of end of the element.

const heading = document.createElement("h2");
heading.innerText = "I am a dynamic heading";

document.body.prepend(heading);
