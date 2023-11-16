"""
[완전 탐색]
"""

N = int(input())
Hints = [list(map(str, input().split())) for _ in range(N)]

answer = 0

# 세자릿수 만들기
for A in range(1, 10):  # 백의 자리
    for B in range(1, 10):  # 십의 자리
        for C in range(1, 10):  # 일의 자리
            counter = 0

            # 서로 다른 자릿수여야함
            if A == B or B == C or C == A:
                continue

            for hint in Hints:
                check = list(hint[0])
                strike = int(hint[1])
                ball = int(hint[2])

                strike_cnt = 0
                ball_cnt = 0

                # strike 계산
                if A == int(check[0]):
                    strike_cnt += 1
                if B == int(check[1]):
                    strike_cnt += 1
                if C == int(check[2]):
                    strike_cnt += 1

                # ball 계산
                if A == int(check[1]) or A == int(check[2]):
                    ball_cnt += 1
                if B == int(check[0]) or B == int(check[2]):
                    ball_cnt += 1
                if C == int(check[0]) or C == int(check[1]):
                    ball_cnt += 1

                if strike != strike_cnt:
                    break
                if ball != ball_cnt:
                    break

                counter += 1

            if counter == N:
                answer += 1

print(answer)
