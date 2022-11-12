const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const input = fs.readFileSync(VSCODEFILE).toString().trim();
const arr = [];

for (let i = 97; i < 123; i++) {
  let asc = String.fromCharCode(i);
  if (input.includes(asc)) arr.push(input.indexOf(asc));
  else arr.push(-1);
}

console.log(arr.join(" "));

// 더 좋아 보이는 코드
const result = [];

for (let i = 97; i <= 122; i++) {
  result.push(input.indexOf(String.fromCharCode(i)));
}

console.log(result.join(" "));
