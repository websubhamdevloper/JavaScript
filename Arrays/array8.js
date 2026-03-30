// Create a function that finds all elements that appear exactly once in an array 

const numbers = [1, 2, 2, 3, 3, 3, 4, 5, 5, 6];

const findUnique = (arr) => {
    const frequency = arr.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
    return arr.filter(num => frequency[num] === 1);
};

console.log(findUnique(numbers));

// Alternate ways 
const findUniqueMap = (arr) => {
    const  frequency = new Map();
    arr.forEach(num => {
        frequency.set(num, (frequency.get(num) || 0) + 1);
    });

    return arr.filter(num => frequency.get(num) === 1);
};

console.log(findUniqueMap(numbers));
