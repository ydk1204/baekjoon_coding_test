const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = './coding/example.txt';

const fs = require("fs");
const input = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");
const n = input.shift();

input.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);
console.log(input.join("\n"));


