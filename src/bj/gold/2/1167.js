"use strict";

/**
 * G4. 트리의 지름 문제와 굉장히 유사하다. (G4문제는 bfs로, 해당 문제는 dfs로 풀었다.)
 *
 * 트리의 지름: 가장 먼 두 정점 사이의 거리 or 가장 먼 두 정점을 연결하는 경로
 * (cf. https://blog.myungwoo.kr/112)
 *
 * 선형 시간 안에 트리의 지름은 어떻게 구해야할까?
 * 1. 트리에서 임의의 정점 x를 잡는다.
 * 2. 정점 x에서 가장 먼 정점 y를 찾는다.
 * 3. 정점 y에서 가장 먼 정점 z를 찾는다.
 */
const [v, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (v, inputs) => {
  const tree = Array.from({ length: v + 1 }, () => []);
  for (let i = 0; i < v; i++) {
    let [pivot, ...connections] = inputs[i].split(" ").map((v) => +v);
    for (let j = 0; j < connections.length - 1; j += 2) {
      tree[pivot].push([connections[j], connections[j + 1]]);
    }
  }

  const visited = Array.from({ length: v + 1 }, () => false);
  let max = { node: 0, dist: Number.MIN_SAFE_INTEGER }; // max 변수에 최대 거리, 최대 거리인 노드를 저장한다.

  const dfs = (node, dist) => {
    visited[node] = true;
    if (max.dist < dist) max = { node, dist }; // 거리가 최대 거리이면 max객체의 노드, 거리값으로 갱신한다.
    for (let [nextNode, nextDist] of tree[node]) {
      if (visited[nextNode]) continue;
      dfs(nextNode, dist + nextDist); // 다음 dfs에 거리 값을 더해 넘긴다.
    }
  };
  dfs(1, 0); // 임의의 노드에서 시작해 dfs를 실행
  max.dist = Number.MIN_SAFE_INTEGER;
  visited.fill(false);

  // 1번 노드에서 가장 멀리있는 노드에서 시작해, 해당 노드를 기준으로 먼 노드를 찾는다.
  dfs(max.node, 0);
  return max.dist;
};

console.log(solution(+v, inputs));
