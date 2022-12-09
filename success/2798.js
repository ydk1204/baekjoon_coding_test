const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const input = fs
  .readFileSync(VSCODEFILE)
  .toString().split("\n").map(x => x.split(" "));

const [N, M] = input[0].map(x => parseInt(x));
const [...card] = input[1].map(x => parseInt(x));
let answer = 0;

for (let i = 0; i <= card.length - 3; i++) {
  for (let j = i + 1; j <= card.length - 2; j++) { 
    for (let a = j + 1; a < card.length; a++) { 
      let sum = card[i] + card[j] + card[a];
      let gap = M - sum;
      if (gap >= 0 && answer <= sum) answer = sum;
    }
  }
}

console.log(answer);