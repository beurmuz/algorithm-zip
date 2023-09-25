# ---------- 1. 머쓱이보다 키 큰 사람 | O
def solution(array, height):
    array.append(height)
    array.sort(reverse=True)
    return array.index(height)


# ---------- 2. 문자 반복 출력하기 | O
# 내 풀이
def solution(my_string, n):
    answer = ""
    for string in my_string:
        for i in range(n):
            answer += string
    return answer


# 다른 풀이
def solution(my_string, n):
    answer = ""

    for c in list(my_string):
        answer += c * n  # 2중 for문을 쓰지 않아도 c를 n번 출력한다.
    return answer


# 다른 풀이
def solution(my_string, n):
    return "".join(i * n for i in my_string)  # 각각의 원소를 n개씩 출력해서 join한다.


# ---------- 3. 특정 문자 제거하기 | O
# 내 풀이
def solution(my_string, letter):
    # replace는 첫번째 인자에 해당하는 값을 두번째 인자로 바꿔준다. 세번째 인자에 수를 넣으면 해당 갯수만큼만 제거한다.
    return my_string.replace(letter, "")


# 다른 풀이
def solution(my_string, letter):
    answer = ""
    for string in my_string:
        if string != letter:  # letter랑 같지 않은 경우에만 값을 더해준다.
            answer += string
    return answer


# ---------- 4. 피자 나눠먹기 (3) | O
# 내 풀이
def solution(slice, n):
    return n // slice if n % slice == 0 else n // slice + 1


# 다른 풀이
def solution(slice, n):
    return ((n - 1) // slice) + 1


# ---------- 5. 모음 제거 | O
# 내 풀이
def solution(my_string):
    alpha = set(["a", "e", "i", "o", "u"])
    answer = ""
    for string in my_string:
        if string not in alpha:
            answer += string
    return answer


# 다른 풀이
def solution(my_string):
    return "".join(
        [i for i in my_string if not (i in "aeiou")]
    )  # i가 aeiou에 속하지 않은 경우에만 리스트를 리턴한다.
