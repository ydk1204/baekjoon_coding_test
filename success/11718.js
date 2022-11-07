const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = './baekjoon_coding_test/coding/example.txt';

const fs = require("fs");
const input = fs
  .readFileSync(VSCODEFILE)
  .toString()
  .trim()
  .split("\n")
  .map(x => x);

// let answer = "";
// for (let i = 0; i < input.length; i++) {
//   answer += input[i].toString() + " ";
//   answer += "\n";
// }

// console.log(answer);

// console.log(input.join("\n"));
