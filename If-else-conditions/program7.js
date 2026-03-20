// Write an if-else statement to check if a year is a leap year.

let year = 2026;
if( year / 4 === 0 && year / 100 !== 0 || year / 400 === 0){
    console.log(`Yeah, this year ${year} is leap year buddy!`)
} else{
    console.log(`Oops, Sorry ${year} is not a leap year`)
}