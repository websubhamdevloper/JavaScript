// Write a function that converts a callback-based function to a Promise (promisification)

function readFile(filename, callback) {
  setTimeout(() => {
    callback(null, "File contents here!");
  }, 1000);
}

function readFilePromise(filename) {
  return new Promise((resolve, reject) => {
    readFile(filename, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

readFilePromise("test.txt").then((data) => {
  console.log(data);
});
