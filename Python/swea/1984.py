T = int(input())

for test_case in range(1, T + 1):
    _list = sorted(list(map(int, input().split())))
    midAvg = sum(_list[1:len(_list)-1]) / 8
    print(f"#{test_case} {round(midAvg)}")