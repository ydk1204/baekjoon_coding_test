const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
let input = +fs.readFileSync(VSCODEFILE).toString();
const list = [];

list[1] = 1
list[2] = 2
list[3] = 3
list[4] = 5

for (let i = 5; i <= input; i++) {
  if (!Number(list[i])) list[i] = 0;
  list[i] = (list[i-1] + list[i-2]) % 10007;
}

console.log(list[input]);

// 위는 블로그 응용해서 제작, 아래는 전에 만든 코드 응응, 근데 이중 루프라 그런지 되긴하는데 위에보다 살짝 느림
// const fs = require("fs");
// let input = +fs.readFileSync(BAEAKJOONFILE).toString();
// const list = [];

// list[1] = 1
// list[2] = 2
// list[3] = 3
// list[4] = 5

// for (let i = 5; i <= input; i++) {
//   for (let j = i-2; j < i; j++) {
//     if (!Number(list[i])) list[i] = 0;
//     list[i] = (list[i] + list[j]) % 10007;
//   }
// }

// console.log(list[input]);

