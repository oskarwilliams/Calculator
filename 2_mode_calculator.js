const readline = require('readline-sync');
var numbers
var answer
var operator

function printWelcomeMessage() {
    console.log('Welcome to the calculator!');
    console.log('==========================');
}

function printCalculatorModeMessage() {
    console.log()
    console.log('Which calculator mode do you want?');
    console.log(' 1) Arithmetic');
    console.log(' 2) Vowel counting');
}

function readInNumber(a) {
    console.log(a);
    var num = readline.prompt();
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
    var answer = numbers[0]
    for (var i = 1; i <numbers.length; i++) {
        answer = performOneCalculation(operator,answer,numbers[i])
    }
    return answer
}

printWelcomeMessage();
while (true) {
    printCalculatorModeMessage()
    const calculatorMode =  readline.prompt()
    if (calculatorMode == 1) {
        const operator = getOperator();
        const numbers = getNumbers(operator);
        const answer = performFullCalculation(operator,numbers);
        console.log('The answer is ' + answer);
    } else if (calculatorMode == 2) {

    }
}
