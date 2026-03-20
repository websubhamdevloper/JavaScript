// Write an async function to retry a failed operation 3 times before giving up.

let attemptCount = 0;
function unreliableAPI(){
    attemptCount++;
    return new Promise((resolve, reject) => {
        if(attemptCount < 3) {
            reject("API call failed!");
        } else {
            resolve("Success on attempt: " + attemptCount);
        }
    });
}

async function retryAPI(maxRetries = 3) {
    for (let i =0; i < maxRetries; i++){
        try {
            const result = await unreliableAPI();
            console.log(result);
            return result;
        } catch (error) {
            console.log("Attemp: " + (i + 1) + " failed: " + error);
            if(i == maxRetries - 1) {
                throw error;
            }
        }
    }
}

retryAPI();
