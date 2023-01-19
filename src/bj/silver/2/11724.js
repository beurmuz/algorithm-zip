"use strict";

/**
 * 인접리스트와 dfs로 풀면 된다.
 * ✅ 덩어리 찾는 문제는 dfs!
 * ✅ 최소 길이, 시간, 날짜 찾는 문제는 bfs!
 */
const [value, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (value, inputs) => {
  const [n, m] = value.split(" ").map((v) => +v);
  const graph = Array.from({ length: n + 1 }, () => []);
  const visited = Array.from({ length: n + 1 }, () => 0); // 방문여부를 나타낼 배열

  // 인접 리스트 생성 (양방향이므로 u일때, v일때 push한다)
  inputs.map((value) => {
    let [u, v] = value.split(" ").map((v) => +v);
    graph[u].push(v);
    graph[v].push(u);
  });

  // dfs 함수 만들기
  const dfs = (vertex) => {
    visited[vertex] = 1; // 방문 표시
    for (let i = 0; i < graph[vertex].length; i++) {
      // 각각의 인접리스트 길이만큼 탐색
      let nx = graph[vertex][i];
      if (visited[nx] === 0) dfs(nx); // 아직 방문하지 않았다면 방문하러 간다!
    }
  };

  // 연결된 부분 찾으러 고!
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (visited[i] === 0) {
      // 방문하지 않은 곳만 탐색한다.
      dfs(i);
      answer++;
    }
  }
  return answer;
};

console.log(solution(value, inputs));
