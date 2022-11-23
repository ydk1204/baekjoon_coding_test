const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const input = fs
  .readFileSync(VSCODEFILE)
  .toString()
  .trim()
  .split("\n")
  .map((a) => a.trim());
const N = input.shift();
const stack = [];
const answer = [];

for (let key of input) {
  switch (key) {
    case "pop":
      answer.push(stack.pop() || -1);
      break;
    case "size":
      answer.push(stack.length);
      break;
    case "empty":
      answer.push(stack[0] ? 0 : 1);
    case "top":
      answer.push(stack[stack.length - 1] || -1);
      break;
    default:
      stack.push(key.split(" ")[1]);
  }
}

// for (let key of input) {
//   const oper = key.split(" ");

//   if (oper[0] === "push") {
//     stack.push(oper[1]);
//   } else if (oper[0] === "pop") {
//     if (stack.length !== 0) answer.push(stack.pop());
//     else answer.push(-1);
//   } else if (oper[0] === "size") {
//     answer.push(stack.length);
//   } else if (oper[0] === "empty") {
//     if (stack.length === 0) answer.push(1);
//     else answer.push(0);
//   } else if (oper[0] === "top") {
//     if (stack.length !== 0) answer.push(stack[stack.length - 1]);
//     else answer.push(-1);
//   }
// }

console.log(answer.join("\n"));
