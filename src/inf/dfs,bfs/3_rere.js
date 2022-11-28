"use strict";

function solution(n, arr) {
  let answer = 0;
  let graph = Array.from({ length: n + 1 }, () => []); // 각 행마다 빈 배열 선언
  let checked = Array.from({ length: n + 1 }, () => 0);
  let path = [];

  // 인접리스트 생성
  for (let [a, b] of arr) {
    graph[a].push(b); // a행에 b 푸시
  }
  console.log(graph);

  function dfs(v) {
    if (v === n) {
      answer++;
      console.log(path);
    } else {
      for (let i = 0; i < graph[v].length; i++) {
        // 해당 열에서 갈 수 있는 지점만 for문으로 돌아준다! (=> 모두 돌면 인접 행렬과 풀이법이 같아지고, 메모리 낭비가 일어남)
        if (checked[graph[v][i]] === 0) {
          checked[graph[v][i]] = 1;
          path.push(graph[v][i]);
          dfs(graph[v][i]); // graph[v][i]는 v에서 갈 수 있는 정점 번호
          checked[graph[v][i]] = 0; // back
          path.pop();
        }
      }
    }
  }
  path.push(1);
  checked[1] = 1; // 1번 정점부터 방문 시작
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
