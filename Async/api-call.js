async function APIcalls() {
  try {
    const api = await fetch("https://randomuser.me/api/");
    const data = await api.json();
    console.log(data);
  } catch (error) {
    console.log("Error::", error);
  }
}

APIcalls();