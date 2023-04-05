T = int(input())

for test_case in range(1, T + 1):
    N, K = map(int, input().split())
    puzzle = [list(map(int, input().split())) for _ in range(N)]
    answer = 0;
    # rowList = []
    # columnList = []
   
    # 퍼즐 탐색하기 - 1) 가로방향 탐색
    for i in range(N):
        cnt = 0 # 연속되는 빈 칸의 수를 세기 위한 변수
        for j in range(N):
            if puzzle[i][j] == 1: # 연속되는 칸이라면 cnt를 1 증가시킨다.
                cnt += 1
            else: # 갈 수 없는 칸을 만나면 cnt를 0으로 만들어준다.
                if cnt == K:
                    answer += 1
                cnt = 0
            if j == N-1:
                if cnt == K:
                    answer += 1

    # 퍼즐 탐색하기 - 2) 세로방향 탐색
    for i in range(N):
        cnt = 0
        for j in range(N):
            if puzzle[j][i] == 1:
                cnt += 1
            else: # 갈 수 없는 칸을 만나면 cnt를 0으로 만들어준다.
                if cnt == K:
                    answer += 1
                cnt = 0
            if j == N-1:
                if cnt == K:
                    answer += 1
      
    print(f"#{test_case} {answer}")
