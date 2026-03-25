const number = [2, 3, 4, 5];
const product = number.reduce((accumulator, current) => {
  return accumulator * current;
}, 1);

console.log(product);

const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

const userMap = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
}, {});

console.log(userMap);
