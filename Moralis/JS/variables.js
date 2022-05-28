/*// Get a users' name
let name = prompt('Enter your name: ');

// Show a greetings message with inputted name
alert(`Greetings, ${name}!`);


    // A WAY TO ADD USER PROMPT INPUTS TOGETHER
// let firstNumber = +prompt('Enter the first number: ');
// let secondNumber = +prompt('Enter the second number: ');
// alert(`Sum: ${firstNumber + secondNumber}`);


let firstNumber = Number.parseInt(prompt('Enter the first number: '));
let secondNumber = Number.parseInt(prompt('Enter the second number: '));

alert(`Sum: ${firstNumber * secondNumber}`);


const ticker = prompt('Enter your crypto ticker: ');
const amount = +prompt('Enter the amount you bought: ');
const mood = prompt('Enter current mood: ')

alert(`You have just bought ${amount} ${ticker}. Your current mood is ${mood}.`);

//functional programming - immutably
const purchase = {
    ticker: ticker,
    amount: amount
};

alert(purchase.ticker);
alert(`${purchase.ticker} ${[purchase.amount]}`);

const owner = {
    name: name,
    accountNumber: amount
};

alert(`Owner: ${owner.name} has a balance of ${owner.accountNumber}.`);*/


// ARRAYS LESSON
let cheatCode = [19, 65, 9, 17];
console.log(cheatCode);
console.log(cheatCode[0]);
console.log(cheatCode[1]);
console.log(cheatCode[2]);
console.log(cheatCode[3]);
console.log(`The last index value in the array is: ${cheatCode.length - 1}`);
console.log(`The last value in the array is: ${cheatCode[cheatCode.length - 1]}`);
// console.log(cheatCode.toString());
console.log(cheatCode.join("-"));
// document.body.innerHTML = `<ul><li>${cheatCode.join('<li></li>')}</li></ul>`;

cheatCode.push(5);
cheatCode.push(2);
console.log(`new code is ${cheatCode.join(' / ')}`);

var newCheatCode = cheatCode.slice(); // clone original cheat code and copies into newCheatCode

console.log(newCheatCode.pop()); //

let abc = ['a', 'b', 'c'];
let cba = abc.reverse();

console.log(cba);
console.log(cba.sort());


// use https://pythontutor.com/ to view how the changes to the below code works visually
let age = 15;
let isSwitchedOn = true;
let top5Cryptos = ['BTC', 'ETH', 'USDT', 'ADA', 'OSIS'];
// let transaction = {
//     currency: top5Cryptos[1],
//     amount: 1000000000000000000
// },
//     {
//         currency: ''
//     }
let transactions = [
    {
        currency: 'ETH',
        amount: 1
    },
    {
        currency: 'BTC',
        amount: 0.2
    }
];

let clonedTransaction = JSON.parse(JSON.stringify(transactions));
clonedTransaction[1].amount += 0.1;

console.log(transactions);
console.log(clonedTransaction);

age = age + 6;
isSwitchedOn = !isSwitchedOn;
let currentAmount = transactions.amount;
transactions.amount *= 2;

let cryptos = [...top5Cryptos];
cryptos.push('USDC');
cryptos[1] = 'AVAX';

console.log(top5Cryptos);
console.log(cryptos);
