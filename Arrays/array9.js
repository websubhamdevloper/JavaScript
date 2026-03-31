const number = [1, 2, 3, 4];

const multiply = (arr) => {
  return arr.reduce((acc, num) => {
    return acc * num;
  }, 1);
};

console.log(multiply(number));
