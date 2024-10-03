let input = parseInt(prompt("Enter a number to check if it is an armstrong number:"));
let splitNumber = [...input + ''];

let armstrongNumber = 0;
for (let i = 0; i < splitNumber.length; i++) {
    
    armstrongNumber += (+splitNumber[i]) ** splitNumber.length;
    
    // console.log(`The value of ${(+splitNumber[i])} ^ ${splitNumber.length} is ${(+splitNumber[i]) ** splitNumber.length}`)
}

console.log(`The given number is: ${input} and the total is: ${armstrongNumber}`)

if (armstrongNumber == input) {
    console.log("Therefore, the given number is an armstrong number")
} else {
    console.log("Therefore, the given number is not an armstrong number")
}