const { axios } = require("axios");

const fetchData = async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    return data;
  } catch (error) {
    return error.toString();
  }
};

module.exports = { fetchData };
