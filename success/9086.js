const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = './baekjoon_coding_test/coding/example.txt';

const fs = require("fs");
const input = fs.readFileSync(VSCODEFILE).toString().trim().split("\n").map(x => x);
let output = [];

for (let i = 1; i < input.length; i++) {
  if (input[i].length === 1) output.push(input[i] + input[i]);
  else if (input[i].length === 2) output.push(input[i][0] + input[i][1]);
  else {
    output.push(input[i][0] + input[i][input[i].length - 1]);
  }
}
console.log(output.join("\n"));