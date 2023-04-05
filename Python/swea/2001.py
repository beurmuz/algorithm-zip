T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    N, M = map(int, input().split())
    arr = [list(map(int, input().split())) for _ in range(N)]
    n = M-1
    maxValue = 0
    
    for i in range(N-n):
        for j in range(N-n):
            sumValue = 0
            
            for di in range(M):
                for dj in range(M):
                    sumValue += arr[i+di][j+dj]
                if sumValue > maxValue:
                    maxValue = sumValue
   
    print(f"#{test_case} {maxValue}")