# ---------- 1. 짝수의 합 | O
# 내 풀이
def solution(n):
    answer = 0
    for num in range(n + 1):
        if num % 2 == 0:
            answer += num
    return answer


# 다른 풀이
def solution(n):
    return sum([i for i in range(2, n + 1, 2)])


# ---------- 2. 배열의 평균값 | O
def solution(numbers):
    return sum(numbers) / len(numbers)


# ---------- 3. 양꼬치 | O
def solution(n, k):
    return n * 12000 + (k - (n // 10)) * 2000


# ---------- 4. 피자 나눠먹기 | O
# 내 풀이
import math


def solution(n):
    return math.ceil(n / 7)


# 다른 풀이
def solution(n):
    return (n - 1) // 7 + 1


# ---------- 5. 짝수 홀수 개수 | O
# 내 풀이
def solution(num_list):
    answer = [0, 0]
    for num in num_list:
        if num % 2 == 0:
            answer[0] += 1
        else:
            answer[1] += 1
    return answer


# 다른 풀이
def solution(num_list):
    answer = [0, 0]
    for n in num_list:
        answer[n % 2] += 1
    return answer
