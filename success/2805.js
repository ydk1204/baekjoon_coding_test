const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const input = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");

const [n, m] = input
  .shift()
  .split(" ")
  .map((x) => +x);
const woods = input
  .shift()
  .split(" ")
  .map((x) => +x)
  .sort();
let max = Math.max(...woods);
let min = 1;

while (min <= max) {
  let mid = parseInt((max + min) / 2);
  let woodSlice = woods
    .map((wood) => (wood > mid ? parseInt(wood - mid) : 0))
    .reduce((a, b) => a + b);

  if (woodSlice >= m) min = mid + 1;
  else max = mid - 1;
}

console.log(max);
