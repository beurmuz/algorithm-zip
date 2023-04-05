T = int(input())
for test_case in range(1, T + 1):
    print(f"#{test_case}")
    n = int(input())
    arr = [[1 for _ in range(i+1)] for i in range(n)]
    for i in range(2, n):
        for j in range(1, i):
            arr[i][j] = arr[i-1][j-1] + arr[i-1][j]
    
    for row in arr:
        print(*row)
