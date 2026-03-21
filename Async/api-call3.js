async function API() {
    try {
    const api = await fetch('https://randomuser.me/api/');
    const data = await api.json();

    const [ user ] = data.results;

    const { name, location, gender, email, phone } = user;

    console.log("Name of the user is ", name.first, name.last);
    console.log("Email: ", email);
    console.log("Phone:", phone);
    console.log("Gender: ", gender);
    console.log("Location: ", location);
    }
    catch(error){
        console.log("Error::", error);
    }
}

API();
