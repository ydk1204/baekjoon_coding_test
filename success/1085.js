const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const input = fs
  .readFileSync(VSCODEFILE)
  .toString()
  .trim()
  .split(" ")
  .map((a) => Number(a));

const [X, Y, W, H] = input;

// 처음 방식
const x0 = Math.abs(X - 0);
const y0 = Math.abs(Y - 0);
const x1 = Math.abs(X - W);
const y1 = Math.abs(Y - H);

console.log(Math.min(x0, x1, y0, y1));

// 삼항 연산 방식, 생각해보니 X - 0 과 같이 0은 연산 안 해도 된다는 것을 잊고 있었음
// const answerX = X > Math.abs(X - W) ? Math.abs(X - W) : X;
// const answerY = Y > Math.abs(Y - H) ? Math.abs(Y - H) : Y;
// console.log(Math.min(answerX, answerY));

// 다른 블로거들 방식 매우 간단한듯
// console.log(Math.min(X, Y, (W - X), (H - Y)));