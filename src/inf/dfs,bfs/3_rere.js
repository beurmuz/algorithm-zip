"use strict";

function solution(n, arr) {
  let answer = 0;
  let graph = Array.from({ length: n + 1 }, () => []);
  let checked = Array.from({ length: n + 1 }, () => 0);
  let path = [];

  // 인접리스트 생성
  for (let [a, b] of arr) {
    graph[a].push(b);
  }
  console.log(graph);

  function dfs(v) {
    if (v === n) {
      answer++;
      console.log(path);
    } else {
      for (let i = 0; i < graph[v].length; i++) {
        if (checked[graph[v][i]] === 0) {
          checked[graph[v][i]] = 1;
          path.push(graph[v][i]);
          dfs(graph[v][i]); // 정점 번호 넘기고
          checked[graph[v][i]] = 0; // back
          path.pop();
        }
      }
    }
  }
  path.push(1);
  checked[1] = 1; // 1부터 방문 시작
  dfs(1);
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
