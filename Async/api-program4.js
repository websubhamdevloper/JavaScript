async function APIuser() {
  try {
    const api = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await api.json();
    return data.userId;
  } catch (error) {
    console.log("Error::", error);
  }
}

APIuser().then((userId) => {
  console.log(userId);
});
