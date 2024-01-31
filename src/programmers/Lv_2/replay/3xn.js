/**
 * [dp, 동적프로그래밍]
 * - n = x 일때 x로 만들 수 있는 새로운 패턴의 경우의 수는 항상 2가지이다.
 * - 점화식: DP[N] = DP[N-2]*DP[2] + DP[N-4]*2 + DP[N-6]*2 + ... DP[2]*2 + 2;
 */

function solution(n) {
  // dp 생성, n=0, n=2, n=4일 때의 경우의 수를 넣는다.
  // 홀수인 경우는 직사각형을 채울 수 없으므로 n=0일땐 idx=0, n=2일땐 idx=1, n=4일땐 idx=2 ...
  const dp = [0, 3, 11];

  // idx는 n을 2로 나눈 값이다.
  const idx = n >> 1;

  // n이 홀수라면 바로 종료한다.
  if (n % 2) return 0;
  if (idx < 3) return dp[idx];

  // 제한조건에 의한 MOD 값 선언
  const MOD = 1000000007;

  // idx까지 반복문을 돌린다.
  for (let i = 3; i <= idx; i++) {
    // 3은 dp[1], 즉 n=2일때와 같다.
    // n=x일때 x에서 구성할 수 있는 새로운 패턴은 항상 2가지이다.
    dp[i] = dp[i - 1] * dp[1] + 2; // dp[1] == 3. (n-2) * (2) + 2(새로운 경우 2가지)

    // dp[j]는 n=x일 때, (x-2) ~ (2)까지의 범위이다.
    for (let j = 1; j < i - 1; j++) {
      // (n-4) ~ 남은 부분
      dp[i] += dp[j] * 2;
    }
    dp[i] %= MOD;
  }
  return dp[idx];
}
