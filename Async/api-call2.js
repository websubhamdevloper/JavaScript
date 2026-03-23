async function APIcall() {
  try {
    const api = await fetch("https://randomuser.me/api/");
    const data = await api.json();
    console.table(data);
  } catch (error) {
    console.log(error)
  }
}

APIcall();
