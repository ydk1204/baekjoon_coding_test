const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
let [count, ...input] = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");
let [n, m] = count.split(" ").map((x) => +x);
let graph = [];
let visited = new Array(n + 1).fill(false);
let cnt = 0;

for (let i = 1; i <= n; i++) graph[i] = [];

for (let i = 0; i < input.length; i++) {
  let [u, v] = input[i].split(" ").map((x) => +x);
  graph[u].push(v);
  graph[v].push(u);
}


const DFS = (x) => {
  if (visited[x] === true) return
  visited[x] = true
  for (let i = 0; i < graph[x].length; i++) {
    if (!visited[graph[x][i]]) {
      DFS(graph[x][i]);
    }
  }
}

for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    DFS(i);
    cnt++;
  }
}

console.log(cnt);
