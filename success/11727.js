const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
let input = +fs.readFileSync(VSCODEFILE).toString();
const list = [];

list[1] = 1
list[2] = 3
list[3] = 5
list[4] = 11

for (let i = 5; i <= input; i++) {
  if (!Number(list[i])) list[i] = 0;
  list[i] = (list[i-1] + list[i-2] * 2) % 10007;
}

console.log(list[input]);