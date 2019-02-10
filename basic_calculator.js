const readline = require('readline-sync');

var answer

function multiply(a,b) {
    return a*b;
}

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function divide(a,b) {
    return a/b;
}

console.log('Please enter the operator:');
const oper = readline.prompt();

console.log('Please enter the first number:');
const x1 = +readline.prompt();

console.log('Please enter the second number:');
const x2 = +readline.prompt();


// if (oper == '+') {
//     answer = add(x1,x2);
// } else if (oper == '-') {
//     answer = subtract(x1,x2);
// } else if (oper == '*') {
//     answer = multiply(x1,x2);
// } else if (oper == '/') {
//     answer = divide(x1,x2);
// }

switch(oper) {
    case '+':
        answer = add(x1,x2);
        break;
    case '-':
        answer = subtract(x1,x2);
        break;        
    case '*':
        answer = multiply(x1,x2);
        break;
    case '/':
        answer = divide(x1,x2);
        break;

}



console.log(answer);