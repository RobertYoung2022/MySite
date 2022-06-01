const cryptos = ['BTC', 'ETH', 'USDT', 'BNB', 'ADA', 'XRP'];

// FOR... LOOP

// i = i + 1 or i += 1

// for (let i = 0; i < cryptos.length; ++i) {
//     console.log(`FOR LOOP: ${cryptos[i]}`);
// }
//
// console.log('----------');
// for (let i = 0; i < cryptos.length; i++) {
//     console.log(`FOR LOOP: ${cryptos[i]}`);
// }

let i = 0;
i++;
console.log(i);

let i0 = i++; // post increment operator
console.log(i0);
console.log(i);

++i;
console.log(i);

--i;
console.log(i);

i--;
console.log(i);

// DOM Injection - use below code in the Google Chrome console

// TODO: loops through the cryptos list and injects paragraph HTML of every element in the list to $0 aka the body of the file
// cryptos.forEach(function (crypto) {
//     $0.innerHTML += `<p>${crypto}</p>`;
// });

// BETTER WAY THAN PREVIOUS EXAMPLE
const paragraphs = cryptos.map(function (crypto) {
    return `<p>${crypto}</p>`;
});
console.log(paragraphs.join(''));
// TODO: research "map JS"



