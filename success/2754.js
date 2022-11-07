const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = './baekjoon_coding_test/coding/example.txt';

const fs = require("fs");
const input = fs.readFileSync(VSCODEFILE).toString().trim().split("").map(x => x);
let credit = 0;

if (input[0] === "F") return console.log(0.0.toFixed(1));

let calc = (opp, score) => {
  if (opp === "+") return credit = score + 0.3;
  else if (opp === "-") return credit = score - 0.3;
  else return credit = score;
}

if (input[0] === "A") calc(input[1], 4.0);
else if (input[0] === "B") calc(input[1], 3.0);
else if (input[0] === "C") calc(input[1], 2.0);
else if (input[0] === "D") calc(input[1], 1.0);

console.log(credit.toFixed(1));