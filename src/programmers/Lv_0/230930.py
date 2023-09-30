# ---------- 1. 이어붙인 수 | O
def solution(num_list):
    odd, even = "", ""
    for num in num_list:
        if num % 2 == 0:
            even += str(num)
        else:
            odd += str(num)
    return int(even) + int(odd)


# ---------- 2. 카운트 업 | O
def solution(start_num, end_num):
    return [i for i in range(start_num, end_num + 1)]


# ---------- 3. 정수 찾기 | O
def solution(num_list, n):
    return 1 if n in num_list else 0


# ---------- 4. 부분 문자열 | O
def solution(str1, str2):
    return 1 if str1 in str2 else 0


# ---------- 5. 접두사인지 확인하기 | O
# 내 풀이
def solution(my_string, is_prefix):
    if is_prefix in my_string:
        for i in range(0, len(is_prefix)):
            if is_prefix[i] != my_string[i]:
                return 0
        return 1
    return 0


# 다른 풀이
def solution(my_string, is_prefix):
    return int(
        my_string.startswith(is_prefix)
    )  # startswith은 괄호 안의 인자로 시작하는지 검사하는 함수이다.
