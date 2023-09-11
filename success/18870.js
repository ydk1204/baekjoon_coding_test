const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
let [n, x] = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");
x = x.split(" ").map(x => +x);
let xSort = Array.from(new Set([...x])).sort((a, b) => a - b);
const obj = {};
let answer = [];

xSort.forEach((i, idx) => obj[i] = idx);

for (let i of x) {
  answer.push(obj[i]);
}

console.log(answer.join(' '));

// 아래는 답은 맞지만 시간초과
// findindex는 시간복잡도가 O(n)이지만, object를 이용한 방법은 O(1)이다.

// const fs = require("fs");
// let [n, x] = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");
// xList = x.split(" ").map(x => +x);
// let xSort = x.split(" ").map(x => +x).sort((a, b) => a - b);
// let xSet = new Set(xSort);
// xSort = [...xSet];

// let answer = [];

// for (let i of xList) {
//   let index = xSort.findIndex((a) => a === i);
//   answer.push(index);
// }

// console.log(answer.join(' '));

