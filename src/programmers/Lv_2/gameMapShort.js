"use strict";

// 최단거리 문제는 bfs로 풀어야함!
function solution(maps) {
  let answer = 1; // 출발지점은 무조건 세주니까
  let queue = [];
  const dx = [0, 0, 1, -1]; // 동 서 남 북
  const dy = [1, -1, 0, 0];
  const n = maps.length;
  const m = maps[0].length;

  queue.push([0, 0]); // 출발 지점 넣고 시작!

  while (queue.length) {
    let queueSize = queue.length;

    for (let i = 0; i < queueSize; i++) {
      let [x, y] = queue.shift();
      //   console.log(answer, x, y);

      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];

        if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
          if (nx === n - 1 && ny === m - 1) return ++answer;
          queue.push([nx, ny]);
          maps[nx][ny] = 0;
        }
      }
      //   console.log(queue);
    }
    answer++;
  }
  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
