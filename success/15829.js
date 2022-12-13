const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const [n, str] = fs
  .readFileSync(VSCODEFILE)
  .toString().trim().split("\n");

const N = +n;
// 문자를 숫자로 변환
const M = 1234567891;
let hash = 0;
let r = 1;
// r은 31의 제곱 변수, 초기 값은 31^0 === 1
for (let i = 0; i < N; i++) {
  hash += (str.charCodeAt(i) - 96) * r;
  // 반복문으로 각 알파벳의 번호 * r 값을 더해 hash에 저장
  hash %= M;
  // hash 값을 M(1234567891)로 나눈 뒤 나머지 값을 저장
  r *= 31;
  // 31의 제곱 값을 만들기 위해 r 변수값에 31을 곱셈
  r %= M;
  // r이 M보다 M보다 커지는 것을 방지
}

console.log(hash);