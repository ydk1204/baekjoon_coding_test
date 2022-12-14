const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const input = fs
  .readFileSync(VSCODEFILE)
  .toString().trim().split("\n");

// 블로스 예시 2 이진탐색 방법도 있었지만 복붙으로 써보니 메모리 182404 KB, 시간 2184 ms 나와서 직접 타이핑은 포기
// 다른 언어는 모르겠으나 JS 코드로는 특출나게 빠른 방식은 없는 것으로 보임
// 블로그 예시 1 Map 객체 사용, 메모리 162304 KB, 시간 1364 ms
// const haveCard = input[1].split(" ");
// const matchCard = input[3].split(" ");

// let answer = [];
// let haveCardMap = new Map();
// for (number of haveCard) {
//   if (haveCardMap.has(number)) haveCardMap.set(number, haveCardMap.get(number) + 1);
//   else haveCardMap.set(number, 1);
// }

// for (number of matchCard) {
//   if (haveCardMap.has(number)) answer.push(haveCardMap.get(number));
//   else answer.push(0);
// }

// console.log(answer.join(" "));


// 통과, 메모리 사용량 215280 KB, 시간 1272 ms
// const nCard = input[1].split(" ").map(x => +x);
// const mCard = input[3].split(" ").map(x => +x);
// const answer = [];
// const cardArr = [];

// for (let key of nCard) {
//   cardArr[key] = cardArr[key] ? cardArr[key] += 1 : cardArr[key] = 1;
// }

// for (let value of mCard) {
//   if (cardArr[value]) answer.push(cardArr[value]);
//   else answer.push(0);;
// }
// console.log(answer.join(" "));


// 시간초과
// const nCard = input[1].split(" ").map(x => +x);
// const mCard = input[3].split(" ").map(x => +x);
// const answer = [];
// for (let key of mCard) {
//   let count = 0;
//   for (let i of nCard) {
//     if (key === i) count++;
//   }
//   answer.push(count);
// }

// console.log(answer.join(" "));

