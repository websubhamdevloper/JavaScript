const num = [1, 3, 5, 7, 8, 9];
const hasEven = num.some(num => num % 2 === 0);
console.log(hasEven);

const positive = [5, 10, 15, 20];
const allPositive = positive.every(num => num > 0);
console.log(allPositive);

const mixed = [5, 10, -2, 20];
const allPositiveMixed = mixed.every(num => num > 0);
console.log(allPositiveMixed);


const value = [2, 4, 6, 1, 8, 10];
const hasOdd = value.some(num => num % 2 !== 0);
console.log(hasOdd);