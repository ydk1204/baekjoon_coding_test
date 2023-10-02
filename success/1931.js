const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";
const fs = require("fs");
let [n, ...input] = fs.readFileSync(VSCODEFILE).toString().trim().split('\n');

// 블로그 코드 => 끝나는 시간으로 정렬을 해서 가장 빨리 끝나는 시간을 시작으로 for문을 돌림
// 이렇게 하면 이중 for문 없이 갯수를 구할 수 있다.
// 빨리 끝나는 회의의 시간과 다음 회의의 시작 시간을 비교해서 개수 증가

let answer = 0;
const times = input
  .map((a) => a.split(' ').map((b) => +b))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    else {
      return a[1] - b[1];
    }
  });

let endTime = 0;
times.forEach((time) => {
  if (time[0] >= endTime) {
    answer++;
    endTime = time[1];
  }
});

console.log(answer);


// 내가 만든 코드 정렬을 시작 시간으로 한 것과 이중 for문이 문제였는지 시간초과 뜸
// let answer = [];

// input = input.map(a => a.trim().split(" ").map(c => +c)).sort((a, b) => a[0] - b[0]);

// for (let i = 0; i < input.length; i++) {
//   let endTime = input[i][1];
//   let count = 1;
  
//   for (let j = i + 1; j < input.length; j++) {
//     if (endTime <= input[j][0]) {
//       count++;
//       endTime = input[j][1];
//     }
//   }

//   answer.push(count);
// }

// console.log(Math.max(...answer));