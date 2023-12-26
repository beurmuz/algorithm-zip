/**
 * [dp, 동적프로그래밍 문제]
 * - 점화식을 찾는게 많이 어려워, 풀이를 검색해보았다.
 * - 거스름돈을 주는 방법을 구하는 것이다.
 */

function solution(n, money) {
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[0] = 1;

  // 가지고 있는 화폐의 개수만큼 반복하기
  for (let i = 0; i < money.length; i++) {
    // nowMoney는 현재 거스름돈 (0원 ~ n원)
    for (let nowMoney = 0; nowMoney <= n; nowMoney++) {
      // 만약 현재 거스름돈이 새롭게 추가된 화폐 금액과 같거나 크다면,
      // 새롭게 추가되는 화폐를 사용할 수 있으므로 점화식을 활용해 dp 배열을 구한다.
      if (nowMoney >= money[i]) dp[j] += dp[j - money[i]] & 1000000007;
    }
  }

  return dp[n];
}
