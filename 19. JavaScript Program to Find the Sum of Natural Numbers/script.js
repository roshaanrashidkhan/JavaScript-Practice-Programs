let input = parseInt(prompt("Enter a positive number:"));
let sum = 0;
for (let i = 1; i <= input; i++) {
    sum += i;
}

console.log(`The sum of the ${input} natural numbers are: ${sum}`);