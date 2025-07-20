// This file deals with testing functions

const addNums = (num1, num2) => {
  return num1 + num2;
};

const checkEven = (num) => {
  return num % 2 === 0;
};

const isNull = () => null;

const createUser = () => {
  const user = {
    firstName: "chirag",
  };
  user.lastName = "Agrawal";
  user.age = 24;

  return user;
};

module.exports = { addNums, checkEven, isNull, createUser };
