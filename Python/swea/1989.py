T = int(input())

for test_case in range(1, T + 1):
    s1 = input()
    s2 = s1[::-1]
    if s1 == s2:
        print(f"#{test_case} 1")
    else:
        print(f"#{test_case} 0")
