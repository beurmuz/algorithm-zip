"use strict";

// 처음에 푼 풀이 (그리디)
// function solution(k, dungeons) {
//   let answer = 0;
//   dungeons.sort((a, b) => {
//     if (a[0] === b[0]) return a[1] - b[1];
//     return b[0] - a[0];
//   });

//   let rest = k;
//   for (let [need, exhaust] of dungeons) {
//     if (rest >= need && rest - exhaust >= 0) {
//       console.log(rest, need, exhaust);
//       rest -= exhaust;
//       answer++;
//     }
//   }

//   return answer;
// }

function solution(k, dungeons) {
  let answer = -1;
  let visited = Array.from({ length: dungeons.length }, () => 0);

  function dfs(L, k) {
    // L === count
    answer = Math.max(L, answer);

    for (let i = 0; i < dungeons.length; i++) {
      let [need, exhaust] = dungeons[i];
      if (k >= need && visited[i] === 0) {
        visited[i] = 1;
        dfs(L + 1, k - exhaust);
        visited[i] = 0;
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

/*
  1. 처음에 푼 방법
  - 소모 피로도가 큰 순서부터 처리하면 된다고 생각했음
  - 소모 피로도를 내림차순으로 sort한 후, for문으로 가능한 경우만 count
  - 근데 실패..

  2. 완전탐색(dfs)으로 푼 방법
  - 트리로 생각해서 Level 0에서 dungeons의 0부터, 1부터, 2부터 방문하는 경우로 따져서 풀기
*/
