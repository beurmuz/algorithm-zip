/**
 * [dp, 동적 프로그래밍, 피보나치 수열]
 * - 우선 입력값의 크기가 크다는 점을 기억해야한다. 그리고 n을 1씩 늘려갈 때마다 가능한 가짓수가 몇개인지 파악한다.
 * - 가짓수가 늘어나는 과정에서 특정한 규칙이 있는지 파악하면 된다.
 */

function solution(n) {
  let answer = 0;
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1000000007;
  }

  return dp[n];
}
