function selectElement(element) {
  const select = document.querySelector(element);
  if (select) {
    return select;
  } else {
    throw Error(`There is not selector named ${select}`);
  }
}

export default selectElement;
