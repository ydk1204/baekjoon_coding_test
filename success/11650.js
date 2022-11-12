const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = './baekjoon_coding_test/coding/example.txt';

const fs = require("fs");
const input = fs.readFileSync(VSCODEFILE).toString().trim().split("\n").map(x => x.trim());
let [n, ...arr] = input;
arr = arr.map(x => x.split(" ").map(x => +x));

const answer = arr.sort((a, b) => {
  console.log(a, b)
  if (a[0] > b[0]) return 1;
  else if (a[0] < b[0]) return -1;
  else return a[1] - b[1];
})

console.log(answer.map(v => v.join(" ")).join("\n"));