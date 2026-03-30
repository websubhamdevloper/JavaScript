const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

// Method 1: Using filter and includes 
const intersection = (arr1, arr2) => {
    return arr1.filter(item => arr2.includes(item));
};

// Method 2: Using Set for better performance
const intersectionOptimized =(arr1, arr2) => {
    const set2 = new Set(arr2);
    return arr1.filter(item => set2.has(item));
};

console.log(intersection(array1, array2));
console.log(intersectionOptimized(array1, array2));

