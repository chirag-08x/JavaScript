const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(`No such selector exist : ${selection}`);
  }
};

export default getElement;
