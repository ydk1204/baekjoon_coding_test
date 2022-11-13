const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = './coding/example.txt';

const fs = require("fs");
const input = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");
let n = parseInt(input.shift());
let arr = input.shift().split(' ').map(x => parseInt(x));
let answer = 0;

for (let i = 0; i < n; i++) {
  if (arr[i] === 1) continue;
  let count = 0;
  for (let j = 2; j < arr[i]; j++) {
    if (arr[i] % j === 0) {
      count++;
    }
  }
  if (count === 0) {
    answer++;
  }
}

console.log(answer);


