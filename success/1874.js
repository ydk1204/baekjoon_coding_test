const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const [N, ...option] = fs
  .readFileSync(VSCODEFILE)
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

const sequence = Array.from({ length: N }, (_, i) => i + 1);
const arr = [];
const stack = [];
const result = [];
let j = 0;

for (let i = 0; i < option.length; i++) {
  if (j === sequence.length) {
    for (let k = 0; k < stack.length; k++) {
      result.push("-");
    }
    break;
  }
  if (option[i] === sequence[j]) {
    result.push("+");
    result.push("-");
    arr.push(sequence[j]);
    j <= sequence.length ? j++ : j;
  } else if (option[i] !== sequence[j]) {
    if (option[i] === stack[stack.length - 1]) {
      result.push("-");
      arr.push(stack.pop());
    } else {
      stack.push(sequence[j]);
      result.push("+");
      j <= sequence.length ? j++ : j;
      i--;
    }
  }
}

const answer = [...arr, ...stack.reverse()];
if (answer.toString() === option.toString()) console.log(result.join("\n"));
else console.log("NO");
