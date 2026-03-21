// Write an async function that fetches data from multiple APIs with a timeout and handles partial failures.

function fetchFromAPI1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from API 1");
    }, 500);
  });
}

function fetchFromAPI2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("API 2 failed!");
    }, 1000);
  });
}

function fetchFromAPI3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from API 3");
    }, 1500);
  });
}

async function fetchAllAPIs() {
  const timeout = 2000;
  const promises = [
    fetchFromAPI1(),
    fetchFromAPI2(),
    fetchFromAPI3()
  ];

  const results = await Promise.allSettled(promises);

  const successful = [];
  const failed = [];
   results.forEach((result) => {
    if (result.status === "fulfilled") {
      successful.push(result.value);
    } else {
      failed.push(result.reason);
    }
   });

   console.log({
    successful: successful,
    failed : failed
   });
}

fetchAllAPIs();