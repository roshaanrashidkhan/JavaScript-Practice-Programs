let lowestNumber = parseInt(prompt("Enter the lowest number:"));
let highestNumber = parseInt(prompt("Enter the highest number:"));

console.log(`The prime numbers between ${lowestNumber} and ${highestNumber} are:`);

for (let i = lowestNumber; i <= highestNumber; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    if (i > 1 && flag == 0) {
        console.log(i);
    }
}