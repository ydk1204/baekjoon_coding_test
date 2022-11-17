const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

// 처음 시도 시간 초과
// const fs = require("fs");
// const input = fs
//   .readFileSync(VSCODEFILE)
//   .toString()
//   .trim()
//   .split("\n")
//   .map((x) => x);

// [n, a, m, b] = input;
// let arrA = a.split(" ").map((x) => Number(x));
// let arrB = b.split(" ").map((y) => Number(y));
// let answer = [];

// for (let i = 0; i < m; i++) {
//   if (arrA.includes(arrB[i])) answer.push(1);
//   else answer.push(0);
// }

// answer.forEach((v) => console.log(v));

// 이진 탐색

// const fs = require("fs");
// const input = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");

// [n, a, m, b] = input.map((x) => x.split(" ").map((v) => Number(v)));

// a.sort((a, b) => a - b);

// const binarySearch = (list, target, left, right, mid) => {
//   mid = Math.floor((left + right) / 2);

//   if (right < left) return list[mid] === target ? 1 : 0;

//   if (list[mid] > target) right = mid - 1;
//   else left = mid + 1;

//   return binarySearch(list, target, left, right, mid);
// };

// const answer = b.map((x) => binarySearch(a, x, 0, a.length - 1, 0));

// console.log(answer.join("\n"));

// 더 쉬운 방법 Set객체의 has 메서드 사용
// has메서드는 해당 Set 객체에 값이 존재 여부를 반환

const fs = require("fs");
const input = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");

[n, a, m, b] = input.map((x) => x.split(" "));

const arr = new Set(a);

const result = b.map((v) => (arr.has(v) ? 1 : 0));

console.log(result.join("\n"));
