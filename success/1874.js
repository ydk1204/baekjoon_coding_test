const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
// 블로그 풀이 깔끔하게 푼것 같음
// const [n, ...nums] = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");

// const numbers = nums.map((i) => Number(i));

// function solution(n, numbers) {
//   const stack = [];
//   let answer = "";
//   let count = 1;

//   for (let i = 0; i < n; i += 1) {
//     const number = numbers.shift();
//     console.log(number);

//     while (count <= number) {
//       stack.push(count++);
//       answer += "+ ";
//     }

//     const popedItem = stack.pop();
//     if (popedItem !== number) {
//       return "NO";
//     }
//     answer += "- ";
//   }

//   return answer.split(" ").join("\n");
// }

// const answer = solution(n, numbers);
// console.log(answer);

// 내 코드
// const [N, ...option] = fs
//   .readFileSync(VSCODEFILE)
//   .toString()
//   .trim()
//   .split("\n")
//   .map((x) => +x);

// const sequence = Array.from({ length: N }, (_, i) => i + 1);
// const arr = [];
// const stack = [];
// const result = [];
// let j = 0;

// for (let i = 0; i < option.length; i++) {
//   if (j === sequence.length) {
//     for (let k = 0; k < stack.length; k++) {
//       result.push("-");
//     }
//     break;
//   }
//   if (option[i] === sequence[j]) {
//     result.push("+");
//     result.push("-");
//     arr.push(sequence[j]);
//     j <= sequence.length ? j++ : j;
//   } else if (option[i] !== sequence[j]) {
//     if (option[i] === stack[stack.length - 1]) {
//       result.push("-");
//       arr.push(stack.pop());
//     } else {
//       stack.push(sequence[j]);
//       result.push("+");
//       j <= sequence.length ? j++ : j;
//       i--;
//     }
//   }
// }

// const answer = [...arr, ...stack.reverse()];
// if (answer.toString() === option.toString()) console.log(result.join("\n"));
// else console.log("NO");
