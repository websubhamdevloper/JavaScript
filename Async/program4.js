function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Loaded!");
    }, 3000);
  });
}

async function loadData() {
  const result = await getData();
  console.log(result);
}

loadData();
