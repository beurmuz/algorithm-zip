"use strict";

/**
 * dfs로 푸는 문제!
 * 최단거리 같은 문제가 아니므로 dfs로 연결된 지점을 모두 찾는다.
 */
const [n, m, ...inputs] = require("fs") // n: 컴퓨터의 수, m: 컴퓨터 쌍의 수, inputs: 연결된 컴퓨터 번호 쌍
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (n, m, inputs) => {
  // 1. 인접행렬 생성 및 값 넣기
  const map = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  for (let input of inputs) {
    let [x, y] = input.split(" ").map((v) => +v);
    map[x][y] = 1;
    map[y][x] = 1;
  }

  // 2. 방문 여부를 저장할 배열 생성, count 변수 생성
  let count = 0;
  const visited = Array.from({ length: n + 1 }, () => 0);

  // 3. 깊이우선 탐색으로 시작!
  const dfs = (n, start) => {
    // n은 컴퓨터 개수, start는 탐색 시작점
    visited[start] = 1; // 방문 표시

    for (let i = 0; i <= n; i++) {
      if (map[start][i] === 1 && visited[i] === 0) {
        // start랑 연결된 지점의 값이 1이고, 그 지점을 아직 방문하지 않았다면
        dfs(n, i);
      }
    }
  };

  // 4. 1번 노드와 연결된 지점 찾기!
  dfs(n, 1);

  // 5. 1번 노드와 관련된 노드들의 개수 구하기
  for (let i = 2; i <= n; i++) {
    if (visited[i] === 1) count++; // visited[i]가 1이라는 것은 방문했다는 의미이므로 count를 증가시킨다.
  }
  return count;
};

console.log(solution(+n, +m, inputs));
