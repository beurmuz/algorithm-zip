'''
# 1. 첫번째 플레이어부터 순차적으로 본인이 향하고 있는 방향대로 한 칸만큼 이동한다.
# => if 해당 방향으로 나갈 때 격자를 벗어나면:
#        정반대 방향으로 방향을 바꾸어 1만큼 이동한다.
# 2. if 이동한 방향에 플레이어가 없다면: (해당 칸에 총이 있는지 확인한다.)
#           if 해당 칸에 총이 있다면:
#               해당 플레이어는 총을 획득한다
#               if 플레이어가 이미 총을 가지고 있다면:
#                   놓여있는 총과 플레이어가 가지고 있는 총 중 공격력이 더 쎈 총을 얻고, 나머지 총은 격자에 둔다.
#    elif 이동한 방향에 플레이어가 있다면: (두 플레이어가 싸운다.)
#           if (A플레이어의 초기 능력치 + 가지고 있는 총의 공격력 합) > (B플레이어의 초기 능력치 + 가지고 있는 총의 공격력 합):
#               A win
#           elif (B의 능력치 + 공격력 합) > (A의 능력치  + 공격력 합):
#               B win
#           elif (A의 능력치 + 공격력 합) == (B의 능력치 + 공격력 합):
#                   if (A의 초기 능력치) > (B의 초기 능력치):
#                       A win
#                   else (A초기) < (B초기):
#                       B win
#           winner는 각 플레이어의 초기 능력치와 가지고 있는 총의 공격력의 합 차이 만큼 포인트로 획득
#           2-2-2. loser는 본인이 가지고 있는 총을 해당 격자에 내려놓고, 해당 플레이어가 원래 가지고 있던 방향대로 한 칸 이동한다.
#                   if 이동하려는 칸에 다른 플레이어가 있음 or 격자 범위 밖인 경우:
#                       오른쪽으로 60도씩 회전해 빈칸이 보이는 순간 이동
#                       if 해당 칸에 총이 있다면:
#                           해당 플레이어는 가장 공격력이 높은 총을 획득하고 나머지 총들은 격자에 내려놓음
#           2-2-3. winner는 승리한 칸에 떨어져있는 총, 원래 들고 있던 총을 비교해 가장 공격력이 높은 총을 획득하고, 나머지는 격자에 내려놓는다.
#   ↑ 위의 과정을 1번~ n번 플레이어까지 순차적으로 한번씩 진행하면 1라운드가 끝남 => 회득한 포인트는 [1, 0, 0, 0]
# ↑ 위의 과정을 또 반복 시 2번 라운드가 끝남 => 포인트는 [1, 0, 0, 0]
'''

# n: 격자 크기, m: 플레이어 수, k: 라운드 수 
n, m, k = map(int, input().split())
# 총의 정보.숫자 0은 빈칸 / 0보다 큰 값은 총의 공격력
gunsInfo = [list(map(int, input().split())) for _ in range(n)] 
# 총은 여러개 일 수 있다.
gunsInfo = [[[gun] for gun in line] for line in gunsInfo]
# 플레이어들의 정보 [x: 플레이어의 x위치정보, y: y위치정보, d: 방향, s: 초기 능력]
playersInfo = [list(map(int, input().split())) for _ in range(m)] # d는 0(up), 1(right), 2(down), 3(left)
for i in range(len(playersInfo)):
    playersInfo[i][0] -= 1 # 위치 정보가 0부터 시작하도록 바꿔준다.
    playersInfo[i][1] -= 1
# 총 포인트 획득량
total_point = [0]*m # [0, 0, 0, 0]
# 총기 소지 여부
have_guns = [[] for _ in range(m)] # [[], [], [], []]
# 방향 전환을 위한 값: 위, 오른쪽, 아래, 왼쪽 순
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

# 가지고 있는 총의 총합을 return
def getSum_guns(index):
    sumValue = sum(have_guns[index])
    return sumValue

# 가지고 있는 총들 중 최대값과 그 인덱스를 return
def getMax_have_guns(index):
    maxValue = max(have_guns[index])
    maxIndex = have_guns.find(maxValue)
    return maxValue, maxIndex

# 바닥에 있는 총들 중 최댓값을 return
def getMax_under_guns(x, y):
    maxValue = max(gunsInfo[x][y])
    return maxValue

