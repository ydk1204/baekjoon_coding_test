const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const [N, ...number] = fs
  .readFileSync(VSCODEFILE)
  .toString().trim().split("\n").map(x => +x);

const sortNumber = number.sort((a, b) => a - b);
const modeMap = new Map();
let modeArr = [];
let modeNumber = 0;

for (let v of sortNumber) {
  modeMap.has(v) ? modeMap.set(v, modeMap.get(v) + 1) : modeMap.set(v, 1);
}

// 최빈값을 확인하기 위해 내가 사용한 방식
// for (const [key, value] of modeMap) {
//   if (value > modeNumber) {
//     modeNumber = value;
//     modeArr = [];
//     modeArr.push(key);
//   }
//   else if (value === modeNumber) {
//     modeArr.push(key);
//   }
// }

// 최빈값을 확인하기 위해 블로거가 사용한 방식 응용
let maxNum = Math.max(...modeMap.values());
for (const [key, value] of modeMap) {
  if (value === maxNum) modeArr.push(key);
}

const aver = Math.round(number.reduce((a, b) => a + b) / N);
const center = sortNumber[Math.floor(N / 2)];
const mode = modeArr.length >= 2 ? modeArr[1] : modeArr[0];
const range = Math.abs(sortNumber[0] - sortNumber[sortNumber.length - 1]);

console.log(
`${aver}
${center}
${mode}
${range}`);