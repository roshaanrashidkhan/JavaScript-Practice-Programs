let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
let c = Number(prompt("Enter third number:"));

if (a > b && a > c) {
    console.log(`${a} is the greatest`);
}

else if (b > a && b > c) {
    console.log(`${b} is the greatest`);
}

else if (c > a && c > b) {
    console.log(`${c} is the greatest`);
};