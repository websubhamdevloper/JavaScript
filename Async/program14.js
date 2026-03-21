// Write an async function that processes an array of items sequentially with async operations.

const items = [1, 2, 3, 4, 5];

function processItem(item) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(item * 2);
        }, 1500);
    });
}

async function processSequentially(){
    for (const item of items){
        const result = await processItem(item);
        console.log("Processing item:", result);
    }
}

processSequentially();
