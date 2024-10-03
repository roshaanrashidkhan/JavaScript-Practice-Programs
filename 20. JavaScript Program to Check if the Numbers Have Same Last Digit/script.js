let num1 = prompt('Enter first integer:');
let num2 = prompt('Enter second integer:');
let num3 = prompt('Enter third integer:');

let lastNumber1 = [...num1 + ''];
let lastNumber2 = [...num2 + ''];
let lastNumber3 = [...num3 + ''];

console.log(lastNumber1);
console.log(lastNumber2);
console.log(lastNumber3);

let lastDigitComparison = parseInt(lastNumber1.splice(-1).parseInt()) == parseInt(lastNumber2.splice(-1)) == parseInt(lastNumber3.splice(-1));

if (lastDigitComparison) {
    console.log("The last digits are same!");
} else {
    console.log("The last digits are not same.");
};