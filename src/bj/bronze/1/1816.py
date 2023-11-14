"""
[완전 탐색]
"""

n = int(input())

for _ in range(n):
    num = int(input())
    for div_num in range(2, 1000000 + 1):
        if num % div_num == 0:
            print("NO")
            break

        if div_num == 1000000:
            print("YES")
