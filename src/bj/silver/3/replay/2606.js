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

  // 2. 방문 여부를 저장할 배열 생성, 정답 개수를 셀 count 변수 생성
  const visited = Array.from({ length: n + 1 }, () => false);

  // 3. dfs(깊이우선 탐색) 시작!
  const dfs = (start) => {
    visited[start] = true; // 방문 표시

    for (let i = 0; i <= n; i++) {
      if (map[start][i] === 1 && visited[i] === false) {
        // start랑 연결되어 있고, 아직 방문하지 않았다면
        dfs(i);
      }
    }
  };

  // 4. 1번 노드와 연결된 지점 찾기
  dfs(1);

  // 5. 전염된 컴퓨터 수 구하기
  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (visited[i]) count++;
  }

  return count;
};

console.log(solution(+n, +m, inputs));
