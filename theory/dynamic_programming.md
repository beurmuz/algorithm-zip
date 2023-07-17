# dynamic_programming (동적 계획법)

- 큰 문제를 작은 단위로 쪼개어 푸는 방법
- 작은 단위의 문제를 풀고 답을 저장해놓은 후, 이를 이용해 범위를 넓혀가며 답을 구하는 방법
- 점화식을 이용해 작은 문제부터 큰 문제를 해결.
- 냅색 알고리즘(ex. 가방)이 대표적인 유형

## dp의 종류

dp는 Top-down과 Bottom-up 방식으로 나뉜다.

# [python]

## 활용 1) 계단 오르기

### v1. 재귀 (Top-down 방식)

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

### v2. 반복문 (Bottom-up 방식)

- 🧐 보통 Bottom-up 방식을 tabulation이라고 부른다.

```py
def climbingStairs(n):
    memo = {1: 1, 2: 2}

    for i in range(3, n+1):
        memo[i] = memo[i-1] + memo[i-2]

    return memo[n]
```

## 활용 2) 최소 비용으로 계단 오르기

### v1. top-down) 재귀를 이용한 완전 탐색

- top-down 방식

  - 계단 꼭대기 입장에서 생각해서 식을 세웠다.
  - dp(n) = dp(n-1) + dp(n-2)

- 시간복잡도: **O(2^n)**
  - (n-1)과 (n-2)에 대한 식을 계속 재귀로 호출하니 2가 되는것이고, 이를 총 n번 반복하니 O(2^n)이 되는 것이다.
  - 아래와 같은 코드를 작성하게 되면 최악의 경우 O(2^1000)이 된다. 이는 10^8을 거뜬히 넘는 수이다.

```py
cost = [17, 10, 1, 2, 1, 7]

def dp(n):
    if n == 0 and n == 1: # 0, 1층에서 시작한다고 했으니 0을 return
        return 0

    return min(dfs(n-1) + cost[n-1], dfs(n-2) + cost[n-2])

print(dp(2))
```

### v2. top-down) memoization으로 중복 호출 방지하기

- v1의 코드에 memoization을 기능을 넣어보자.
  - 각 단계에 해당하는 최소 비용을 계산해서 메모리에 저장해놓고 가져다 쓰자.
- 이렇게 되면 시간복잡도가 **O(n)**이 된다.
  - 계단의 높이가 n일 때, memo를 그대로 사용하기 때문에 총 2n번 호출되므로 시간복잡도가 O(n)이 되는 것이다.

```py
cost = [17, 10, 1, 2, 1, 7]
memo = {0: 0, 1: 0}

def dp(n):
    if n not in memo:
        memo[n] = min(dp(n-1) + cost[n-1], dp(n-2) + cost[n-2])

    return memo[n]

print(dp(2))
```

### v3. bottom-up) 반복문으로 풀어보기

- bottom-up 방식은 계단의 시작점을 기준으로 관계식을 세운다.
  - base case에 해당하는 부분은 직접 넣어준다.
  - ex) dp[0] = 0, dp[1] = 1
  - dp[2] = min(dp[1] + cost[1], dp[0] + cost[0]) ...
- 즉 점화식은 `dp[n] = min(dp[n-1] + cost[n-1], dp[n-2] + cost[n-2])`

```py
cost = [10, 15, 20, 17, 1]

dp = [-1] * (len(cost) + 1)
dp[0] = 0 # basecase 설정
dp[1] = 0 # basecase 설정

for n in range(2, len(cost)):
    dp[n] = min(dp[n-1] + cost[n-1], dp[n-2] + cost[n-2])

print(dp[3]) # 15
```
