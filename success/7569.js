const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require('fs');
const input = fs.readFileSync(VSCODEFILE).toString().trim().split('\n');

const [M, N, H] = input[0].split(' ').map(Number);
const box = [];
const queue = [];
let unripeTomatoes = 0;

for (let h = 0; h < H; h++) {
    const floor = [];
    for (let n = 0; n < N; n++) {
        const row = input[1 + h * N + n].split(' ').map(Number);
        floor.push(row);
        for (let m = 0; m < M; m++) {
            if (row[m] === 1) queue.push([h, n, m, 0]);
            else if (row[m] === 0) unripeTomatoes++;
        }
    }
    box.push(floor);
}

const directions = [
    [0, 0, 1], [0, 0, -1], [0, 1, 0], [0, -1, 0], [1, 0, 0], [-1, 0, 0]
];

let maxDays = 0;
let queueIndex = 0;

while (queueIndex < queue.length && unripeTomatoes > 0) {
    const [h, n, m, days] = queue[queueIndex++];
    
    for (let i = 0; i < 6; i++) {
        const nh = h + directions[i][0];
        const nn = n + directions[i][1];
        const nm = m + directions[i][2];
        
        if (nh >= 0 && nh < H && nn >= 0 && nn < N && nm >= 0 && nm < M && box[nh][nn][nm] === 0) {
            box[nh][nn][nm] = 1;
            queue.push([nh, nn, nm, days + 1]);
            unripeTomatoes--;
            maxDays = days + 1;
        }
    }
}

console.log(unripeTomatoes === 0 ? maxDays : -1);