const readline = require('readline-sync');
var numbers
var answer
var operator

function printWelcomeMessage() {
    console.log('Welcome to the calculator! \n ==========================');
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

function getString(a) {
    console.log(a);
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

function performVowelCounter(str) {
    let counts = {A: 0, E: 0, I: 0, O: 0, U: 0};
    for (let char of str) {
        const upperChar = char.toUpperCase();
        if (counts.hasOwnProperty(upperChar)) {
            counts[upperChar]++;
        }
    }
    console.log('\n A: ' + counts['A'] + '\n E: ' + counts['E'] + '\n I: ' + counts['I'] + '\n O: ' + counts['O'] + '\n U: ' + counts['U'])
}

printWelcomeMessage();
while (true) {
    const calculatorMode = readInNumber('\n Which calculator mode do you want? \n  1) Arithmetic \n  2) Vowel counting')
    if (calculatorMode == 1) {
        const operator = getString('\n What operator do you want to use?');
        const numbers = getNumbers(operator);
        const answer = performFullCalculation(operator,numbers);
        console.log('The answer is ' + answer);
    } else if (calculatorMode == 2) {
        const stringToCount = getString('\n Please enter a string:')
        console.log('\n The vowel counts are:')
        performVowelCounter(stringToCount)
    }
}
