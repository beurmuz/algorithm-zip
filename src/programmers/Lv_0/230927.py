# ---------- 1. 숨어있는 숫자의 덧셈(1) | △
def solution(my_string):
    # isdigit()를 기억해내지 못했고..
    return sum(int(string) for string in my_string if string.isdigit())


# ---------- 2. n의 배수 | O
# 내 풀이
def solution(num, n):
    return 1 if num % n == 0 else 0


# 다른 풀이
def solution(num, n):
    return int(not (num % n))
    # num%n은 int 값이지만, 이를 not() 함수 안에 넣으면 int가 bool로 해석되어서 num%n이 0이면 False로, 0이 아니면 True로 해석됨


# ---------- 3. 짝수는 싫어요 | O
def solution(n):
    return [num for num in range(1, n + 1, 2)]


# ---------- 4. 제곱수 판별하기 | O
def solution(n):
    return 1 if (n**0.5) % 1 == 0 else 2  # n의 반을 제곱한 값이 0으로 나눠지면 제곱수인 것이다.


# ---------- 5. 문자열 뒤의 n글자 | O
# 내 풀이
def solution(my_string, n):
    return my_string[len(my_string) - n :]


# 다른 풀이
def solution(my_string, n):
    return my_string[-n:]
