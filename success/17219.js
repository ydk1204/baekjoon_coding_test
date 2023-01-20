const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const input = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");

const [n, m] = input.shift().split(" ");
const map = new Map();

for (let i = 0; i < n; i++) {
  map.set(input[i].split(' ')[0], input[i].split(' ')[1]);
}

let answer = '';
for (let i = n; i < input.length; i++) {
  answer += map.get(input[i]) + '\n';
}

console.log(answer);


// 85%에서 시간 초과로 실패
// const [num, ...input] = fs.readFileSync(VSCODEFILE).toString().trim().split("\n").map(x => x.split(" "));
// const [n, m] = num.toString().split(",").map(x => +x);

// const quesitions = input.splice(n, m);

// for (let i = 0; i < m; i++) {
//   const quesition = quesitions[i].toString();

//   for (let key of input) {
//     const [site, password] = key;
//     if (site === quesition) {
//       console.log(password);
//     }
//   }
// }
