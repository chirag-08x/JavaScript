function getVolume(length) {
  return function (breadth) {
    return function (height) {
      return length * breadth * height;
    };
  };
}

const result = getVolume(4)(5)(6);
console.log(result);
