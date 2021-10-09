const showPeople = (people) => {
  const names = people
    .map((person) => {
      const { name, job } = person;
      return `<h2>${name}</h2>`;
    })
    .join("");
  return names;
};
export default showPeople;

// We can also export it using other syntax, though the best practice is to use the above syntax i.e. -

// export default (people) => {
//   const names = people
//     .map((person) => {
//       const { name, job } = person;
//       return `<h2>${name}</h2>`;
//     })
//     .join("");
//   return names;
// };
// export default showPeople;
