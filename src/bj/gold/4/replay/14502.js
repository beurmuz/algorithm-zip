"use strict";

/**
 * dfs + bfs + 백트래킹 문제
 * - dfs로 순회하면서 벽을 3개 설치할 때마다 해당 arr정보를 복사해 바이러스를 퍼뜨린 후 안전 영역을 계산한다.
 */
const [[n, m], ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const solution = (col, row, board) => {
  // 상하좌우 방향
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let answer = 0; // 안전 영역의 최대 크기를 저장할 변수

  // 안전 영역을 카운팅하는 countSafeZone 함수 (bfs로 풀어야한다.)
  const countSafeZone = (arr) => {
    let safeCnt = 0;
    let queue = [];
    let qIndex = 0;

    // 현재 맵에서 바이러스의 위치를 찾는다.
    for (let i = 0; i < col; i++) {
      for (let j = 0; j < row; j++) {
        if (arr[i][j] === 2) queue.push([i, j]); // 바이러스의 위치 정보를 queue에 push해줌
      }
    }

    while (queue.length !== qIndex) {
      const [x, y] = queue[qIndex]; // 현재 x, y의 위치를 저장한 뒤

      // 바이러스 퍼뜨리기
      for (let k = 0; k < 4; k++) {
        const [nx, ny] = [x + dx[k], y + dy[k]];
        if (nx >= 0 && nx < col && ny >= 0 && ny < row && arr[nx][ny] === 0) {
          // 바이러스에 인접한 상하좌우가 안전 영역인 경우
          arr[nx][ny] = 2; // 바이러스에 감염시킴
          queue.push([nx, ny]);
        }
      }
      qIndex++;
    }

    // 모든 작업이 끝나면 안전 영역의 개수를 카운팅한다.
    for (let i = 0; i < col; i++) {
      for (let j = 0; j < row; j++) {
        if (arr[i][j] === 0) safeCnt += 1;
      }
    }
    return safeCnt;
  };

  // dfs로 벽의 만들고, 개수를 세어준다.
  const dfs = (count) => {
    if (count === 3) {
      // 3개의 벽을 설치했을 때, 바이러스를 전염시키고 안전 영역의 개수를 세야한다.
      let arr = board.map((v) => [...v]); // 값들을 복사한다.
      let safeCount = countSafeZone(arr);
      answer = Math.max(answer, safeCount);
      return;
    } else {
      for (let i = 0; i < col; i++) {
        for (let j = 0; j < row; j++) {
          if (board[i][j] === 0) {
            // 빈칸인 경우
            board[i][j] = 1; // 벽으로 만들어준 후
            dfs(count + 1);
            board[i][j] = 0; // 다시 빈칸으로 만든다. (백트래킹)
          }
        }
      }
    }
  };
  dfs(0);
  return answer;
};

console.log(solution(n, m, inputs));
