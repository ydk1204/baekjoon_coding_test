const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "example.txt";

var fs = require("fs");
var [t, arr, v] = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");
arr = arr.split(" ").map(Number);
v = parseInt(v);
var count = 0;

for (let key of arr) {
  if (key === v) count++;
}

console.log(count);
