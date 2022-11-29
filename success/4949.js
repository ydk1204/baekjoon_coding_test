const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const input = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");
input.pop();

const open = ["(", "["];
const closed = [")", "]"];
let stack = [];
const answer = [];

input.forEach((str) => {
  let isBool = false;
  stack = [];
  for (let i = 0; i < str.length; i++) {
    if (open.includes(str[i])) stack.push(str[i]);
    else if (closed.includes(str[i])) {
      if (stack.pop() !== open[closed.indexOf(str[i])]) {
        answer.push("no");
        isBool = true;
        break;
      }
    }
  }
  if (!isBool) {
    if (stack.length === 0) answer.push("yes");
    else answer.push("no");
  }
});

console.log(answer.join("\n"));
