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

