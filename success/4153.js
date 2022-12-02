const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const input = fs
  .readFileSync(VSCODEFILE)
  .toString()
  .trim()
  .split("\n")
  .map((a) => a.split(" "));

input.pop();
const answer = [];

for (let num of input) {
  let val = num.map(x => parseInt(x));
  val.sort((a, b) => {
    return a - b;
  })
  const [A, B, C] = val;
  if (A * A + B * B === C * C) answer.push('right');
  else answer.push('wrong');
}

console.log(answer.join("\n"));