"""
[완전 탐색]
- Python은 1초에 약 1억번의 연산이 가능하다.
"""

A, B, C, D, E, F = map(int, input().split())

for X in range(-10000, 10001):
    for Y in range(-10000, 10001):
        if A * X + B * Y == C:
            if D * X + E * Y == F:
                print(X, Y)
                break
