const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const input = fs
  .readFileSync(VSCODEFILE)
  .toString().split("\n")
const answer = [];
const T = parseInt(input.shift());

for (let i = 0; i < T; i++) { 
  const arr = input[i].split(" ");
  const [H, W, N] = arr.map(x => parseInt(x));
  let front = 0;
  let back = 0;
  if (N % H === 0) {
    front = H;
    back = N / H;
  }
  else if (N % H !== 0) {
    front = N % H;
    back = Math.floor(N / H) + 1;
  }
  if (back < 10) answer.push(`${front}0${back}`);
  else answer.push(`${front}${back}`);
}

console.log(answer.join("\n"));
