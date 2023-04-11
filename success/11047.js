// 블로거 : https://parkparkpark.tistory.com/m/92

const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
let [n, ...input] = fs.readFileSync(VSCODEFILE).toString().trim().split(/\s+/).map(Number);

let price = input.shift();
input.sort((a, b) => b - a);

let cnt = 0;

for (let i = 0; i < input.length; i++) {
  if (price < input[i]) {
    continue;
  } else {
    const value = Math.floor(price / input[i]);
    price -= value * input[i];
    cnt += value;

    if (price === 0) {
      break;
    }
  }
}

console.log(cnt);

// 내가 작성한 코드 => 시간 초과
// const BAEAKJOONFILE = "/dev/stdin";
// const VSCODEFILE = "./coding/example.txt";

// const fs = require("fs");
// let input = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");
// const [sn, sk] = input.shift().split(" ");
// input = input.map(a => Number(a));
// let k = Number(sk);
// let cnt = 0;

// while (true) {
//   let opper = [];
//   if (k === 0) break;
//   for (let i = 0; i < input.length; i++) {
//     if (k.toString().length === input[i].toString().length) {
//       if (k >= input[i]) opper.push(input[i]);
//     }
//   }
//   k = k - Math.max(...opper);
//   cnt++;
// }

// console.log(cnt);