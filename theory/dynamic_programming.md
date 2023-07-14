# dynamic_programming (동적 계획법)

- 동적 계획법이란 큰 문제를 작은 단위로 쪼개어 푸는 방법
- 작은 단위의 문제를 풀어 답을 저장해놓은 후, 이를 이용해 점차 그 (데이터)범위를 넓혀나가면서 답을 구하는 방법
- 이러한 것을 '점화식'이라고 함 (dy[n] === dy[n-1] + 3 ...)
- 점화식의 관계를 아는게 포인트 (관계식을 잡아내는 게 핵심)
- 동적 계획법은 dy라는 배열이 반드시 필요

# 냅색 알고리즘

- '가방'문제로도 유명함

# [python]

## 활용 1) 계단 오르기

### 재귀ver. (Top-down 방식)

- 🧐 보통 Top-down 방식을 memoization이라고 부른다.

```py
def climbingStairs(n):
    # basecase 설정
    if n == 1:
        return 1
    if n == 2:
        return 2

    return climbingStairs(n-1) + climbingStairs(n-2)
```

- 하지만 위의 코드는 중복 호출되는 부분이 있기에, dp의 memoization 기법을 이용해 아래의 코드처럼 개선할 수 있다.

```py
memo = {}

def climbingStairs(n):
    # basecase 설정
    if n == 1:
        return 1
    if n == 2:
        return 2

    if n not in memo:
        memo[n] = climbingStairs(n-1) + climbingStairs(n-2)

    return memo[n]
```

### 반복ver. (Bottom-up 방식)

- 🧐 보통 Bottom-up 방식을 tabulation이라고 부른다.

```py
def climbingStairs(n):
    memo = {1: 1, 2: 2}

    for i in range(3, n+1):
        memo[i] = memo[i-1] + memo[i-2]

    return memo[n]
```
