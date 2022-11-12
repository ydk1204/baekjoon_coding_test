const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const input = fs
  .readFileSync(VSCODEFILE)
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x));

const [v, ...arr] = input;

console.log(arr.sort((a, b) => a - b).join("\n"));
