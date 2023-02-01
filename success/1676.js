const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const input = fs.readFileSync(VSCODEFILE).toString().trim().split(" ");

let answer = 0;

if (input === 0) console.log(answer);
for (let i = 1; i <= input; i++) {
  if (i % 5 === 0) answer++;
  if (i % 25 === 0) answer++;
  if (i % 125 === 0) answer++;
}

console.log(answer);