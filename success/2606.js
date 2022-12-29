const BAEAKJOONFILE = "/dev/stdin";
const VSCODEFILE = "./coding/example.txt";

const fs = require("fs");
const input = fs.readFileSync(VSCODEFILE).toString().split("\n");

const bfs = (graph, startNode) => {
  const visited = [];
  let needVisit = [];

  needVisit.push(startNode);

  while (needVisit.length !== 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...needVisit, ...graph[node]];
    }
  }

  return visited;
};

let count = Number(input.shift());
let edge = Number(input.shift());
let graph = [...Array(count + 1)].map(e => []);

for (let i = 0; i < edge; i++) {
  let [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

console.log(bfs(graph, 1).length - 1);

// 처음 만든 방식 12% 이후에 틀림
// const [N, pair, ...input] = fs
//   .readFileSync(VSCODEFILE)
//   .toString().trim().split("\n");

// const comArr = input.map(x => x.split(" ").map(x => Number(x)));
// const list = [];

// 쌍의 개수만큼 반복
// for (let i = 0; i < Number(pair); i++) {
  // 리스트 배열에 값 넣어주기 (1과 연관된 값만 배열에 추가함)
  // 만약 리스트 배열에 컴퓨터 쌍의 첫번째 값이 없거나 쌍의 첫번째 값이 1이며
//   if (!list[comArr[i][0]] || comArr[i][0] === 1) {
  // 만약 리스트 배열에 컴퓨터 쌍의 첫번째 값이 존재한다면 두번 째 값이 배열에 존재하는지 확인
//     if (list.includes(comArr[i][0])) {
//       if (!list.includes(comArr[i][1])) {
  // 두번째 쌍의 값이 없을 경우 리스트 배열에 추가
//         list.push(comArr[i][1]);
//       }
// 만약 리스트 배열에 컴퓨터 쌍의 첫번째 값이 존재하지 않지만 현재 반복 중인 컴퓨터 쌍의 첫번째 값이 1이면
//     } else if (comArr[i][0] === 1) {
  // 리스트 배열에 값 추가
//       list.push(comArr[i][1]);
//     }
//   }
// }

// 1과 연관된 값만 모아 놓은 리스트 배열의 길이 출력
// console.log(list.length);