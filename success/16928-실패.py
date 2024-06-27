import sys
import math

# vscode 테스트
sys.stdin = open('coding/example.txt', 'r')  # 테스트 케이스 불러오기

# 백준 테스트
# input = sys.stdin.readline

# 3%에서 실패함 기록용으로 남기기

n, m = map(int, input().split())
leg = [list(map(int, input().split())) for _ in range(n)]
snake = [list(map(int, input().split())) for _ in range(m)]
count = []
goal = 100
player = 1
good_choice = []
good_choice_value = 0
temp_count = 0
check_leg = []
leg_position = 0

# 2차원 배열의 1번째 값(열)을 기준으로 오름차순 정렬
sorted_leg = sorted(leg,key=lambda x:x[0])
index_leg = [i[0] for i in sorted_leg]

def check_snake(player, dice):
  for i in snake:
    if player + dice == i[0]:
      return False
    else:
      return True
    
def dice_set(player, maxDice, temp_count):
  # print("-------dice_set-----------")
  for i in range(maxDice, 0, -1):
    if check_snake(player, i):
      dice = i
      player = player + dice
      temp_count += 1

      return player, temp_count

def setting(player, target, temp_count):
  # print("-------setting-----------")
  while True:
    step_gap = target - player
    if player < target and step_gap >= 6:
      player, temp_count = dice_set(player, 6, temp_count)
    elif player < target and step_gap < 6:
      player, temp_count = dice_set(player, step_gap, temp_count)
    elif step_gap == 0:
      return player, temp_count
    

def leg_up(player, target, temp_count):
  # print("-------leg_up-----------")
  next_target = 0
  player = target
  for i in index_leg:
    if i > player:
      # print("사다리 오르고 다음 사다리 위치로 이동", i)
      player, temp_count = setting(player, i, temp_count)
      find_index = index_leg.index(i)
      next_target = sorted_leg[find_index][0]
      break
  return player, next_target, temp_count



for i in sorted_leg:
  if i[0] in check_leg:
    break

  leg_position = 0
  
  temp_count = 0
  player, temp_count = setting(player, i[0], temp_count)
  leg_position = i[0]

  while True:
    # print("와일문 실행 현재 player:", player, "현재 leg_position:", leg_position, "비교:", player == leg_position)
    if player == goal:
      # print("-------player_goal!!-----------")
      count.append(temp_count)
      player = 1
      break
    elif player == leg_position:
      # print("-------플레이어 사다리 오르기-----------")
      check_leg.append(leg_position)
      find_index = index_leg.index(leg_position)
      next_target = sorted_leg[find_index][1]
      player, leg_position, temp_count = leg_up(player, next_target, temp_count)
    else:
      # print("-------와일문의 else문 실행-----------")
      player, temp_count = setting(player, goal, temp_count)

print(min(count))

