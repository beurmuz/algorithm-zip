# dynamic_programming (동적 계획법)

- 큰 문제를 작은 단위로 쪼개어 푸는 방법
- 작은 단위의 문제를 풀고 답을 저장해놓은 후, 이를 이용해 범위를 넓혀가며 답을 구하는 방법
- 점화식을 이용해 작은 문제부터 큰 문제를 해결.
- 냅색 알고리즘(ex. 가방)이 대표적인 유형

## dp의 종류

dp는 Top-down과 Bottom-up 방식으로 나뉜다.

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
