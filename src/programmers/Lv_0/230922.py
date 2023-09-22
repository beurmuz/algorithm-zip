# ---------- 1. 문자열 붙여서 출력하기 | O
# 내 풀이
str1, str2 = input().strip().split(" ")
print(str1, str2, sep="")

# 다른 풀이
print(input().strip().replace(" ", ""))


# ---------- 2. 문자열 돌려서 출력하기 | O
# 내 풀이
for i in input():
    print(i)

# 다른 풀이
print("\n".join(input()))


# ---------- 3. 홀짝 구분하기 | O
# 내 풀이
num = int(input())
if num % 2 == 0:
    print(f"{num} is even")
else:
    print(f"{num} is odd")


# 다른 풀이
num = int(input())
print(f"{num} is {'even' if num % 2 == 0 else 'odd'}")


# ---------- 4. 편지 | O
def solution(message):
    return len(message) * 2


# ---------- 5. 배열 원소의 길이 | O
# 내 풀이
def solution(strlist):
    return [len(word) for word in strlist]


# 다른 풀이
def solution(strlist):
    answer = list(map(len, strlist))
    return answer
