import sys

# vscode 테스트
sys.stdin = open('coding/example.txt', 'r')  # 테스트 케이스 불러오기

# 백준 테스트
# input = sys.stdin.readline

# 10 + 20 - 30 + 40 - 50 라고 가정
# ["10 + 20", "30 + 40", "50"]으로 만듬
exp = input().split('-')
ans = 0

# 첫번째 ["10 + 20"]을 + 연산자를 기준으로 나눠서 더한값을 ans에 넣음
# ans(0) += 10 = 10
# ans(10) += 20 = 30
for i in exp[0].split("+"):
    ans += int(i)

# 두번째 연산식 부터는 -연산으로 기존 값을 빼줌
for i in exp[1:]:
    for j in i.split("+"):
        ans -= int(j)

print(ans)
