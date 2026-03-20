function fetchData() {
    return new Promise((resolve) => {
        resolve("Data fetched successfully!");
    });
}

fetchData().then((message) => {
    console.log(message);
});
