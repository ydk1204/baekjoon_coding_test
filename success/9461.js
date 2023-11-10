const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
let [t, ...input] = fs.readFileSync(VSCODEFILE).toString().trim().split("\n").map(a => +a);

const series = [0, 1, 1, 1, 2, 2];

for (let i = 0; i < t; i++) {
  const n = input[i];

  for (let j = 6; j <= n; j++) {
    series[j] = series[j - 5] + series[j - 1];
  }

  console.log(series[n]);
}