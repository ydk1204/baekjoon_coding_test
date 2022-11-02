const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "example.txt";

var fs = require("fs");
var [...arr] = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");
arr = arr.map(Number).sort((a, b) => a - b);
let result = [];

for (let i = 1; i <= 30; i++) {
  if (!arr.includes(i)) result.push(i);
  if (result.length === 2) break;
}

console.log(result.join("\n"));
