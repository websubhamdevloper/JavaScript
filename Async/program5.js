function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Step1 completed!");
    }, 1000);
  });
}

function step2(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message + "-> Step 2 completed");
    }, 1000);
  });
}

step1()
  .then((result) => {
    return step2(result);
  })
  .then((finalResult) => {
    console.log(finalResult);
  });
