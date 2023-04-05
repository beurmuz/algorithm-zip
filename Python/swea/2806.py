def dfs(y):
    if y == N:
        global count
        count += 1
        return

    for x in range(N):
        if row[x] or diag1[x + y] or diag2[x - y]:
            continue

        row[x] = diag1[x + y] = diag2[x - y]= 1
        dfs(y+1)
        row[x] = diag1[x + y] = diag2[x - y]= 0


T = int(input())

for test_case in range(1, T+1):
    N = int(input())
    count = 0
    row, diag1, diag2 = [0 for _ in range(N)], [0 for _ in range(2 * N - 1)], [0 for _ in range(2 * N - 1)]

    dfs(0)
    print(f"#{test_case} {count}")