T = int(input())

for test_case in range(1, T + 1):
    _list = list(map(int, input().split()))
    print(f"#{test_case} {max(_list)}")