const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const partition = (arr, predicate) => {
    return arr.reduce((acc, item) => {
        predicate(item) ? acc[0].push(item) : acc[1].push(item);
        return acc;
    }, [[], []]);
};

const [evens, odds] = partition(numbers, num => num % 2 === 0);

console.log(evens);
console.log(odds);
