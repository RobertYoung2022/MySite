function createTransaction(ticker, amount, clothes) {
    const transaction = {};
    transaction.ticker = ticker;
    transaction.amount = amount;
    return transaction;
}

const newTransaction = createTransaction('ETH',21e10);

console.log(newTransaction);
// OR
console.log(createTransaction('ETH',21e10));

console.log(`The new transaction divided by 2 = ${(newTransaction.amount /= 2)}`);

//  ----------


// TODO: Traditional Function
function sum(a, b) {
    return a + b;
}
console.log(`Sum = ${sum(2,5)}`);


// TODO: Arrow Function
const sum2 = (a, b) => a + b; // Can use this syntax only when a return statement is used in a function

console.log(`Sum2 = ${sum2(2, 5)}`);

// Extra Example:

// TODO:LONG WAY
// function calculateVelocity(v0, acc, time) {
//     return v0 + acc * time;
// }

// TODO: SHORT WAY
const calculateVelocity = (v0, acc, time) =>  v0 + acc * time;

console.log(`Current velocity is = ${calculateVelocity(10, 5, 8)}`);