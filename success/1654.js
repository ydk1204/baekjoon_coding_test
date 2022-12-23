const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const input = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");

// 이분탐색 방법
const [n, k] = input
  .shift()
  .split(" ")
  .map((x) => +x);
// 이분탐색을 위해 정렬 (이분탐색은 정렬된 배열에서 사용 가능)
const lines = input.map((x) => +x).sort();
let max = Math.max(...lines);
let min = 1;

while (min <= max) {
  let mid = parseInt((max + min) / 2);
  let piece = lines
    .map((line) => parseInt(line / mid))
    .reduce((a, b) => a + b, 0);

  if (piece >= k) min = mid + 1;
  else max = mid - 1;
}

// console.log(max);

// 시간 초과
// const [K, N] = input
//   .shift()
//   .split(" ")
//   .map((x) => +x);
// const [...centi] = input.map((x) => +x);
// let aver = centi.reduce((a, b) => a + b) / N;

// while (true) {
//   let answer = 0;

//   const [...kArr] = centi.map((x) => Math.floor(x / aver));
//   answer = kArr.reduce((a, b) => a + b);

//   if (answer === Number(N)) {
//     console.log(aver);
//     break;
//   } else {
//     aver--;
//   }
// }
