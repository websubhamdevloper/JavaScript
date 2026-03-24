// Create an array of numbers from 1 to 5 and log the first and last element. 
const numbers = [1, 3, 5, 7, 9];
console.log(numbers[2]);
console.log(numbers[4]);
console.log(numbers[1]);
console.log(numbers[3]);
console.log(numbers[0]);

// Add three elements to the end of an array using a method and display the updated array
const fruits = ['apple', 'grapes', 'banana'];
console.log(fruits);
fruits.push('mango', 'kiwi', 'guava');
console.log(fruits);

// Remove the first element from an array and display what was removed
const color = ['red', 'yellow', 'green', 'blue', 'grey', 'pink'];
console.log("Before::", color)
const removed = color.shift();
console.log("After::", color);
console.log("removed color::", removed);

// Use the map() method to create a new array where each number is squared

const baseValue = [1, 2, 3, 4, 5, 6, 7, 8];
const square = baseValue.map(base => base * base);
console.log(square);

// Filter an array to keep only numbers greater than 10, then double each remaining number

const filterBase = [10, 3, 6, 21, 13, 9];
const filterSquare = filterBase.filter(base => base > 9).map(base => base * base);
console.log(filterSquare);


// Filter an array to keep only numbers greater than 10, then double each remaining number

const value = [2, 4, 1, 10, 8];
const found = value.find(val => val > 5)
console.log(found);


// Use reduce() to find the sum of all numbers in an array
const reduceValue = [1, 8, 3, 9, 12, 5, 13];
const sum = reduceValue.reduce((accumulator, current) => {
    return accumulator + current;
}, 1);
console.log(sum);

