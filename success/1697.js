const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const [n, k] = fs.readFileSync(VSCODEFILE).toString().trim().split(" ").map(a => +a);

const queue = [[n, 0]];
const visited = Array(100001).fill(false);

while (queue.length) {
  const [cur, depth] = queue.shift();
  
  // 이미 방문했던 숫자라면 패쓰 = false일 경우에만 다음 코드 이어감
  if (visited[cur]) {
    continue;
  }

  // 이번 숫자는 이제 방문한 곳이니 true로 변경
  visited[cur] = true;

  if (cur === k) {
    console.log(depth);
    break;
  }

  // n = 5, k = 17일 경우 초기 cur = 5
  // let next of [5 + 1, 5 - 1, 5 * 2]
  // let next of [6, 4, 10] 의 배열과 같아 next는 순서대로 6, 4, 10을 가짐
  for (let next of [cur + 1, cur - 1, cur * 2]) {
    if (!visited[next] && next >= 0 && next <= 100000) {
      queue.push([next, depth + 1]);
    }
  }
}
