"use strict";

/**
 * bfs를 이용해 푸는 문제
 */
const checkingDistance = (place) => {
  let board = place.map((v) => v.split(""));
  const dx = [-1, 1, 0, 0]; // 상하좌우
  const dy = [0, 0, -1, 1];

  // 응시자가 앉아있는 위치 정보를 queue에 넣는다.
  // 응시자가 있는 곳 주변만 탐색한다.
  let queue = [];
  let qIndex = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (board[i][j] === "P") queue.push([i, j]);
    }
  }

  // bfs로 탐색 시작
  while (queue.length !== qIndex) {
    const [x, y] = queue[qIndex];

    for (let k = 0; k < 4; k++) {
      // 상하좌우 탐색
      let [nx, ny] = [x + dx[k], y + dy[k]];
      if (nx < 0 || nx >= 5 || ny < 0 || ny >= 5) continue; // 범위를 벗어나면 건너뛴다.
      if (board[nx][ny] === "X") continue; // 파티션이면 건너뛴다.
      if (board[nx][ny] === "P") return 0;

      // 빈테이블일 경우 거리를 한번 더 이동해서 응시자나 파티션이 있는지 확인한다.
      for (let m = 0; m < 4; m++) {
        // 상하좌우 탐색
        let [nnx, nny] = [nx + dx[m], ny + dy[m]];
        if (nnx < 0 || nnx >= 5 || nny < 0 || nny >= 5) continue; // 범위를 벗어나면 건너뛴다.
        if (nnx === x && nny === y) continue; // 현 응시자의 위치와 같으면 건너뛴다.
        if (board[nnx][nny] === "P") return 0;
      }
    }
    qIndex++;
  }
  return 1;
};

const solution = (places) => {
  let answer = places.map((place) => checkingDistance(place));
  return answer;
};

console.log(
  solution([
    ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
    ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
  ])
);
