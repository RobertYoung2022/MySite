const cryptos = ['BTC', 'ETH', 'USDT', 'BNB', 'ADA', 'XRP'];

// console.log(cryptos[0]);
// console.log(cryptos[1]);
// console.log(cryptos[2]);
// console.log(cryptos[3]);
// console.log(cryptos[4]);

//LOOPS

// TODO: FOR OF... LOOP - gives one element per iteration through the loop

for (let crypto of cryptos) {
    console.log(`FOR OF LOOP: ${crypto}`);
}
console.log('----------'); // creating a line in the code

// TODO: FOR IN... LOOP - gives the indexes of elements in an array or list

for (let index in cryptos) {
    // console.log(index + ':' + typeof index);
    console.log(`FOR IN LOOP: ${cryptos[index]}`); // does the same as the FOR loop on line 13-16
}
console.log('----------'); // creating a line in the code


// TODO: FOR... LOOP

for (let i = 0; i < cryptos.length; i += 1) {
    console.log(`FOR LOOP: ${cryptos[i]}`);
}
console.log('----------'); // creating a line in the code


// TODO: FOR WHILE... LOOP - run as long as the length of an array or list

let i = 0;
while  (i < cryptos.length) {
    console.log(`FOR WHILE LOOP: ${cryptos[i]}`);
    i += 1;
}

// DO WHILE... LOOP - performs loop at least once or until condition(s) are met

let value = null; // set the variable

// testing the input variable
do {
    prompt('Enter a positive number: ');
} while (!(value > 0));

console.log(value); // logging the results of the DO WHILE loop

// WHILE... LOOP - loops until the conditions are met

while (!(value > 0)) {
    prompt('Enter a positive number: ');
}

console.log(value);