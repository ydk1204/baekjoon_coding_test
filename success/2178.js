const BAEKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require('fs');
const input = fs.readFileSync(VSCODEFILE).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const maze = input.slice(1).map(line => line.split('').map(Number));

function bfs() {
    const queue = [[0, 0, 1]];
    const visited = Array.from({length: N}, () => new Array(M).fill(false));
    visited[0][0] = true;

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    while (queue.length > 0) {
        const [x, y, count] = queue.shift();

        if (x === N - 1 && y === M - 1) {
            return count;
        }

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx >= 0 && nx < N && ny >= 0 && ny < M && maze[nx][ny] === 1 && !visited[nx][ny]) {
                queue.push([nx, ny, count + 1]);
                visited[nx][ny] = true;
            }
        }
    }
}

console.log(bfs());