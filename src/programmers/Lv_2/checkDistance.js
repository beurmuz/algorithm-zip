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

// console.log(
//   solution([
//     ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
//     ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
//     ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
//     ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
//     ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
//   ])
// );

/**
 * 다른 풀이법
 * - P기준 상하좌우에 P가 있으면 => 거리두기: 0
 * - O기준 상하좌우에 P가 2개이상 있으면 => 거리두기: 0
 *    - P가 하나거나 없다면 거리두기가 지켜진 것
 * - 한명이라도 거리두기를 지키지 않으면 반복문을 탈출해야하므로 탐색 중간에 탈출할 수 있는 for, while, some, every, find 중 하나를 사용해야 한다.
 */

const solution2 = (places) => {
  return places.map((place) => {
    // 결과가 true이면 거리두기가 지켜지지 않는다.
    return place.some((row, rIndex) => {
      // true이면 거리두기가 지켜지지 않는다. (바로 종료된다.)
      return row.split("").some((column, cIndex, arr) => {
        // 파티션이면 거리두기를 지키므로 false를 반환
        if (column === "X") return false;

        // 파티션이 아닌 경우, 상하좌우의 P개수 세기
        const pCount = [
          arr[cIndex - 1] || null, // 좌
          arr[cIndex + 1] || null, // 우
          (place[rIndex - 1] || "").charAt(cIndex), // 상
          (place[rIndex + 1] || "").charAt(cIndex), // 하
        ].filter((v) => v == "P").length;

        if ((column == "P" && pCount > 0) || (column == "O" && pCount >= 2))
          // P기준 상하좌우에 P가 있는지, O기준 상하좌우에 P가 2개 이상인지
          return true;
        return false;
      }, "");
    })
      ? 0
      : 1;
  });
};

console.log(
  solution2([
    ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
    ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
  ])
);
