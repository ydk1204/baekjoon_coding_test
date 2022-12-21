const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const input = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");

const [N, M, B] = input
  .shift()
  .split(" ")
  .map((x) => +x);
const arr = input.map((i) => i.split(" ").map((x) => +x));

let resultTime = Infinity;
let resultHeight = -1;

for (let h = 0; h <= 256; h++) {
  let inven = 0;
  let cnt = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      let height = arr[i][j] - h;
      if (height < 0) inven -= height;
      else cnt += height;
    }
  }

  if (cnt + B >= inven) {
    let time = 2 * cnt + inven;
    if (resultTime >= time) {
      resultTime = time;
      resultHeight = h;
    }
  }
}

console.log(resultTime, resultHeight);
