

# 제출하신 코드에 list(input()) 부분에서 strip()을 해주지 않아 개행문자도 같이 리스트에 들어갑니다. 이 개행문자에 대해서 int함수를 적용하게 되어 valueerror가 발생합니다.
# 와 계속 런타임 에러(ValueError) 떠서 뭐가 잘 못 된건지 답답했는데
# 질문 게시물 중에 똑같이 valueerror가 왜 뜨는지 알 수 없다는 글 보고 해결함
# list로 input을 바로 받아서 넣을 때 strip 사용해서 개행문자는 반드시 제거해줘야 한다는 것을 깨닫음
# strip 사용, 개행문자 제거, 명심하자


from collections import deque
import sys

# vscode 테스트
sys.stdin = open('coding/example.txt', 'r')  # 테스트 케이스 불러오기

# 백준 테스트
# input = sys.stdin.readline


n = int(input())
graph = [list(map(int, input().strip())) for _ in range(n)]
visited = [[-1] * n for _ in range(n)]
dx, dy = [0, 0, -1, 1], [-1, 1, 0, 0]
cnt = []


def bfs(i, j):
    queue = deque()

    queue.append((i, j))

    visited[i][j] = 0

    while queue:
        x, y = queue.popleft()

        for i in range(4):
            nx, ny = dx[i] + x, dy[i] + y

            if 0 <= nx < n and 0 <= ny < n and visited[nx][ny] == -1:
                if graph[nx][ny] == 0:
                    visited[nx][ny] = 0
                elif graph[nx][ny] == 1:
                    visited[nx][ny] = visited[x][y] + 1
                    cnt[-1] = cnt[-1] + 1
                    queue.append((nx, ny))


for i in range(n):
    for j in range(n):
        if graph[i][j] == 1 and visited[i][j] == -1:
            cnt.append(1)
            bfs(i, j)

if cnt:
    cnt.sort()
    print(len(cnt))
    for i in cnt:
        print(i)
