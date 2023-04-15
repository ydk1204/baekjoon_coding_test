// 블로그 방식 멋짐 => https://rrecoder.tistory.com/196
const fs = require("fs");
let [n, input] = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");

const answer = input
  .split(" ")
  .sort((a, b) => a - b)
  .reduce((acc, cur, i) => acc + cur * (n - i), 0);

console.log(answer);

// 내가 짠 코드 => 맞긴 했지만 오래 걸리고 맘에 안 듬
// const BAEAKJOONFILE = "/dev/stdin";
// const VSCODEFILE = "./coding/example.txt";

// const fs = require("fs");
// let [n, ...ps] = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");
// ps = ps.toString().split(" ").map(a => Number(a));
// let sortPs = ps.sort((a, b) => a - b);
// let opp = 0;
// let answer = 0;
// for (let i of sortPs) {
//   opp += i;
//   answer += opp;
// }

// console.log(answer);