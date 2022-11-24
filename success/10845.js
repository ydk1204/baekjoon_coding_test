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
const que = [];
const answer = [];

for (let key of input) {
  switch (key) {
    case "pop":
      answer.push(que.shift() || -1);
      break;
    case "size":
      answer.push(que.length);
      break;
    case "empty":
      answer.push(que[0] ? 0 : 1);
      break;
    case "front":
      answer.push(que[0] || -1);
      break;
    case "back":
      answer.push(que[que.length - 1] || -1);
      break;
    default:
      que.push(key.split(" ")[1]);
      break;
  }
}

console.log(answer.join("\n"));
