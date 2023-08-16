const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
let [count, ...input] = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");
let [n, m, v] = count.split(" ").map((x) => +x);
let graph = [];
let DFS_visited = new Array(n + 1).fill(false);
let BFS_visited = new Array(n + 1).fill(false);
let DFS_answer = [];
let BFS_answer = [];

for (let i = 1; i <= n; i++) graph[i] = [];

for (let i = 0; i < input.length; i++) {
  let [a, b] = input[i].split(" ").map((x) => +x);
  graph[a].push(b);
  graph[b].push(a);
}

graph.forEach((x) => {
  x.sort((a, b) => a - b);
  // minData = Math.min(minData, x[0], x[1]);
})

const DFS = (v) => {
  if (DFS_visited[v]) return;
  DFS_visited[v] = true;
  DFS_answer.push(v);
  for (let i = 0; i < graph[v].length; i++) {
    if (DFS_visited[graph[v][i]] === false) {
      DFS(graph[v][i]);
    }
  }
} 

const BFS = (v) => {
  let queue = [v];
  while (queue.length) {
    let x = queue.shift();
    if (BFS_visited[x] === true) {
      continue;
    }
    BFS_visited[x] = true;
    BFS_answer.push(x);
    for (let i = 0; i < graph[x].length; i++) {
      if (BFS_visited[graph[x][i]] === false) {
        queue.push(graph[x][i]);
      }
    }
  }
}

DFS(v);
console.log(DFS_answer.join(" "));
BFS(v);
console.log(BFS_answer.join(" "));

// const DFS = (x) => {
//   if (DFS_visited[x]) return
//   DFS_visited[x] = true
//   DFS_answer.push(x);
//   for (let i = 0; i < graph[x].length; i++) {
//     if (!DFS_visited[graph[x][i]]) {
//       DFS(graph[x][i]);
//     }
//   }
// }

// const BFS = (x) => {
//   if (BFS_visited[x]) return
//   BFS_visited[x] = true
//   BFS_answer.push(x);
//   for (let i = 0; i < graph[x].length; i++) {
//     if (!BFS_visited[graph[x][i]]) {
//       BFS_answer.push(graph[x][i]);
//       BFS_visited[graph[x][i]] = true;
//     }
//   }
// }

// for (let i = v; i <= n; i++) {
//   if (!DFS_visited[i]) {
//     DFS(i);
//   }
// }

// BFS(v);
// for (let i = minData; i <= n; i++) {
//   if (!BFS_visited[i]) {
//     BFS(i);
//   }
// }

// console.log(DFS_answer.join(' '));
// console.log(BFS_answer.join(' '));
