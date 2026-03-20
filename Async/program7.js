function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User data!");
        }, 1000);
    });
}

function fetchPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("post data");
        }, 1500);
    });
}

function fetchComments() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Comments data");
        }, 2000);
    });
}

Promise.all([fetchUser(), fetchPosts(), fetchComments()]).then((results) => {
    console.log("All data fetched: ", results);
});
