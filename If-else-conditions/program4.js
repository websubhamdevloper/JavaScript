// Write nested if-else statements to find the largest number among three numbers

let n1 = 3;
let n2 = 4;
let n3 = 12;

if (n1 > n2 && n1 > n3){
    console.log(`The value of n1 ${n1} is larger than the other two values!`)
}
else if (n2 > n1 && n2 > n3) {
    console.log(`the value of n2 ${n2} is larger than the other two values!`);
}
else {
    console.log(`The value of n3 ${n3} is larger than the values of the other two numbers!`)
}
