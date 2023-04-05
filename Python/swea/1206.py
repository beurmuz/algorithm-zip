T=10
for test_case in range(1, T+1):
    n = int(input())
    building = list(map(int,input().split()))

    view = 0
    for i in range(2, n-2):
        left_2 = building[i] - building[i-2] # 왼쪽 거리 2
        left_1 = building[i] - building[i-1] # 왼쪽 거리 1
        right_1 = building[i] - building[i+1] # 오른쪽 거리 1
        right_2 = building[i] - building[i+2] # 오른쪽 거리 2
        if left_2 > 0 and left_1 > 0 and right_1 > 0 and right_2 > 0:
            print(left_2, left_1, right_1, right_2)
            view += min(left_2, left_1, right_1, right_2)
    print(f"#{test_case} {view}")