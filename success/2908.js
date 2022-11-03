const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const input = fs.readFileSync(VSCODEFILE).toString().trim().split(" ");

const [a, b] = input.map((c) => [...c].reverse().join(""));

console.log(a > b ? a : b);
