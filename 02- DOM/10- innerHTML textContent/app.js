// innerHTML = retreives the whole HTML structure content inside the selected element.
// textContent = returns the text inside the selected element. We cannot pass HTML element in it, if passed it will
// read it as simple strings only.

const list = document.getElementById("first");
const div = document.querySelector(".item");
const item = document.querySelector("#second");

console.log(item.textContent);
console.log(list.innerHTML);
console.log(list.textContent);

const ul = document.createElement("ul");
const randomValue = "Hello World";
// need to pass template string (``) only
ul.innerHTML = `<li class="item">list item</li>
                <li>list item</li>
                <li>${randomValue}</li>`;

// We can also do this if we to select that item and then insert it, make sure to use tempalte string and place
// items inside this --> ${}.

// ul.innerHTML = `${list.innerHTML}`;
document.body.appendChild(ul);

item.textContent = "Changed Dynamically";
