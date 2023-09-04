const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
let input = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");
let nNumber = input[1].split(" ").map(a => +a);
let nNumberSum = new Array(nNumber.length + 1).fill(0);
let answer = [];

nNumber.forEach((a, b) => {
  nNumberSum[b + 1] = nNumberSum[b] + a;
});

input.slice(2).forEach((xy) => {
  const [x, y] = xy.split(" ").map(c => +c);
  answer.push(nNumberSum[y] - nNumberSum[x - 1]);
});

console.log(answer.join("\n"));