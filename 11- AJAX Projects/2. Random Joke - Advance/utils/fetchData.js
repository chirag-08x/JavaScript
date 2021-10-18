const URL = "https://api.chucknorris.io/jokes/random";

async function getJoke() {
  const data = await fetch(URL);
  const response = await data.json();
  const joke = response.value;
  return joke;
}

export default getJoke;
