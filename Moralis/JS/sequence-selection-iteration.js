// const data = prompt('Enter your name: ');

// console.log(data?.length);

// ? stops input from being null when cancel is clicked

let arr = new Array(100).fill(null).map((_, i) => i);

console.log(arr);

for (let elem of arr) {
    if (elem % 2 === 0) {
        console.log(elem);
    } else {
        console.log('ODD');
    }
}


// TODO: EXAMPLE of IF-ELSE statement
// if (condition) {
//     statement1;
//     statement2;
//     ...
// } else if ( secondCondition) {
//     statements;
// } else {
//     statement;
// }


// TODO: HOW TO CHECK TO SEE IF A NUMBER IS ODD OR EVEN WITH A PROMPT/ALERT
// const number = +prompt('Enter a number: ');
const number = Number.parseInt(prompt('Enter a number: '));

if (number % 2 === 1) { // checks to see if prompt input number is even
    alert(`${number} is odd.`);
} else if (Number.isNaN(number)) { // checks to see if prompt input number is not a number
    alert(`${number} is not a number.`);
} else { // checks to see if prompt input number is odd
    alert(`${number} is even.`);
}

const number2 = Number.parseInt(prompt('Enter a number: '));

switch (number2) {
    case 1:  console.log('first case');
        break;
    case 2:
        console.log('second case');
        break;
    default:
        console.log('try again');
        break;
}