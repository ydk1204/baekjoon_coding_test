import sys

# vscode 테스트
sys.stdin = open('coding/example.txt', 'r')  # 테스트 케이스 불러오기

# 백준 테스트
# input = sys.stdin.readline

n = int(input())
paper = [list(map(int, input().split())) for _ in range(n)]

result = []


def sol(x, y, n):
    color = paper[x][y]
    for i in range(x, x+n):
        for j in range(y, y+n):
            if color != paper[i][j]:
                sol(x, y, n//2)
                sol(x, y+n//2, n//2)
                sol(x+n//2, y, n//2)
                sol(x+n//2, y+n//2, n//2)
                return
    if color == 0:
        result.append(0)
    else:
        result.append(1)


sol(0, 0, n)
print(result.count(0))
print(result.count(1))

# JS 버전
# const VSCODEFILE = "./coding/example.txt";
# const fs = require("fs");
# let [n, ...paper] = fs.readFileSync(VSCODEFILE).toString().trim().split('\n');

# paper = paper.map(el => el.split(' ').map(a => +a));
# let blue = 0;
# let white = 0;

# const solution = (x, y, n) => {
#   if (isSameColor(x, y, n)) {
#     if (paper[x][y] === 1) blue++;
#     else white++;
#     return;
#   };

#   let half = n / 2;

#   solution(x, y, half);
#   solution(x, y + half, half);
#   solution(x + half, y, half);
#   solution(x + half, y + half, half);
# }

# const isSameColor = (x, y, n) => {
#   const base = paper[x][y]
#   for (let i = x; i < x + n; i++) {
#     for (let j = y; j < y + n; j++) {
#       if(base !== paper[i][j]) return false;
#     }
#   }
#   return true;
# }

# solution(0, 0, +n);

# console.log(`${white}\n${blue}`);
