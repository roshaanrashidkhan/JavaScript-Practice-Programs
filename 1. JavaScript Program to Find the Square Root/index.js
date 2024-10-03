// My Solution
function squareRoot(number) {
    return number ** (1/2);
};

console.log(squareRoot(4));
console.log(squareRoot(9));
console.log(squareRoot(16));
console.log(squareRoot(25));

// Solution by Programiz
// To understand this example, you should have the knowledge of the following JavaScript programming topics:
    // JavaScript Variables and Constants
    // JavaScript Math.sqrt()

let number = prompt("Enter the number to calculate the Square Root;");
let result = Math.sqrt(number);

console.log(`The Square root of ${number} is ${result}`);