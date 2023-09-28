# ---------- 1. 정수 부분 | O
def solution(flo):
    return int(flo)


# ---------- 2. 부분 문자열인지 확인하기 | O
def solution(my_string, target):
    return 1 if target in my_string else 0


# ---------- 3. 문자열로 변환 | O
def solution(n):
    return str(n)


# ---------- 4. 꼬리 문자열 | O
def solution(str_list, ex):
    return "".join(string for string in str_list if ex not in string)


# ---------- 5. 문자열 앞의 n글자 | O
def solution(my_string, n):
    return my_string[0:n]


# ---------- 6. flag에 따라 다른 값 반환하기 | O
def solution(a, b, flag):
    return a + b if flag == True else a - b


# ---------- 7. n번째 원소까지 | O
def solution(num_list, n):
    return num_list[0:n]


# ---------- 8. 공배수 | O
def solution(number, n, m):
    return 1 if number % n == 0 and number % m == 0 else 0


# ---------- 9. 첫번째로 나오는 음수 | O
def solution(num_list):
    for i in range(len(num_list)):
        if num_list[i] < 0:
            return i
    return -1


# ---------- 10. 문자열 곱하기 | O
def solution(my_string, k):
    return my_string * k


# ---------- 11. 문자열을 정수로 변환하기 | O
def solution(n_str):
    return int(n_str)


# ---------- 12. 길이에 따른 연산 | O
def solution(num_list):
    if len(num_list) >= 11:
        return sum(num_list)
    else:
        answer = 1
        for num in num_list:
            answer *= num
        return answer


# ---------- 13. n개 간격의 원소들 | O
def solution(num_list, n):
    return [num_list[i] for i in range(0, len(num_list), n)]


# ---------- 14. 대문자로 바꾸기 | O
def solution(myString):
    return myString.upper()


# ---------- 15. 소문자로 바꾸기 | O
def solution(myString):
    return myString.lower()
