# ---------- 1. a와b 출력하기 | O
# 내 풀이
a, b = map(int, input().strip().split(" "))
print("a =", a)
print("b =", b)


# 다른 풀이 (f 스트링을 이용)
a, b = map(int, input().strip().split(" "))
print(f"a = {a}\nb = {b}")


# ---------- 2. 두 수의 차 | O
def solution(num1, num2):
    return num1 - num2


# ---------- 3. 두 수의 곱 | O
def solution(num1, num2):
    return num1 * num2


# ---------- 4. 나이 출력 | O
def solution(age):
    return 2022 - age + 1


# ---------- 5. 두 수의 합 | O
def solution(num1, num2):
    return num1 + num2


# ---------- 6. 두 수의 나눗셈 | O
def solution(num1, num2):
    return int(num1 / num2 * 1000)  # 정수 부분만 출력한다.


# ---------- 7. 나머지 구하기 | O
def solution(num1, num2):
    return num1 % num2


# ---------- 8. 숫자 비교하기 | O
# 내 풀이
def solution(num1, num2):
    if num1 == num2:
        return 1
    else:
        return -1


# 다른 풀이
def solution(num1, num2):
    return 1 if num1 == num2 else -1  # 이걸로 한번에 끝내는 방법도 있다.


# ---------- 9. 몫 구하기 | O
def solution(num1, num2):
    return num1 // num2


# ---------- 10. 각도기 | O
# 내 풀이
def solution(angle):
    if angle < 90:
        return 1
    elif angle == 90:
        return 2
    elif angle < 180:
        return 3
    elif angle == 180:
        return 4


# 다른 풀이
def solution(angle):
    if angle <= 90:
        return 1 if angle < 90 else 2
    else:
        return 3 if angle < 180 else 4
