# ---------- 1. 뒤에서 5등 위로 | O
def solution(num_list):
    return sorted(num_list)[5:]


# ---------- 2. 문자열 정수의 합 | O
def solution(num_str):
    return sum(map(int, num_str))


# ---------- 3. 마지막 두 원소 | O
def solution(num_list):
    if num_list[-1] > num_list[-2]:
        num_list.append(num_list[-1] - num_list[-2])
    else:
        num_list.append(num_list[-1] * 2)
    return num_list


# ---------- 4. n보다 커질 때까지 더하기 | O
def solution(numbers, n):
    answer = 0
    for num in numbers:
        if answer > n:
            return answer
        answer += num
    return answer


# ---------- 5. n번째 원소부터 | O
def solution(num_list, n):
    return num_list[n - 1 :]
