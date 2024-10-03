let input = parseInt(prompt("Enter a number:"));

let n1 = 0, n2 = 1, nextTerm;

console.log("Fibonacci Series:");

for (let i = 1; i <= input; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
};