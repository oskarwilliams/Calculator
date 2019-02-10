const readline = require('readline-sync');
var numbers
var answer
var answerfunc

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

console.log('Welcome to the calculator!');

console.log('Please enter the operator:');
const oper = readline.prompt();

console.log('How many numbers do you want to ' + oper + '?');
const totnum = +readline.prompt();

numbers = new Array();
for (i = 0; i <totnum; i++) {
    var j = i+1
    console.log('Please enter number ' + j + ':');
    const x1 = +readline.prompt();
    numbers = numbers.concat(Array(x1))
}

answer = numbers[0]
// for (i = 0; i <totnum-1; i++) {
//     answer = eval(String(answer) + oper + String(numbers[i+1]));
// }

switch(oper) {
    case '+':
        answerfunc = add;
        break;
    case '-':
        answerfunc = subtract;
        break;        
    case '*':
        answerfunc = multiply;
        break;
    case '/':
        answerfunc = divide;
        break;

}

for (i = 0; i <totnum-1; i++) {
    answer = answerfunc(answer,numbers[i+1]);
}

console.log('The answer is ' + answer);