# ---------- 1. 순서쌍의 개수 | O
# 내 풀이
def solution(n):
    answer = 0
    for i in range(1, n + 1):
        share, rest = divmod(n, i)
        if rest == 0:
            answer += 1
    return answer


# 다른 풀이
def solution(n):
    answer = 0
    for i in range(1, n + 1):
        if n % i == 0:
            answer += 1
    return answer


# ---------- 2. 배열 두배 만들기 | O
def solution(numbers):
    return [i * 2 for i in numbers]


# ---------- 3. 문자열 안에 문자열 | O
def solution(str1, str2):
    return 1 if str2 in str1 else 2


# ---------- 4. 중앙값 구하기 | O
# 내 풀이
def solution(array):
    array.sort()
    return array[len(array) // 2]


# 다른 풀이
def solution(array):
    return sorted(array)[len(array) // 2]


# ---------- 5. 옷가게 할인 | O
# 내 풀이
def solution(price):
    if price >= 500000:
        return int(price * 0.8)
    elif price >= 300000 and price < 500000:
        return int(price * 0.9)
    elif price >= 100000 and price < 300000:
        return int(price * 0.95)
    else:
        return int(price)


# 다른 풀이
def solution(price):
    discount_rates = {500000: 0.8, 300000: 0.9, 100000: 0.95, 0: 1}
    for discount_price, discount_rate in discount_rates.items():
        if price >= discount_price:
            return int(price * discount_rate)
