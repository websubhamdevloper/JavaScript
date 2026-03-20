function fetchData() {
    return new Promise((resolve, reject) => {
        reject("Error: Unable to fetch data");
    });
}

fetchData().catch((error) => {
    console.log(error);
});