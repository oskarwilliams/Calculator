const readline = require('readline-sync');

function multiply(a,b) {
    return a*b;
}

console.log('Please enter the first value to multiply:');
const x1 = +readline.prompt();

console.log('Please enter the second value to multiply:');
const x2 = +readline.prompt();

console.log(multiply(x1,x2));