# 총 k번 반복
for round in range(k): # 총 라운드 수만큼 반복한다.
    round_point = [0]*m # [0, 0, 0, 0] 라운드 별 포인트 기록을 위한 배열
    for now in range(len(playersInfo)): # 플레이어 수만큼 돈다.
        now_player = { # 플레이어의 정보 저장
            "x": playersInfo[now][0],
            "y": playersInfo[now][1],
            "direction": playersInfo[now][2],
            "initial_exp": playersInfo[now][3]
        }
        # 1. 첫번째 플레이어부터 순차적으로 본인이 향하고 있는 방향대로 한 칸만큼 이동한다.
        move_x = now_player["x"] + dx[now_player["direction"]]
        move_y = now_player["y"] + dy[now_player["direction"]]
        # 해당 방향으로 나갈 때 격자를 벗어나면:
        if move_x < 0 or move_y < 0 or move_x >= n or move_y >= n:
            # 정반대 방향으로 방향을 바꾸어 1만큼 이동한다.
            move_x = now_player["x"] + dx[(now_player["direction"]+2)%4]
            move_y = now_player["y"] + dy[(now_player["direction"]+2)%4]
            playersInfo[now][2] = (now_player["direction"]+2)%4 # 방향 갱신
        
        # 2. 한칸 이동 후 플레이어가 있는지 없는지 알아보기
        another_index = -1
        for i in range(len(playersInfo)):
            if i != now: # now 플레이어와 같은 사람은 건너뛴다.
                continue
            # 위치 정보가 같다면
            if move_x == playersInfo[i][0] and move_y== playersInfo[i][1]:
                # 마주친 플레이어의 정보 저장
                another_index = i
                break;
        
        # 2-1. 이동한 방향에 플레이어가 있다면 (=> 두 플레이어가 싸운다)
        winner_index = -1
        loser_index = -1
        if another_index != -1:
            # 3-1. (now의 초기능력 + 가진 총들의 공격력 합) > (another의 초기능력 + 가진 총들의 공격력 합)
            if playersInfo[now][3] + getSum_guns(now) > playersInfo[another_index][3] + getSum_guns(another_index):
                winner_index = now
                loser_index = another_index
            elif playersInfo[now][3] + getSum_guns(now) == playersInfo[another_index][3] + getSum_guns(another_index):
                if playersInfo[now][3] > playersInfo[another_index][3]:
                    winner_index = now
                    loser_index = another_index
                else:
                    winner_index = another_index
                    loser_index = now
            else:
                winner_index = another_index
                loser_index = now

            # winner는 각 플레이어의 초기 능력치 + 가지고 있는 총들의 공격력의 합 차이만큼 포인트로 획득
            round_point[winner_index] += abs(playersInfo[winner_index][3] - getSum_guns[winner_index])

            # 2-2-2. loswer는 본인이 가진 총을 해당 격자에 내려놓고, 해당 플레이어가 원래 가지고 있던 방향대로 한 칸 이동한다.
            gunsInfo[move_x][move_y].append(have_guns[loser_index])
            have_guns[loser_index] = []

            lose_next_x = move_x + dx[playersInfo[loser_index][2]]
            lose_next_y = move_y + dy[playersInfo[loser_index][2]]

            # 해당 방향으로 나갈 때 격자를 벗어나면:
            if lose_next_x < 0 or lose_next_y < 0 or lose_next_x >= n or lose_next_y >= n:
                # 정반대 방향으로 방향을 바꾸어 1만큼 이동한다.
                lose_next_x = now_player["x"] + dx[(now_player["direction"]+2)%4]
                lose_next_y = now_player["y"] + dy[(now_player["direction"]+2)%4]
            
            # 2. 한칸 이동 후 플레이어가 있는지 없는지 알아보기
            another_index = -1
            for i in range(len(playersInfo)):
                if i != now: # now 플레이어와 같은 사람은 건너뛴다.
                    continue
                # 위치 정보가 같다면
                if move_x == playersInfo[i][0] and move_y== playersInfo[i][1]:
                    # 마주친 플레이어의 정보 저장
                    another_index = i
                    break


        # 2-2. 이동한 방향에 플레이어가 없다면 (=> 해당 칸에 총이 있는지 확인)
        else:
            # 해당 칸에 총이 있다면 (=> 해당 플레이어는 총을 획득한다.)
            if gunsInfo[move_x][move_y] != []:
                # 총을 가지고 있지 않다면 해당 총을 줍는다.
                if have_guns[now] == []:
                    have_guns[now].append(gunsInfo[move_x][move_y])
                # 이미 총을 가지고 있다면, 놓여있는 총과 플레이어가 가지고 있는 총 중 공격력이 더 쎈 총을 얻고 나머지는 격자에 내려놓는다.
                else:
                    # 놓여있는 총들 중 공격력이 제일 쎈 것, 가지고 있는 총들 중 공격력이 제일 쎈거 찾기
                    under_max_gun = getMax_under_guns(move_x, move_y)
                    have_max_gun, have_max_index = getMax_have_guns(now)

                    # 놓여있는 총의 공격력 > 플레이어가 가진 총의 공격력
                    if under_max_gun > have_max_gun:
                        # 더 쎈 총을 줍고, 나머지는 바닥에 전부 내려놓는다.
                        gunsInfo[move_x][move_y].append(have_guns[now])
                        have_guns = [under_max_gun]
                        gunsInfo[move_x][move_y].remove(under_max_gun)
                    # 놓인 총 < 플레이어가 가진 총의 공격력이면 줍지 않고 그냥 간다.
                    else:
                        continue
    print(have_guns)



# 최종 출력
print(total_point)
