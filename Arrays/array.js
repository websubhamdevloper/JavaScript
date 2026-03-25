// Create an array of numbers from 1 to 5 and log the first and last element.
const numbers = [1, 3, 5, 7, 9];
console.log(numbers[2]);
console.log(numbers[4]);
console.log(numbers[1]);
console.log(numbers[3]);
console.log(numbers[0]);

// Add three elements to the end of an array using a method and display the updated array
const fruits = ["apple", "grapes", "banana"];
console.log(fruits);
fruits.push("mango", "kiwi", "guava");
console.log(fruits);

// Remove the first element from an array and display what was removed
const color = ["red", "yellow", "green", "blue", "grey", "pink"];
console.log("Before::", color);
const removed = color.shift();
console.log("After::", color);
console.log("removed color::", removed);

// Use the map() method to create a new array where each number is squared

const baseValue = [1, 2, 3, 4, 5, 6, 7, 8];
const square = baseValue.map((base) => base * base);
console.log(square);

// Filter an array to keep only numbers greater than 10, then double each remaining number

const filterBase = [10, 3, 6, 21, 13, 9];
const filterSquare = filterBase
  .filter((base) => base > 9)
  .map((base) => base * base);
console.log(filterSquare);

// Filter an array to keep only numbers greater than 10, then double each remaining number

const value = [2, 4, 1, 10, 8];
const found = value.find((val) => val > 5);
console.log(found);

// Use reduce() to find the sum of all numbers in an array
const reduceValue = [1, 8, 3, 9, 12, 5, 13];
const sum = reduceValue.reduce((accumulator, current) => {
  return accumulator + current;
}, 1);
console.log(sum);

// Flatten a nested array using flat() method and then find all numbers greater than 5

const nestedArr = [1, [2, 3, [4, 5, [6, 7]]]];
const flattenArr = nestedArr.flat(Infinity);
const result = flattenArr.filter((num) => num > 5);
console.log(result);

// Create a function that groups array elements by a property using reduce()

const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" },
  { name: "David", grade: "B" },
  { name: "Eve", grade: "A" },
];

const groupByGrade = students.reduce((acc, student) => {
    const grade = student.grade;
    if (!acc[grade]){
        acc[grade] = [];
    }
    acc[grade].push(student.name);
    return acc;
}, {});

console.log(groupByGrade);


// Given an array of numbers, find the longest consecutive sequence of increasing numbers.

const sequence = [1, 2, 3, 7, 8, 9, 10, 15, 16, 17 , 18, 19];

function longestIncreasingSequence(seq) {
  let maxLength = 1;
  let maxStart = 0;
  let currentLength = 1;
  let currentStart = 0;

  for (let i = 1; i < seq.length; i++){
    if (seq[i] === seq[i -1] + 1){
      currentLength++;
    } else {
      if (currentLength > maxLength) {
        maxLength = currentLength;
        maxStart = currentStart;
      }
      currentLength = 1;
      currentStart = i;
    }
  }

  if(currentLength > maxLength){
    maxLength = currentLength;
    maxStart = currentStart;
  }

  return seq.slice(maxStart, maxStart + maxLength);
}

console.log(longestIncreasingSequence(sequence));