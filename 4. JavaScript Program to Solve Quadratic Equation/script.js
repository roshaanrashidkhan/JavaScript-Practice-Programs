// Solution by me

let a = Number(prompt("Enter the value of a:"));
let b = Number(prompt("Enter the value of b:"));
let c = Number(prompt("Enter the value of c:"));

// a = Number(a);
// b = Number(b);
// c = Number(c);

console.log(typeof a,typeof b, typeof c);

let quadraticEquation1 = (-b + (Math.sqrt((b**2) - (4*a*c)))) / (2 * a);
let quadraticEquation2 = (-b - (Math.sqrt((b**2) - (4*a*c)))) / (2 * a);

console.log(quadraticEquation1, quadraticEquation2);