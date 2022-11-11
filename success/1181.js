const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const input = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");
[n, ...arr] = input;
const sortArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
const answer = new Set(sortArr);

console.log(Array.from(answer).join("\n"));
