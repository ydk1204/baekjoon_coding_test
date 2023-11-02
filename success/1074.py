from collections import deque
import sys

# vscode 테스트
sys.stdin = open('coding/example.txt', 'r')  # 테스트 케이스 불러오기

# 백준 테스트
# input = sys.stdin.readline

N, r, c = map(int, input().split())

answer = 0

while N != 0:
    N -= 1

    # 1사분면
    if r < 2 ** N and c < 2 ** N:
        answer += (2 ** N) * (2 ** N) * 0

    # 2사분면
    elif r < 2 ** N and c >= 2 ** N:
        answer += (2 ** N) * (2 ** N) * 1
        c -= (2 ** N)

    # 3사분면
    elif r >= 2 ** N and c < 2 ** N:
        answer += (2 ** N) * (2 ** N) * 2
        r -= (2 ** N)

    # 4사분면
    else:
        answer += (2 ** N) * (2 ** N) * 3
        c -= (2 ** N)
        r -= (2 ** N)

print(answer)
