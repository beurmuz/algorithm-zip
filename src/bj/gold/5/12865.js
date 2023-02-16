"use strict";

/**
 * 배낭 문제!
 * - 물건의 무게 순서로 정렬 후 배낭에 담는 '그리디 알고리즘'을 이용해서 풀 수 있을 것 같지만, 그렇지 않다.
 * - 결국엔 물건을 담는 모든 경우의 수를 따져야만 답을 구할 수 있다.
 *   - 배낭에 n개의 물건 중 몇 개를 선택해 넣는 경우의 수는 2^n(넣고, 안넣고 => 2가지 경우 * n개)개. n이 크면 시간 내에 2^n가지 경우를 확인할 수 없다.
 * - 집합 A를 n번까지의 물건 중에서 물건들을 최적으로 고른 (무게 합이 k이하이면서 가치 합이 최대인) 집합이라고 하자.
 * - 해당 문제는 최적 부분 구조가 성립하기 때문에 '동적 계획법'을 이용해 풀 수 있다.
 *   - 집합 A가 n번 물건을 포함하지 않는다면 => A는 n-1번까지의 물건들 중에서 최적으로 고른 부분집합과 같다.
 *   - 집합 A가 n번 물건을 포함한다면 => A는 n-1번까지의 물건들 중에서 최적으로 고른 부분집합에 n번 물건을 넣은 것과 같다.
 *     - (단, n번 물건의 무게를 넣어도 무게가 k이하일 때에만 n번물건을 넣을 수 있다.)
 *
 * - maxVSum[n][k]를 n번까지의 물건들 중 최적으로 고른 물건들(무게 합이 k이하이면서 가치 합이 최대인)의 가치 합이라고 하면 아래의 점화식을 세울 수 있다.
 *   - n번 물건의 무게가 배낭의 무게 한도보다 무거워 넣을 수 없을 때: maxVSum[n][k] = maxVSum[n-1][k]
 *   - 그 외: maxVSum[n][k] = Max(maxVSum[n-1][k], maxVSum[n-1][k-weight] + value)
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
