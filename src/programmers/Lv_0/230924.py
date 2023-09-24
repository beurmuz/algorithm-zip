# ---------- 1. 문자열 뒤집기 | O
def solution(my_string):
    return my_string[::-1]


# ---------- 2. 배열의 유사도 | O
# 내 풀이
def solution(s1, s2):
    answer = 0

    for char in s1:
        if char in s2:
            answer += 1

    return answer


# 다른 풀이
def solution(s1, s2):
    return len(set(s1) & set(s2))  # s1과 s2를 set으로 만든 후, 둘다 있는 것만 구해서 길이를 return 한다.


# ---------- 3. 삼각형의 완성 조건(1) | O
def solution(sides):
    sides.sort()
    return 1 if sides[0] + sides[1] > sides[2] else 2


# ---------- 4. 자릿수 더하기 | O
def solution(n):
    return sum(list(map(int, str(n))))


# ---------- 5. 최댓값 만들기 (1) | O
# 내 풀이
def solution(numbers):
    numbers.sort(reverse=True)
    return numbers[0] * numbers[1]


# 다른 풀이
def solution(numbers):
    numbers.sort()
    return numbers[-2] * numbers[-1]
