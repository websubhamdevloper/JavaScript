async function APIuser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    const data = await response.json();
    const userIdAPI = data.userId;
    console.log("User Id is ", userIdAPI);
  } catch (error) {
    console.log("Error::", error);
  }
}

APIuser();