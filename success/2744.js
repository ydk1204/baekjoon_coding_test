const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const input = fs.readFileSync(VSCODEFILE).toString().trim();
let txt = "";

// for (let i = 0; i < input.length; i++) {
//   if (input.charCodeAt(i) <= 97) {
//     let convertValue = input.charCodeAt(i) + 32;
//     arr.push(String.fromCharCode(convertValue));
//   } else {
//     let convertValue = input.charCodeAt(i) - 32;
//     arr.push(String.fromCharCode(convertValue));
//   }
// }

// console.log(arr.join(""));

// for (let i = 0; i < input.length; i++) {
//   if (input.charCodeAt(i) <= 97) {
//     txt += input[i].toLowerCase();
//   } else {
//     txt += input[i].toUpperCase();
//   }
// }

for (let i = 0; i < input.length; i++) {
  if (input[i] === input[i].toUpperCase()) txt += input[i].toLowerCase();
  else txt += input[i].toUpperCase();
}

console.log(txt);
