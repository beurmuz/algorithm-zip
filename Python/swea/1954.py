T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    n = int(input())
    snail = [[0]*n for _ in range(n)]

    # right, down, left, up (시계방향으로)
    dx = [0, 1, 0, -1]
    dy = [1, 0, -1, 0]
    direction = 0

    # 현재 x값, y값
    x, y = 0, -1 # dy가 1이니 -1을 초깃값으로 잡아둔다. => (0,0)

    num = 1
    while(num <= n*n): # num이 n*n을 넘으면 반복문이 종료된다.
        x += dx[direction]
        y += dy[direction]

        while((x >= 0 and x < n and y >= 0 and y < n) and snail[x][y] == 0): # 범위 내에 있고, 아직 방문하지 않은 동안
            snail[x][y] = num
            x += dx[direction]
            y += dy[direction]
            num += 1

        # 범위를 벗어났으므로 진행된 방향 반대로 한칸 이동(이동하기 전으로 다시 돌아감)
        x -= dx[direction]
        y -= dy[direction]
        
        # 다음 방향으로 넘어가는데, 우-하-좌-상 4가지 방향으로 반복해서 순환되므로 % 연산 사용
        direction = (direction + 1) % 4

    print(f'#{test_case}')
    for row in snail:
        print(*row) # *붙이면 [] 없이 출력