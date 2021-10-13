const xhr = new XMLHttpRequest();
console.log(xhr);

xhr.open("GET", "./api/sample.txt");
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
    document.body.innerHTML += `<p>${xhr.responseText}</p>`;
  }
  // Before readyState chamges to 4, it first has to pass 1,2, and 3, it can't directly jump to 4.
  else {
    console.log({
      status: xhr.status,
      text: xhr.statusText,
    });
  }
};
xhr.send();
// This will run first since xhr is running asynchronously.
console.log("Hello world");
