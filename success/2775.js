const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const input = fs
  .readFileSync(VSCODEFILE)
  .toString().split("\n")
const T = parseInt(input.shift());

for (let i = 0; i < T; i++) {
  const K = +input.shift();
  const N = +input.shift();

  const room = Array.from(Array(K + 1), () => Array(N + 1).fill(0));
  for (let i = 1; i <= N; i++) {
    room[0][i] = i;
  }

  for (let i = 1; i <= K; i++) {
    for (let j = 1; j <= N; j++) {
      room[i][j] = room[i - 1][j] + room[i][j-1];
    }
  }

  console.log(room[K][N]);
}

//  파스칼의 삼각형으로 푸는 방식 보기