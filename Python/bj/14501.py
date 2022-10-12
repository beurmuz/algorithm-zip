'''
6, 7일처럼 n을 넘어가면 dp[i+1]의 값을 넣어준다. (최댓값)
n을 넘어가지 않는 경우, dp[i+1]과 p[i]+dp[i+t[i]]의 값 중 큰 값을 넣는다.

이를 반복해 최댓값을 넣어주면 dp[0]에 최댓값이 들어오므로 dp[0]의 값을 출력하면 된다.
'''

n = int(input())
t = []
p = []
dp = []
for i in range(n):
    a, b = map(int, input().split())
    t.append(a)
    p.append(b)
    dp.append(b)
dp.append(0)

for i in range(n - 1, -1, -1):
    if t[i] + i > n:
        dp[i] = dp[i + 1]
    else:
        dp[i] = max(dp[i + 1], p[i] + dp[i + t[i]])
print(dp[0])
# print(dp)