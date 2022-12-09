const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

// const fs = require("fs");
// const input = fs
//   .readFileSync(VSCODEFILE)
//   .toString()
//   .trim()
//   .split(" ")
//   .map((x) => Number(x));
// const [a, b] = input;

// const a_divisor = []; // a 약수
// const b_divisor = []; // b 약수
// const answer = []; // 제출 답

// const maxV = []; // 최대공약수
// const minV = []; //최소공배수

// // a의 약수 구하기
// for (let i = 1; i <= a; i++) {
//   if (a % i === 0) a_divisor.push(i);
// }

// // b의 약수 구하기
// for (let j = 1; j <= a; j++) {
//   if (b % j === 0) b_divisor.push(j);
// }

// // a 약수와 b 약수 중 서로 같은 값 찾기 뒤에서 가장 큰 수를 찾아 최대공약수로 지정
// for (let key of a_divisor) {
//   if (b_divisor.includes(key)) maxV.push(key);
// }

// let idx = 1; // 최소공배수를 구하기 위한 정수
// let x = Math.max(a, b); // 입력 값 중 큰 값
// let y = Math.min(a, b); // 입력 값 중 작은 값

// // 큰 값(x)를 1부터 차례로 곱해가며 y와 나눠 떨어지는 값을 찾아 최소공배수를 지정
// while (true) {
//   let z = x * idx; // 1부터 차례대로 곱연산
//   if (z % y === 0) {
//     // y(작은 값)와 나눠 떨어지는 확인
//     minV.push(z); // 나눠 떨어지면 최소공배수
//     break;
//   }
//   idx++;
// }

// // 제출 답안 변수에 공약수 중 최대 값을 추가, 최소공배수 추가
// answer.push(Math.max(...maxV), minV);
// console.log(answer.join("\n"));
// // 128ms

// 유클리드 호제법
const fs = require("fs");
let input = fs
  .readFileSync(VSCODEFILE)
  .toString()
  .trim()
  .split(" ")
  .map((x) => Number(x));
const [a, b] = input;

while (input[0] % input[1] !== 0) {
  let x = input[0] % input[1];
  console.log(x);
  if (x !== 0) {
    input[0] = input[1];
    input[1] = x;
  }
}
console.log(input[1]);
console.log((a * b) / input[1]);
// 128ms
