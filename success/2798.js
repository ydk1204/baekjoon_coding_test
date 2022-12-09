const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const input = fs
  .readFileSync(VSCODEFILE)
  .toString().split("\n").map(x => x.split(" "));

const [N, M] = input[0].map(x => parseInt(x));
const [...card] = input[1].map(x => parseInt(x));
let answer = 0;

// 3중 반복문을 사용해서 각 카드의 숫자를 더한 후 M과 가장 차이가 적은 수를 출력
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