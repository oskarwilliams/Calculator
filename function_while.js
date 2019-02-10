const readline = require('readline-sync');
var numbers
var answer
var operator
var a
var b
var c

function printWelcomeMessage() {
    console.log('Welcome to the calculator!');
    console.log('==========================');
}

function readInNumber(a) {
    console.log(a);
    const num = readline.prompt();
    if (isNaN(num)) {
        console.log('That is not a number, try again');
        return readInNumber(a)
    } else {
        return +num
    }
}

function getOperator() {
    console.log('What operator do you want to use?');
    return readline.prompt();
}

function getNumbers(operator) {
    const totnum = readInNumber('How many numbers do you want to ' + operator + '?'); 
    var numbers = new Array();
    for (i = 0; i <totnum; i++) {
        var j = i+1
        const x1 = readInNumber('Enter number ' + j);
        numbers = numbers.concat([x1]);
    }
    return numbers
}

function performOneCalculation(a,b,c) {
    switch(a) {
        case '+':
            return b += c;
            break;
        case '-':
            return b -= c;
            break;        
        case '*':
            return b *= c;
            break;
        case '/':
            return b /= c;
            break;
    
    }
}

function performFullCalculation(operator,numbers) {
    answer = numbers[0]
    for (i = 1; i <numbers.length; i++) {
        answer = performOneCalculation(operator,answer,numbers[i])
    }
    return answer
}

printWelcomeMessage();
while (true) {
    const operator = getOperator();
    const numbers = getNumbers(operator);
    answer = performFullCalculation(operator,numbers);
    console.log('The answer is ' + answer);
}