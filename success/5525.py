import sys

# vscode 테스트
sys.stdin = open('coding/example.txt', 'r')  # 테스트 케이스 불러오기

# 백준 테스트
# input = sys.stdin.readline

n = int(input())
m = int(input())
s = input()
answer, i, count = 0, 0, 0

while i < (m - 1):
    if s[i:i+3] == "IOI":
        i += 2
        count += 1
        if count == n:
            answer += 1
            count -= 1
    else:
        i += 1
        count = 0

print(answer)
