"use strict";

function solution(n, board) {
  let answer = 0;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  let queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        // 육지 발견!
        board[i][j] = 0; // 큐에 넣기 전에 0으로 먼저 바꿔주기!!!
        queue.push([i, j]); // 큐에 좌표를 넣음
        answer++;

        while (queue.length) {
          // 큐가 비면 재귀가 하나 끝난 것
          let [x, y] = queue.shift();
          //   console.log(x, y); // 섬인 부분 출력
          for (let k = 0; k < 8; k++) {
            // 연결된 8방향을 모두 탐색
            let nx = x + dx[k];
            let ny = y + dy[k];

            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
              board[nx][ny] = 0; // 바다로 바꿔줌
              queue.push([nx, ny]); // 방문해야하는 노드들 넣기
            }
          }
        }
        // console.log("bfs end");
      }
    }
  }
  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(7, arr));
