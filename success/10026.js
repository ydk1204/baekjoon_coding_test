const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require('fs');
const input = fs.readFileSync(VSCODEFILE).toString().trim().split('\n');

const N = parseInt(input[0]);
const picture = input.slice(1).map(line => line.split(''));

const directions = [
    [0, 1], [1, 0], [0, -1], [-1, 0]
];

function isValid(x, y) {
    return x >= 0 && x < N && y >= 0 && y < N;
}

function dfs(x, y, color, visited, isColorBlind) {
    const stack = [[x, y]];
    visited[x][y] = true;

    while (stack.length > 0) {
        const [cx, cy] = stack.pop();

        for (const [dx, dy] of directions) {
            const nx = cx + dx;
            const ny = cy + dy;

            if (isValid(nx, ny) && !visited[nx][ny]) {
                if (isColorBlind) {
                    if ((color === 'R' || color === 'G') && (picture[nx][ny] === 'R' || picture[nx][ny] === 'G')) {
                        visited[nx][ny] = true;
                        stack.push([nx, ny]);
                    } else if (color === 'B' && picture[nx][ny] === 'B') {
                        visited[nx][ny] = true;
                        stack.push([nx, ny]);
                    }
                } else {
                    if (picture[nx][ny] === color) {
                        visited[nx][ny] = true;
                        stack.push([nx, ny]);
                    }
                }
            }
        }
    }
}

function countRegions(isColorBlind) {
    const visited = Array.from({ length: N }, () => Array(N).fill(false));
    let regionsCount = 0;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (!visited[i][j]) {
                dfs(i, j, picture[i][j], visited, isColorBlind);
                regionsCount++;
            }
        }
    }

    return regionsCount;
}

const normalCount = countRegions(false);
const colorBlindCount = countRegions(true);

console.log(normalCount + " " + colorBlindCount);