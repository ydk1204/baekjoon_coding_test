const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
let [t, ...input] = fs.readFileSync(VSCODEFILE).toString().trim().split("\n").map(a => +a);
let nMax = Math.max(...input);
let arr = Array.from(Array(nMax+1), () => Array(2).fill(0))
arr[0] = [1, 0];
arr[1] = [0, 1];
arr[2] = [1, 1];
arr[3] = [1, 2];

for (let i of input) {
  for (let j = 4; j <= i; j++) {
    if (arr[j][0] === 0) {
      arr[j][0] = arr[j - 1][0] + arr[j - 2][0];
      arr[j][1] = arr[j - 1][1] + arr[j - 2][1];
    }
  }
  console.log(arr[i].join(' '));
}