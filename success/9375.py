from collections import Counter
import sys

# vscode 테스트
sys.stdin = open('coding/example.txt', 'r')  # 테스트 케이스 불러오기

# 백준 테스트
# input = sys.stdin.readline

t = int(input())
for _ in range(t):
    n = int(input())
    arr = []
    for i in range(n):
        a, b = input().split()
        arr.append(b)
    res = Counter(arr)
    num = 1
    for k in res:
        num *= res[k] + 1
    print(num - 1)
