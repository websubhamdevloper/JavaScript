const names = ["subham", "viraj", "raja"];
console.log(...names);
console.log(names);

const number = [1, 2, 3, 4, 5, 6, 7, 8];
const [fnum, Snum, ...restNum] = number;
console.log(fnum);
console.log(Snum);
console.log(restNum);

function seperator() {
  return ["alpha", "beta", "gamma", "delta"];
}

const [val1, val2, ...restVal] = seperator();
console.log(val1);
console.log(val2);
console.log(restVal);
