async function APIcalls() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    const { userId, body } = await response.json();
    console.log("UserId is : ", userId);
    console.log("Body is :", body);
  } catch (error) {
    console.log("Error::", error)
  }
}


APIcalls();
