"use strict";

function solution(n, arr) {
  let answer = 0;
  let graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  let checked = Array.from({ length: n + 1 }, () => 0);
  let path = [];

  // 인접행렬 만들기
  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }

  function dfs(v) {
    if (v === n) {
      answer++;
      console.log(path);
    } else {
      for (let i = 1; i <= n; i++) {
        // 항상 해당 정점에서 모든 가지수를 다 돌아봐야함
        if (graph[v][i] === 1 && checked[i] === 0) {
          // 인접 행렬이 1이고, 아직 방문하지 않았다면
          checked[i] = 1; // 방문 표시
          path.push(i);
          dfs(i); // 해당 정점에 빠져든다아앗
          checked[i] = 0; // back
          path.pop();
        }
      }
    }
  }
  checked[1] = 1; // 첫번째 지점은 방문 표시 해놓고 시작
  path.push(1);
  dfs(1); // 1번 정점부터 탐색 시작
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
