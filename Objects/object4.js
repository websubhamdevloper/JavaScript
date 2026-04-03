const obj = { x: 10, y: 20, m: 30, n: 40 };
const { x, y, ...restNum } = obj;
console.log(x);
console.log(y);
console.log(restNum);
