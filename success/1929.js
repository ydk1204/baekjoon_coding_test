const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const [N, M] = fs
  .readFileSync(VSCODEFILE)
  .toString().trim().split(" ").map(x => +x);

const answer = [];
const prime = { 1: true };

for (let i = 2; i <= Math.ceil(Math.sqrt(M)); i++) {
  if (prime[i]) {
    continue;
  }
  for (let j = i ** 2; j <= M; j += i) {
    prime[j] = true;
  }
}

for (let i = N; i <= M; i++) {
  if (!prime[i]) answer.push(i);
}

console.log(answer.join("\n"));