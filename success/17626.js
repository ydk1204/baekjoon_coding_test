const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
// let input = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");
let n = +fs.readFileSync(VSCODEFILE).toString().trim();
const dp = new Array(n + 1).fill(0);
dp[1] = 1;

const answer = (n) => {
  for (let i = 2; i <= n; i++) {
    let min = 4;
    for (let j = 1; j ** 2 <= i; j++) {
      min = Math.min(min, dp[i - j ** 2]);
    }
    dp[i] = min + 1;
  }
  console.log(dp[n]);
}

answer(n);