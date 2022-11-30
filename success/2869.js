const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const input = fs
  .readFileSync(VSCODEFILE)
  .toString()
  .trim()
  .split(" ")
  .map((a) => Number(a));

const [A, B, V] = input;
// let day = 0;
// let height = 0;

// while (height < V) {
//   day++;
//   height += A;  
//   if (height >= V) break;
//   height -= B;
// }
// console.log(day);

console.log(Math.ceil((V - B) / (A - B)));