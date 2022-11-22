const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const input = fs
  .readFileSync(VSCODEFILE)
  .toString()
  .trim()
  .split("\n")
  .map((a) => a.split(" ").map((b) => Number(b)));

const N = input.shift();
const answer = [];

for (let i = 0; i < N; i++) {
  let count = 1;
  for (let j = 0; j < N; j++) {
    if (i !== j) {
      if (input[i][0] < input[j][0] && input[i][1] < input[j][1]) count++;
    }
  }
  answer.push(count);
}

console.log(answer.join(" "));
