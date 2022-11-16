const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
let input = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");

const N = input.shift();
const arr = input.map((x) => x.split(" ").map(Number));

arr.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let answer = "";
arr.forEach((v) => {
  answer += v[0] + " " + v[1] + "\n";
});

console.log(answer);

// .replace(/\r/g, "")

// const fs = require("fs");
// let input = fs
//   .readFileSync(VSCODEFILE)
//   .toString()
//   .split("\n")
//   .map((x) => x.trim());

// const n = input.shift();
// let arr = input.map((x) => x.split(" ").map(Number));

// arr.sort((a, b) => {
//   if (a[1] === b[1]) return a[0] - b[0];
//   return a[1] - b[1];
// });

// let answer = arr.map((m) => m.join(" "));

// console.log(answer.join("\n"));
