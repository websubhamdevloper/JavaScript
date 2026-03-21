async function API() {
    const api = await fetch("https://randomuser.me/api/");
    const data = await api.json();

    const [ user ] = data.results;
    const {name, gender, phone, email} = user;

    console.log(name.first, name.last)
    console.log(gender)
    console.log(phone)
    console.log(email)
}
API();