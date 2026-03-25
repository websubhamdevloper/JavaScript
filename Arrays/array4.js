const numbers = [1, 2, 2, 3, 4, 4, 5, 1];

// Method 1: Using Set and Spread operator
const removeDuplicate = (arr) => [...new Set(arr)];
console.log(removeDuplicate(numbers));


// Method 2: Using reduce() 
const removeDuplicateReduce = (arr) => {
    return arr.reduce((acc, num) => {
        if(!acc.includes(num)){
            acc.push(num);
        }
        return acc;
    }, []);
};

console.log(removeDuplicateReduce(numbers));
