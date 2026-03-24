async function APIcall() {
  try {
    const api = await fetch("https://pokeapi.co/api/v2/pokemon/6");
    const data = await api.json();
    const { name, ability, height, weight } = data;
    console.log("Name of the Pokemon", name);
    console.log("Abilities of the Pokemon", ability);
    console.log("Height of the Pokemon", height);
    console.log("Weight of the Pokemon", weight);
  } catch (error) {
    console.log("Error::", error);
  }
}

APIcall();
