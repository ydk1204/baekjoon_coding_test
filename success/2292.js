const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const input = parseInt(fs.readFileSync(VSCODEFILE));
let count = 1;
let room = 1;

while (room < input) {
  room += 6 * count;

  count++;
}

console.log(count);
