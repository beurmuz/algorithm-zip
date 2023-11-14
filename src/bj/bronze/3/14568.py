"""
[완전 탐색]
"""

N = int(input())

answer = 0

for A in range(1, N + 1):
    for B in range(1, N + 1):
        for C in range(1, N + 1):
            if A + B + C == N:
                if C >= B + 2:
                    if A % 2 == 0:
                        answer += 1

print(answer)
