// JSON = JavaScript Object Notation
// When server sends data back to the client, it can only send it in the form of text.
// Key and value can only use double quotation marks and key need to compulsorily have double quotes

const btn = document.querySelector(".btn");
const url = "./api/data.json";
btn.addEventListener("click", showPeople);

function showPeople() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log(data);
      const filteredData = data
        .map((item) => {
          return `<p>${item.name}</p>`;
        })
        .join("");
      document.body.innerHTML += filteredData;
    } else {
      console.log({
        state: xhr.readyState,
        status: xhr.status,
        text: xhr.statusText,
      });
    }
  };
  xhr.send();
}
