import get from "./getElement.js";

const image = get(".user-img");
const userName = get(".user-name");
const btns = [...document.querySelectorAll(".btn")];

const displayPeople = (data) => {
  return new Promise((resolve, reject) => {
    const filteredData = data.results[0];
    image.src = filteredData.picture.large;
    const usrName = `${filteredData.name.first} ${filteredData.name.last}`;
    userName.innerText = usrName;
    btns[0].classList.add("active");

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
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        btns.forEach((item) => {
          item.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        const keyName = `${e.currentTarget.dataset.id}`;
        userName.innerText = info[keyName];
      });
    });
    resolve();
  });
};

export default displayPeople;
