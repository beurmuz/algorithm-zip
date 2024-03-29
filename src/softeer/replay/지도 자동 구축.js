const N = require("fs").readFileSync("/dev/stdin").toString().trim();

const solution = (N) => {
  // dp에 한 변에 찍히는 점의 개수를 구한다.
  const dp = Array.from({ length: 15 + 1 }, () => 0);
  dp[0] = 2;

  for (let i = 1; i < N + 1; i++) {
    // 총 점의 개수를 구하려면 한 변에 오는 점들의 수를 구하고,
    // 2의 배수씩 늘어난다.
    dp[i] = dp[i - 1] * 2 - 1;
  }
  return dp[N] * dp[N];
};

console.log(solution(+N));
