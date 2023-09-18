const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
let [nm, ...input] = fs.readFileSync(VSCODEFILE).toString().trim().split("\n").map(a => a.split(" "));
let [n, m] = nm.map(a => +a);
let board = input.map(a => a.map(b => +b));;

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

const answer = (row, col, board) => {
  const q = [];
  const dist = [...Array(col)].map(() => Array(row).fill(0));
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (board[i][j] === 1) {
        q.push([i, j]);
      }

      if (board[i][j] === 0) {
        dist[i][j] = -1;
      }
    }
  }
  let head = 0;

  while (q.length > head) {
    const [x, y] = q[head++];
    for (let p = 0; p < 4; p++) {
      const nx = x + dx[p];
      const ny = y + dy[p];
      if (nx < 0 || ny < 0 || nx >= col || ny >= row) continue;
      if (dist[nx][ny] >= 0) continue;
      dist[nx][ny] = dist[x][y] + 1;
      q.push([nx, ny]);
    }
  }

  let day = 0;
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (dist[i][j] === -1) return -1;
      day = Math.max(day, dist[i][j]);
    }
  }

  return day;
}

console.log(answer(n,m,board));