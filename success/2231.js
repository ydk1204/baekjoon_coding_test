const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const input = fs
  .readFileSync(VSCODEFILE)
  .toString()

const N = Number(input);
const start = N - (String(N).length * 9);
let M = start;
let answer;

while (true) {
  M++;
  let sum = M;
  for (let i = 0; i < String(M).length; i++) {
    sum += Number(String(M).charAt(i));
  }
  if (sum === N) {
    answer = M;
    break;
  }
  if (M >= N) {
    answer = 0;
    break;;
  }
}

console.log(answer);