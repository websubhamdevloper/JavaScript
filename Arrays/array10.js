const compress = (arr) => {
  if (arr.length === 0) return [];
  const result = [[arr[0], 1]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      result[result.length - 1][1]++;
    } else {
      result.push([arr[i], 1]);
    }
  }
  return result;
};

const arr = [1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 4];
console.log(compress(arr));
