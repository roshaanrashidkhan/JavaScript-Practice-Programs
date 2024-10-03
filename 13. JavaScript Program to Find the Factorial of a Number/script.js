let input = parseInt(prompt(`Enter the number:`));

let numbers = 1;
for (let i = 2; i <= input; i++) {
    numbers *= i;
}

console.log(numbers);