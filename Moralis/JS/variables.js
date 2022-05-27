
// Get a users' name
let name = prompt('Enter your name: ');

// Show a greetings message with inputted name
alert(`Greetings, ${name}!`);


    // A WAY TO ADD USER PROMPT INPUTS TOGETHER
// let firstNumber = +prompt('Enter the first number: ');
// let secondNumber = +prompt('Enter the second number: ');
// alert(`Sum: ${firstNumber + secondNumber}`);


let firstNumber = Number.parseInt(prompt('Enter the first number: '));
let secondNumber = Number.parseInt(prompt('Enter the second number: '));

alert(`Sum: ${firstNumber + secondNumber}`);


const ticker = prompt('Enter your crypto ticker: ');
const amount = +prompt('Enter the amount you bought: ');

alert(`You have just bought ${amount}-${ticker}`);