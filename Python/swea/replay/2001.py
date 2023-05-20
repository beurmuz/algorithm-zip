T = int(input())

for test_case in range(1, T + 1):
    N, M = map(int, input().split())
    arr = [list(map(int, input().split())) for _ in range(N)]
    answer = 0
    
    for i in range(N-M+1):
        for j in range(N-M+1):
            total = 0
            for x in range(i, i+M): # M*M 격자 크기를 유지해야하므로 i+M까지 순회한다.
                for y in range(j, j+M): # 격자 크기를 유지해야하므로 j+M까지 순회한다.
                    total += arr[x][y]
            answer = max(answer, total) # 둘 중 최댓값을 answer로 갱신한다. 
                    
    print(f"#{test_case} {answer}")