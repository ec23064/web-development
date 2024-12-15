let x = window.prompt("Enter a number");
let y = window.prompt("Enter another number");
let z = window.prompt("Enter a third number");
let a = window.prompt("Enter a fourth number");
let b = window.prompt("Enter a fifth number");

let numbers = [x, y, z, a, b];
window.alert(Math.max(...numbers));
