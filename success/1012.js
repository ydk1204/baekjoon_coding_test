const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const input = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");
const num = Number(input.shift());
const ds = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

function bfs(startX, startY) {
  // 시작 좌표 기준으로 시작
  const queue = [[startX, startY]];
  // queue가 비워지면 탈출
  while (queue.length) {
    const [x, y] = queue.shift();
    // queue의 값을 하나씩 빼서 xy로 저장
    // xy좌표가 0이면 다시, 1이면 0으로 만들어준다.
    // 인접한 1들 다 0으로 만들기
    if (!map[x][y]) continue;
    else map[x][y] = 0;

    for (let i = 0; i < 4; i++) {
      const xPos = x + ds[i][0];
      const yPos = y + ds[i][1];

      if (xPos < 0 || yPos < 0 || xPos >= m || yPos >= n) continue;
      if (map[xPos][yPos]) queue.push([xPos, yPos]);
    }
  }
}

for (let i = 0; i < num; i++) {
  let worm = 0;
  var [m, n, k] = input.shift().split(" ").map(Number);
  var map = Array.from(Array(m), () => new Array(n).fill());
  for (let j = 0; j < k; j++) {
    let xy = input.shift().split(" ");
    map[xy[0]][xy[1]] = 1;
  }
  for (let k = 0; k < m; k++) {
    for (let l = 0; l < n; l++) {
      // 만약 그 좌표가 1이라면 worm을 늘려주고 상하좌우 탐색하여 전부 0으로 만들어준다.
      if (map[k][l]) {
        bfs(k, l);
        worm++;
      }
    }
  }
  console.log(worm);
}

