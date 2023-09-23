# ---------- 1. 배열 자르기 | X
def solution(numbers, num1, num2):
    return numbers[num1 : num2 + 1]  # slice 이런게 아니고.. 배열 자르는 법 기억하기


# ---------- 2. 배열 뒤집기 | X
def solution(num_list):
    return num_list[::-1]  # 얘도 기억하기!


# ---------- 3. 점의 위치 구하기 | O
# 내 풀이
def solution(dot):
    if dot[0] > 0 and dot[1] > 0:
        return 1
    elif dot[0] < 0 and dot[1] > 0:
        return 2
    elif dot[0] < 0 and dot[1] < 0:
        return 3
    elif dot[0] > 0 and dot[1] < 0:
        return 4


# 다른 풀이
def solution(dot):
    x, y = dot
    if x * y > 0:
        return 1 if x > 0 else 3
    else:
        return 4 if x > 0 else 2


# ---------- 4. 중복된 숫자 개수 | X
def solution(array, n):
    return array.count(n)  # count로 셀 수 있다.


# ---------- 5. 아이스 아메리카노 | O
# 내 풀이
def solution(money):
    return [money // 5500, money % 5500]


# 다른 풀이
def solution(money):
    return divmod(money, 5500)  # divmod는 두 숫자를 나누어 몫과 나머지를 tuple로 반환하는 함수
