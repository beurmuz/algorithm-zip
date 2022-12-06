"use strict";

function solution(k, dungeons) {
  let answer = -1;
  let visited = Array.from({ length: dungeons.length }, () => 0);

  function dfs(count, k) {
    answer = Math.max(count, answer);

    for (let i = 0; i < dungeons.length; i++) {
      let [need, exhaust] = dungeons[i];
      if (k >= need && visited[i] === 0) {
        visited[i] = 1;
        dfs(count + 1, k - exhaust);
        visited[i] = 0; // 백트래킹
      }
    }
  }
  dfs(0, k);
  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
