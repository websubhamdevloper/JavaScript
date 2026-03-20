// Write an async function to handle multiple async operations sequentially

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Subham" });
    }, 1000);
  });
}

function fetchPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Post 1", "post 2", "Post 3"]);
        }, 1000);
    });
}

async function loadUserAndPosts() {
    try {
        const user = await fetchUser();
        console.log("User: ", user);

        const posts = await fetchPosts(user.id);
        console.log("Posts : " , posts);
    } catch(error) {
        console.log("error: ", error);
    }
}

loadUserAndPosts();
