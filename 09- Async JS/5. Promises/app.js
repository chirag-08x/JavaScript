// Promises = Pending => Executing, Resolved => Task done, Rejected => didn't get proper output, basically undefined or null. (3 states of Promises)
// then = executes when promise is true i.e. it is resolved, catch = executes when promise is false i.e. it is rejected

const promise = new Promise((resolve, reject) => {
  let value = true;
  if (value) {
    resolve("Value is true");
  } else {
    reject("value is fasle");
  }
});
console.log(promise);

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
