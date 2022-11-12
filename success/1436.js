const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
let input = parseInt(fs.readFileSync(VSCODEFILE));
let end = 665;

while (input > 0) {
  end++;
  if (end.toString().includes("666")) input--;
}

console.log(end);
