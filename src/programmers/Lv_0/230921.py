# ---------- 1. 문자열 출력하기 | O
str = input()
print(str)


# ---------- 2. 문자열 반복해서 출력하기 | O
# 내 풀이
a, b = input().strip().split(" ")
b = int(b)

for i in range(b):
    print(a, end="")

# 다른 풀이
a, b = input().strip().split(" ")
print(a * int(b))


# ---------- 3. 대소문자 바꿔서 출력하기 | O
# 내 풀이
str = list(input())
for char in str:
    if char == char.upper():
        print(char.lower(), end="")
    else:
        print(char.upper(), end="")

# 다른 풀이
print(input().swapcase())


# ---------- 4. 특수문자 출력하기 | O
print(r'!@#$%^&*(\'"<>?:;')  # r은 정규표현식을 의미한다.


# ---------- 5. 덧셈식 출력하기 | O
a, b = map(int, input().strip().split(" "))
print(f"{a} + {b} = {a+b}")
