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
