const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const [N, K] = fs
  .readFileSync(VSCODEFILE)
  .toString().trim().split(" ").map(x => +x);

let n = 1;
let r = 1;
let n_r = 1;

for (let i = 1; i <= N; i++) {
  n *= i;
}

for (let i = 1; i <= K; i++) {
  r *= i;
}

for (let i = 1; i <= N - K; i++) {
  n_r *= i;
}

console.log(n / (r * n_r));