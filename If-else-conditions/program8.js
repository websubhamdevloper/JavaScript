// Write an if-else statement to validate a password.

let pass = "Mypass298";

let hasLength = pass.length >= 8;
let hasUpper = /[A-Z]/.test(pass);
let hasNumber = /[0-9]/.test(pass);

if (hasLength && hasUpper && hasNumber){
    console.log(`your password is correct and can be used in secure websites!`)
}
else {
    console.log(`Your password is not correct and don't use it on any website!`)
}
