// Write a function to create a delayed execution using setTimeout wrapped in a Promise

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms)
    });
}

delay(3000).then(() => {
    console.log(" 3 seconds have passed!");
});

