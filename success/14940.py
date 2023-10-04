from collections import deque
import sys

# vscode 테스트
sys.stdin = open('coding/example.txt', 'r')  # 테스트 케이스 불러오기

# 백준 테스트
# input = sys.stdin.readline


n, m = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(n)]
visited = [[-1] * m for _ in range(n)]
dx, dy = [0, 0, -1, 1], [-1, 1, 0, 0]


def bfs(i, j):
    queue = deque()

    queue.append((i, j))

    visited[i][j] = 0

    while queue:
        x, y = queue.popleft()

        for i in range(4):
            nx, ny = dx[i] + x, dy[i] + y

            if 0 <= nx < n and 0 <= ny < m and visited[nx][ny] == -1:
                if graph[nx][ny] == 0:
                    visited[nx][ny] = 0
                elif graph[nx][ny] == 1:
                    visited[nx][ny] = visited[x][y] + 1
                    queue.append((nx, ny))


for i in range(n):
    for j in range(m):
        if graph[i][j] == 2 and visited[i][j] == -1:
            bfs(i, j)

for i in range(n):
    for j in range(m):
        if graph[i][j] == 0:
            print(0, end=' ')
        else:
            print(visited[i][j], end=' ')
    print()


# js 버전, 런타임 에러(Type Error) 뜸, 나중에 시간날 때 해보자
# const BAEAKJOONFILE = "/dev/stdin";
# const VSCODEFILE = "./coding/example.txt";

# const fs = require("fs");
# let [nm, ...input] = fs.readFileSync(VSCODEFILE).toString().trim().split("\n").map(a => a.split(" "));
# let [n, m] = nm.map(a => +a);
# let board = input.map(a => a.map(b => +b));;

# let dx = [1, 0, -1, 0];
# let dy = [0, 1, 0, -1];

# const answer = (row, col, board) => {
#   const q = [];
#   const dist = [...Array(col)].map(() => Array(row).fill(0));
#   for (let i = 0; i < col; i++) {
#     for (let j = 0; j < row; j++) {
#       if (board[i][j] === 2) {
#         q.push([i, j]);
#       }

#       if (board[i][j] === 1) {
#         dist[i][j] = -1;
#       }
#     }
#   }
#   let head = 0;

#   while (q.length > head) {
#     const [x, y] = q[head++];
#     for (let p = 0; p < 4; p++) {
#       const nx = x + dx[p];
#       const ny = y + dy[p];
#       if (nx < 0 || ny < 0 || nx >= col || ny >= row) continue;
#       if (dist[nx][ny] >= 0) continue;
#       dist[nx][ny] = dist[x][y] + 1;
#       q.push([nx, ny]);
#     }
#   }

#   for (a of dist) {
#     const x = a.map(c => +c);
#     console.log(x.join(" "));
#   }

#   return dist;
# }

# answer(n,m,board);
