const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");

// 블로그 방법
const input = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");
const inputNum = input[0].split(" ").map((num) => Number(num));
const n = inputNum[0];
const m = inputNum[1];

let map = new Map();
let mapRevere = new Map();

for (let i = 1; i <= n; i++) {
  map.set(i, input[i].trim());
  mapRevere.set(input[i].trim(), i);
}
for (let i = 1; i <= m; i++) {
  if (map.has(Number(input[i + n]))) {
    console.log(map.get(Number(input[i + n])));
  } else {
    console.log(mapRevere.get(input[i + n].trim()));
  }
}

// 처음 만든 방법, Kakuna 이름의 포켓몬이 indexOf에 제대로 적용 안됨
// 다른 블로그 글 중 유일하게 제대로 작동하는 코드가 위의 코드 이유는 모르겠음
// const [n, m] = input
//   .shift()
//   .split(" ")
//   .map((x) => +x);
// const question = input
//   .splice(n, input.length - 1)
//   .map((x) => (+x === +x ? +x : x));

// for (let key of question) {
//   if (typeof key === "number") {
//     console.log(input[key - 1]);
//   } else {
//     console.log(input.indexOf(key));
//   }
// }
