let firstNumber = prompt("Enter first number:");
let lastNumber = prompt("Enter last number:");

for (let i = firstNumber; i <= lastNumber; i++) {
    let splitNumber = [...i + ''];
    let armstrongNumber = 0;
    // console.log(splitNumber)
    
    for (let j = 0; j < splitNumber.length; j++) {
        armstrongNumber += (+splitNumber[j]) ** splitNumber.length;
        // console.log(`The value of ${(+splitNumber[j])} ^ ${splitNumber.length} is ${(+splitNumber[j]) ** splitNumber.length}`)
    }
    
    if (armstrongNumber == i) {
        console.log(`The given number is: ${i} and the total is: ${armstrongNumber}`)
        console.log("Therefore, the given number is an armstrong number")
    } 
    // else {
    // console.log("Therefore, the given number is not an armstrong number")
    // }
};

