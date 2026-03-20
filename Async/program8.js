// Write an async function with try-catch to handle errors properly

function fetchData(shouldFail) {
  return new Promise((resolve, reject) => {
    if (shouldFail) {
      reject("Error:: Data fetch failed!");
    } else {
      resolve("Data fetched successfully");
    }
  });
}

async function handleData() {
  try {
    const result = await fetchData(false);
    console.log("Success case: ", result);
  } catch (error) {
    console.log("Error:: ", error);
  }

  try {
    const result = await fetchData(true);
    console.log("Success case:", result);
  } catch (error) {
    console.log("Error case:", error);
  }
}


handleData();
