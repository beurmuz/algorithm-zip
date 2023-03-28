"use strict";

const solution = (N, road, K) => {
  let answer = 0;
  const minCosts = Array.from({ length: N + 1 }, () => Number.MAX_SAFE_INTEGER); // 최소 비용 값을 저장할 배열
  const lines = Array.from({ length: N + 1 }, () => []);

  // lines에 노드간의 연결과 비용을 표시한다.
  road.forEach((line) => {
    let [a, b, c] = line;
    lines[a].push({ to: b, cost: c });
    lines[b].push({ to: a, cost: c });
  });

  let queue = [{ to: 1, cost: 0 }]; // queue에 시작점 정보를 넣어준다.
  let qIndex = 0;
  minCosts[1] = 0; // 1 -> 1의 비용은 0이다.

  while (queue.length !== qIndex) {
    let { to } = queue[qIndex]; // queue[qIndex]에서 to에 대한 정보만 가지고 온다.

    // to 노드와 연결된 다른 노드들을 전부 탐색한다.
    lines[to].forEach((nextNode) => {
      if (minCosts[nextNode.to] > minCosts[to] + nextNode.cost) {
        minCosts[nextNode.to] = minCosts[to] + nextNode.cost;
        queue.push(nextNode); // 기존의 경로 값보다 우회하는 값이 더 작으면 queue에 push한다.
      }
    });
    qIndex++;
  }

  return minCosts.filter((cost) => cost <= K).length;
};

console.log(
  solution(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
);
