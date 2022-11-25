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
const deque = [];
const answer = [];

for (let key of input) {
  key = key.split(" ");
  switch (key[0]) {
    case "push_front":
      deque.unshift(key[1]);
      break;
    case "push_back":
      deque.push(key[1]);
      break;
    case "pop_front":
      answer.push(deque.shift() || -1);
      break;
    case "pop_back":
      answer.push(deque.pop() || -1);
      break;
    case "size":
      answer.push(deque.length);
      break;
    case "empty":
      answer.push(deque[0] ? 0 : 1);
      break;
    case "front":
      answer.push(deque[0] || -1);
      break;
    case "back":
      answer.push(deque[deque.length - 1] || -1);
      break;
  }
}

console.log(answer.join("\n"));
