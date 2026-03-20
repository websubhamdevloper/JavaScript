// Write an if-else statement to check student grades based on marks.

let marks = 85;

if (marks >= 90){
    console.log(`Grade A`);
} else if(marks > 80 && marks < 89){
    console.log(`Grade B`);
} else if (marks > 70 && marks < 79){
    console.log(`Grade C`);
} else if(marks > 60 && marks < 69){
    console.log(`Grade D`);
} else if (marks > 50 && marks < 59){
    console.log(`Grade E++`);
} else if (marks > 40 && marks < 49){
    console.log(`Grade E+`);
} else if (marks > 30 && marks < 39){
    console.log(`Grade E`);
}  else if (marks > 20 && marks < 29){
    console.log(`Grade G`);
} else {
    console.log(`Better luck next time homie`);
}