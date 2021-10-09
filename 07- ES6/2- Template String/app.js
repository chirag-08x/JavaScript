// Template String = Can be used to insert HTML Dynamically.

const fname = "bob";
const lastName = "marley";
const age = 25;

const phrase = `My full name is ${fname} ${lastName} and I am ${age} years old `;
console.log(phrase);

// Template String Dynamic Elements HTML
const person = {
  name: "Kyle",
  job: "developer",
  hobbies: ["surfing", "baking", "bowling"],
};

const result = document.querySelector(".result");

result.innerHTML = `<h2> ${person.name} </h2>
                    <p> ${person.job} </p>
                    <ul>
                    ${person.hobbies
                      .map(function (item) {
                        return `<li>${item}</li>`;
                      })
                      .join("")}
                    </ul>
                    `;

const a = person.hobbies.map(function (item) {
  return item;
});
console.log(a);

// ***************************************** Tagged Template Literal ****************************************************
const author = "Some author";
const statement = "Some statement";

const quote = highlight`Here is a statement said by the author "${author}" - ${statement}`;

const final = document.querySelector(".result");

final.innerHTML = quote;

// function someFunc(text = whole string, second_arg = all the template string literals that are selected using ${}, simple way is to do as arg1, arg2, arg3,....etc but if there are too many such literals we can use the rest operator to combine all of them into one variable)

// text = returns the array including all the text in the string except the statement inside ${}
// vars = returns the array including all the template literals i.e. text inside ${}.

function highlight(text, ...vars) {
  const finalText = text.map(function (item, index) {
    return `${item} <strong class = "blue">${vars[index] || ""}</strong>`;
  });
  return finalText.join("");
}
