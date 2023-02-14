"use strict";

/**
 * 배낭 문제!
 * - 물건의 무게 순서로 정렬 후 배낭에 담는 '그리디 알고리즘'을 이용해서 풀 수 있을 것 같지만, 그렇지 않다.
 * - 결국엔 물건을 담는 모든 경우의 수를 따져야만 답을 구할 수 있다.
 *   - 배낭에 n개의 물건 중 몇 개를 선택해 넣는 경우의 수는 2^n개. n이 크면 이 방법도 좋지않다.
 *
 * cf. [참고](https://gywlsp.github.io/boj/12865/)
 */
const [[N, K], ...items] = (inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number)));

// n: 물품의 수
// k: 준서가 버틸 수 있는 무게
// w: 물건의 무게
// v: 물건의 가치
const solution = (N, K, items) => {
  // 물건 번호를 맞추기 위해 맨 앞에 null을 넣음
  items.unshift(undefined);

  // maxVSum[n][k]: n번까지의 물건들 중 몇 개를 골라,
  // 그 무게 합이 k 이하인 경우들 각각의 가치 합 중 최댓값
  const maxVSum = [];
  for (let i = 0; i <= N; i++) {
    maxVSum.push(Array(K + 1).fill(0));
  }

  for (let n = 1; n <= N; n++) {
    const [weight, value] = items[n];
    for (let k = 0; k <= K; k++) {
      // 물건의 무게가 k보다 클 때
      if (k < weight) {
        maxVSum[n][k] = maxVSum[n - 1][k];
      } else {
        maxVSum[n][k] = Math.max(
          maxVSum[n - 1][k], // n번 물건을 담지 않는 경우
          maxVSum[n - 1][k - weight] + value // n번 물건을 담는 경우
        );
      }
    }
  }
  return maxVSum[N][K];
};

console.log(solution(N, K, items));
