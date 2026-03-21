// Write a function using Promise.race() to get the result of the fastest Promise

function api1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("API 1 reponse!");
    }, 2000);
  });
}

function api2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("API 2 response");
    }, 1000);
  });
}

function api3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("API 3 response!");
    }, 500);
  });
}

Promise.race([api1(), api2(), api3()]).then((result) => {
  console.log(result);
});
