// 블로거 https://velog.io/@otterp/%EB%B0%B1%EC%A4%80-1764-%EB%93%A3%EB%B3%B4%EC%9E%A1-javascript
const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const input = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");
const [n, k] = input.shift().split(" ");

const Nset = new Set();
const Mset = new Set();
for (let i = 0; i < input.length; i++) {
  if (i < n) Nset.add(input[i]);
  else Mset.add(input[i]);
}

let answer = [];
Mset.forEach((item) => {
  if (Nset.has(item)) answer.push(item);
})
answer.sort();
console.log(answer.length + '\n' + answer.join('\n'));


// 내가 만든 코드 => 시간 초과
// const BAEAKJOONFILE = "/dev/stdin";
// const VSCODEFILE = "./coding/example.txt";

// const fs = require("fs");
// let [input, ...names] = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");
// let [n, k] = input.split(" ");

// const notHearing = names.splice(0, n);
// const cantSee = names;

// const list = cantSee.filter(a => notHearing.includes(a));
// console.log(list.length);
// console.log(list.join("\n"));