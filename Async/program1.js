function delayedPromise () {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("Promise resolved!");
        }, 2000);
    });
}

delayedPromise().then((message) => {
    console.log(message);
});