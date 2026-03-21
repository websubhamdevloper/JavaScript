async function getPostWithHeaders() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log('Data:', data);
    } catch (error){
        console.log('Error: ', error);
    }
}

getPostWithHeaders();
