import sys
# sys.stdin = open('coding/example.txt', 'r')  # 테스트 케이스 불러오기
input = sys.stdin.readline

case = [0] * 113
case[1] = 1
case[2] = 2
case[3] = 4

for i in range(4, 11):
    case[i] = sum(case[i-3:i])

for _ in range(int(input())):
    print(case[int(input())])
