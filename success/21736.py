from collections import deque
import sys

# vscode 테스트
sys.stdin = open('coding/example.txt', 'r')  # 테스트 케이스 불러오기

# 백준 테스트
# input = sys.stdin.readline

n,m = map(int, input().split())
campus = []
start = ()

for i in range(n):
    row = list(input().rstrip())
    for j in range(m):
        if row[j] == 'I':
            start = (i, j)
    campus.append(row)

# BFS
directions = [(1,0), (0,1), (-1,0), (0,-1)]
visited = [[False]*m for _ in range(n)]
res = 0

queue = deque([start])
visited[start[0]][start[1]] = True

while(queue):
    x, y = queue.popleft()    

    for dx, dy in directions:
        nx, ny = x + dx, y + dy

        # 캠퍼스를 벗어나지 않는 구역이고
        if 0 <= nx < n and 0 <= ny < m :
            # 벽이 아니고 방문하지 않은 곳이면 방문
            if campus[nx][ny] != 'X' and not visited[nx][ny]:
                queue.append((nx, ny))
                visited[nx][ny] = True

                # 사람이면 +1
                if campus[nx][ny] == 'P':
                    res += 1

print(res if res > 0 else 'TT')
