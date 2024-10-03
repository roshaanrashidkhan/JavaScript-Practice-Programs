let number = parseInt(prompt("Enter a number:"));
let isPrime = true;

if (number === 1) {
    console.log(`${number} is neither prime nor composite number`);
} else if (number > 1) {
    for (let index = 2; index < number/2; index++) {
        if (number % index === 0) {
            isPrime = false;
            break;
        };
    }
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is not a prime number`);
    };
} else {
    console.log(`${number} is not a prime number`);
};