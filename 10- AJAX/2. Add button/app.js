// To show that page doesn't referesh.

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  displayData();
});

function displayData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./api/sample.txt");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.body.innerHTML += `<p>${xhr.responseText}</p>`;
    } else {
      console.log({
        status: xhr.status,
        statusText: xhr.statusText,
        state: xhr.readyState,
      });
    }
  };
  xhr.send();
}
