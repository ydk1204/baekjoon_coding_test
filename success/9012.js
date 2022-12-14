const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const [T, ...seal] = fs
  .readFileSync(VSCODEFILE)
  .toString().trim().split("\n");

const result = [];
for (let i = 0; i < T; i++) {
  let count = 0;

  for (let s of seal[i]) {
    count += s === "(" ? 1 : -1;

    if (count < 0) break;
  }
  result.push(count === 0 ? 'YES' : 'NO');
}

console.log(result.join("\n"));


// 처음 방식
// const fs = require("fs");
// const [T, ...seal] = fs
//   .readFileSync(VSCODEFILE)
//   .toString().trim().split("\n");

// const answer = [];

// for (let key of seal) {
//   let temp = [];
//   for (let value of key) {
//     if (value === ')' && temp[temp.length - 1] === '(') temp.pop();
//     else temp.push(value);
//   }
//   if (temp.length === 0) answer.push('YES');
//   else answer.push('NO');
// }

// console.log(answer.join('\n'));