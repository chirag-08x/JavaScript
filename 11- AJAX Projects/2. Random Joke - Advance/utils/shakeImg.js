const shakeImg = (image) => {
  const random = Math.random() * 1000;
  image.classList.add("shake-img");
  setTimeout(() => {
    image.classList.remove("shake-img");
  }, random);
};

export default shakeImg;
