from collections import deque
import sys

# vscode 테스트
sys.stdin = open('coding/example.txt', 'r')  # 테스트 케이스 불러오기

# 백준 테스트
# input = sys.stdin.readline

# 얘는 됨
t = int(input())

for _ in range(t):
    p = input().rstrip()
    n = int(input())
    L = input().rstrip()[1:-1].split(',')

    if n == 0:
        Q = deque()
    else:
        Q = deque(L)

    flag = 0

    for j in p:
        if j == "R":
            flag += 1
        else:
            if len(Q) != 0:
                if flag % 2 == 0:
                    Q.popleft()
                else:
                    Q.pop()
            else:
                Q = -1
                break

    if Q != -1:
        if flag % 2 == 0:
            print("[" + ",".join(map(str, Q))+"]")
        else:
            Q.reverse()
            print("[" + ",".join(map(str, Q))+"]")
    else:
        print("error")

# 얘도 틀렸습니다 뜸
# t = int(input())

# for i in range(t):
#     p = input()
#     n = int(input())
#     arr = input()[1:-1].split(',')

#     queue = deque(arr)

#     flag = 0

#     if n == 0:
#         queue = []

#     for j in p:
#         if j == 'R':
#             flag += 1
#         elif j == 'D':
#             if len(queue) == 0:
#                 print("error")
#                 break
#             else:
#                 if flag % 2 == 0:
#                     queue.popleft()
#                 else:
#                     queue.pop()

#     else:
#         if flag % 2 == 0:
#             print("[" + ",".join(queue) + "]")
#         else:
#             queue.reverse()
#             print("[" + ",".join(queue) + "]")


# 배열 for문 돌려서 각각 처리하면 시간이 오래걸리니
# R과 D 명령을 보고 R 명령어의 개수가 짝수이면 두번의 뒤바꿈으로 인해 다시 원래대로 돌아오는 것을 이용
# D명령어일때 R의 개수에 따라 앞의 숫자를 제거하거나 맨뒤의 숫자 제거

# R이 짝수면 D명령어까지 수행된 queue 배열 출력
# R이 홀수면 D명령어까지 수행 후 reverse함수로 뒤바꿔 출력


# 아래는 js
# const BAEAKJOONFILE = "/dev/stdin";
# const VSCODEFILE = "./coding/example.txt";

# 얘는 틀렸습니다 뜸
# const fs = require("fs");
# let [t, ...input] = fs.readFileSync(VSCODEFILE).toString().trim().split("\n");
#
# for (let i = 0; i < input.length; i+=3) {
#  const fn = input[i];
#  const arr = JSON.parse(input[i + 2]);
#  let flag = 0;
#
#  for (let j = 0; j < fn.length; j++) {
#    if (fn[j] === "R") flag += 1;
#    else if (fn[j] === "D") {
#      if (arr.length === 0) console.log('error');
#      else {
#        if (flag % 2 == 0) arr.shift();
#        else arr.pop();
#      }
#    }
#  }
#
#  if (arr.length) {
#    if (flag % 2 === 0) console.log(JSON.stringify(arr));
#    else {
#      arr.reverse();
#      console.log(JSON.stringify(arr));
#    }
#  }
# }
#
# 16퍼까지 갔다가 시간초과 뜸
# for (let i = 0; i < input.length; i+= 3) {
#  const fn = input[i];
#  const arr = JSON.parse(input[i+2]);
#
#  for (let j = 0; j < fn.length; j++) {
#    if (arr.length <= 0) console.log('error');
#    else if (fn[j] === "R") {
#      arr.reverse();
#    }
#    else if (fn[j] === "D") {
#      arr.shift();
#    }
#  }
#
#  if(arr.length) console.log(JSON.stringify(arr));
# }
