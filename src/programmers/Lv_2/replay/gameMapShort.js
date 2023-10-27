"use strict";

/**
 * [BFS]
 * - 최단거리, 최단경로는 BFS를 이용해서 풀자!
 * - 방문 표시 여부, while문을 돌기 전 queue에 넣어주기, queue를 사용한 코드 작성에 유의하자.
 */

function solution(maps) {
  let answer = 1;
  let dx = [0, 0, 1, -1]; // 동, 서, 남, 북
  let dy = [1, -1, 0, 0];

  let queue = [];
  const N = maps.length;
  const M = maps[0].length;

  queue.push([0, 0]);
  maps[0][0] = 0; // 방문했으면 벽으로 만들어준다.

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let [x, y] = queue.shift();

      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];

        if (nx >= 0 && ny >= 0 && nx < N && ny < M && maps[nx][ny] === 1) {
          if (nx === N - 1 && ny === M - 1) return answer + 1;
          queue.push([nx, ny]);
          maps[nx][ny] = 0; // 벽으로 만들기
        }
      }
    }
    answer++;
  }
  return -1;
}
