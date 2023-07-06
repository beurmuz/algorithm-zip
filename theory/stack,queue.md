# stack

: FILO(First in Last Out), 처음에 들어온 게 가장 나중에 나감

- push('요소')
- pop(): 가장 위의 요소가 삭제됨

> 보통'(', ')' 문제가 나오면 대부분이 stack으로 푸는 문제다

## 괄효 유효성 문제

- 총 시간복잡도 O(n) \* O(1) = O(n)

```py
def isVaild(s):
    stack = []
    for p in s:
        if p == "(":
            stack.append(")")
        elif p == "{":
            stack.append("}")
        elif p == "[":
            stack.append("]")
        elif not stack or stack.pop() != p: # stack이 비어있지않고 stack의 top에서 뺀 값이 p와 다르다면
            return False
    return not stack
```

## 날씨가 따뜻해지는 순간 찾기

```py
def whenHeatingDay(temperatures):
    answer = [0] * len(temperatures)
    stack = []

    for nowDay, nowTemperate in enumerate(temperatures):
        while stack and stack[-1][1] < nowTemperate: # 0번째 날, stack이 비어있으므로 while문을 건너뛰고 stack에 push한다.
            prevDay, _ = stack.pop()
            answer[prevDay] = nowDay - prevDay
        stack.append((nowDay, nowTemperate)) # 튜플 형태로 데이터 쌍을 저장한다.
    return answer

print(whenHeatingDay([73, 74, 75, 71, 69, 72, 76, 73]))
# [1, 1, 4, 2, 1, 1, 0, 0]
```

# queue

: FIFO(First in First out), 처음에 들어온 게 가장 먼저 나감

- push('요소')
- shift(): 가장 처음에 들어온 요소가 삭제됨

> 순서가 중요할 땐 queue쓰기?

---

# 이 외의 개념

## isNaN(value) 함수

- is not a number?
- value가 숫자가 아니면 true, 숫자이면 false를 반환합니다.
