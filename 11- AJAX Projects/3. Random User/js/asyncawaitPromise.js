const image = document.querySelector(".user-img");
const userName = document.querySelector(".user-name");
const randomBtn = document.querySelector(".random-btn");
const btns = document.querySelectorAll(".btn");

window.addEventListener("DOMContentLoaded", async () => {
  const data = await getInfo();
  displayPeople(data);
});

randomBtn.addEventListener("click", async () => {
  const data = await getInfo();
  displayPeople(data);
});

function getInfo() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://randomuser.me/api/");
    xhr.send();

    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject({
          status: xhr.status,
          text: xhr.statusText,
          state: xhr.readyState,
        });
      }
    };
  });
}

function displayPeople(data) {
  const filteredData = JSON.parse(data).results[0];
  console.log(filteredData);
  image.src = filteredData.picture.large;
  const usrName = `${filteredData.name.first} ${filteredData.name.last}`;
  userName.innerText = usrName;

  const { number: streetNumber, name: streetName } =
    filteredData.location.street;
  const info = {
    name: usrName,
    email: filteredData.email,
    dob: filteredData.dob.age,
    location: `${streetNumber} ${streetName}`,
    cell: filteredData.cell,
    login: filteredData.login.password,
  };
  btns.forEach((btn) => {
    btn.addEventListener("click", (item) => {
      const keyName = `${item.currentTarget.dataset.id}`;
      userName.innerText = info[keyName];
    });
  });
}
