# ---------- 1. 카운트 다운 | O
def solution(start, end_num):
    return [i for i in range(start, end_num - 1, -1)]


# ---------- 2. 원소들의 곱과 합 | O
def solution(num_list):
    multi, sumPow = 1, 0

    for num in num_list:
        multi *= num
        sumPow += num
    sumPow = sumPow**2
    return 1 if multi < sumPow else 0


# ---------- 3. 배열의 원소만큼 추가하기 | O
# 내 풀이
def solution(arr):
    answer = []
    for num in arr:
        for i in range(num):
            answer.append(num)
    return answer


# 다른 풀이
def solution(arr):
    return [i for i in arr for j in range(i)]


# 또 다른 풀이
def solution(arr):
    answer = []
    for num in arr:
        answer += [num] * num
    return answer


# ---------- 4. 원하는 문자열 찾기 | O
def solution(myString, pat):
    return 1 if pat.lower() in myString.lower() else 0


# ---------- 5. 조건에 맞게 수열 변환하기1 | O
def solution(arr):
    answer = []
    for num in arr:
        if num >= 50 and num % 2 == 0:
            answer.append(num / 2)
        elif num < 50 and num % 2 == 1:
            answer.append(num * 2)
        else:
            answer.append(num)
    return answer


# ---------- 6. 특정한 문자를 대문자로 바꾸기 | O
def solution(my_string, alp):
    return "".join(  # List comprehension을 사용할 때는 if 문이 for문보다 먼저 와야한다.
        [string.upper() if string == alp else string for string in my_string]
    )


# ---------- 7. rny_string | O
def solution(rny_string):
    return "".join(["rn" if string == "m" else string for string in rny_string])


# ---------- 8. A 강조하기 | O
def solution(myString):
    return "".join(
        ["A" if string.lower() == "a" else string.lower() for string in myString]
    )


# ---------- 9. 수 조작하기 | O
def solution(n, control):
    for string in control:
        if string == "w":
            n += 1
        elif string == "s":
            n -= 1
        elif string == "d":
            n += 10
        elif string == "a":
            n -= 10
    return n


# ---------- 10. 세균 증식 | O
# 내 풀이
def solution(n, t):
    answer = n
    for i in range(t):
        answer *= 2
    return answer


# 다른 풀이
def solution(n, t):
    return n << t


# 다른 풀이
def solution(n, t):
    answer = 2**t * n
    return answer
