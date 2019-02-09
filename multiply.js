const readline = require('readline-sync');

console.log('Please enter the first value to multiply:');
const x1 = readline.prompt();

console.log('Please enter the second value to multiply:');
const x2 = readline.prompt();

function multiply(a,b) {
    var y;
    return y = a*b;
}

console.log(multiply(x1,x2));




