let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operation = prompt("Enter operation (+, -, *, /):")

if (operation = "+") {
    console.log(`The Addition of ${num1} and ${num2} is ${num1 + num2}`)
} else if (operation = "-") {
    console.log(`The Subtraction of ${num1} and ${num2} is ${num1 - num2}`)
} else if (operation = "*") {
    console.log(`The Multiplication of ${num1} and ${num2} is ${num1 * num2}`)
} else if (operation = "/") {
    console.log(`The Division of ${num1} and ${num2} is ${num1 / num2}`)
}