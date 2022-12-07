"use strict";

function solution(maps) {
  let answer = 1;
  let queue = [];
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const n = maps.length;
  const m = maps[0].length;

  queue.push([0, 0]); // 출발지점 넣어놓고 시작!
  maps[0][0] = 0; // 벽으로 만들기

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let [x, y] = queue.shift();

      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];

        if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
          if (nx === n - 1 && ny === m - 1) return answer + 1;
          queue.push([nx, ny]);
          maps[nx][ny] = 0; // 벽으로 만들기
        }
      }
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
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
