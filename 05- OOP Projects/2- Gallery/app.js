function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    console.log(element);
    return element;
  } else {
    console.log(
      `Please check your selector ${selection} no such selector exist.`
    );
  }
}

class Gallery {
  constructor(element) {
    this.element = element;
    this.imgs = this.element.querySelectorAll(".img");
    this.modal = getElement(".modal");
    this.closeBtn = getElement(".close-btn");
    this.prevBtn = getElement(".slider-prev");
    this.nextBtn = getElement(".slider-next");
    this.openModal = this.openModal.bind(this);
    this.open = this.imgs.addEventListener("click", this.openModal);
  }
  openModal() {
    this.modal.classList.add("open");
  }
}

const nature = new Gallery(getElement(".section-nature"));
const city = new Gallery(getElement(".section-city"));
