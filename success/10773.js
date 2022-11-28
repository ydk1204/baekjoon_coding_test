const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const input = fs
  .readFileSync(VSCODEFILE)
  .toString()
  .trim()
  .split("\n")
  .map((a) => Number(a));
const N = input.shift();
const arr = [];
let answer = 0;

for (let i = 0; i < N; i++) {
  if (input[i] === 0) arr.pop();
  else arr.push(input[i]);
}

// reduce 함수는 배열이 비어있을 때 사용이 불가능, 따라서 백준에서 검사 시 일부 테스트케이스의 경우 에러로 인한 타입에러 발생
console.log(arr.length > 0 ? arr.reduce((a, b) => a + b) : 0 );