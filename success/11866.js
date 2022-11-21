const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

// const fs = require("fs");
// const input = fs
//   .readFileSync(VSCODEFILE)
//   .toString()
//   .trim()
//   .split(" ")
//   .map((x) => Number(x));

// [n, k] = input;
// let answer = [];

// let arr = Array(n)
//   .fill()
//   .map((x, i) => i + 1);

// while (arr.length >= k) {
//   let arrUnit = arr.splice(0, k);
//   arr = [...arr, ...arrUnit];
//   answer.push(arr.pop());
// }

// answer = [...answer, ...arr];

// console.log("<" + answer.join(", ") + ">");

const fs = require("fs");
const input = fs.readFileSync(VSCODEFILE).toString().trim().split(" ");

const n = +input[0];
const k = +input[1];
let answer = [];

const arr = Array.from({ length: n }, (x, i) => i + 1);
for (let i = 0; i < n; i++) {
  for (let j = 1; j <= k; j++) {
    if (j === k) {
      answer.push(arr.shift());
    } else {
      arr.push(arr.shift());
    }
  }
}

console.log("<" + answer.join(", ") + ">");
