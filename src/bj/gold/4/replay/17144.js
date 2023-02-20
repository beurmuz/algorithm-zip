"use strict";

/**
 * 빡!구현
 */
const [nums, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [R, C, T] = nums.split(" ").map(Number); // R:row, C:column, T: Time
const room = input.map((v) => v.split(" ").map(Number)); // 방의 정보

// 1. 공기청정기가 설치된 곳을 찾는다.
const cleanerPositionCheck = () => {
  const cleaner = [];
  for (let i = 0; i < R; i++) {
    if (room[i][0] === -1) cleaner.push(i); // 공기청정기는 항상 1열에 있다.
  }
  return { upCleanerX: cleaner[0], downCleanerX: cleaner[1] };
};

// 2. 미세먼지가 있는 칸을 찾는다.
const searchFinedust = (save, upCleanerX, downCleanerX) => {
  const dustPositions = [];
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (room[i][j] > 0) dustPositions.push([i, j]);
    }
  }
  // 미세먼지를 확산시킨다.
  dustPositions.forEach((pos) =>
    spreadDust(pos[0], pos[1], save, upCleanerX, downCleanerX)
  );
};

// 3. 미세먼지를 확산시킨다.
const spreadDust = (x, y, save, upCleanerX, downCleanerX) => {
  let count = 0;
  let value;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  for (let k = 0; k < 4; k++) {
    // 현재 칸에 인접한 4방향을 탐색하며 미세먼지를 확산시킨다.
    const nx = x + dx[k];
    const ny = y + dy[k];

    // 범위를 벗어나거나, 공기청정기의 위치와 같다면 건너뛴다.
    if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue;
    if ((nx === upCleanerX && ny === 0) || (nx === downCleanerX && ny === 0))
      continue;
    value = Math.floor(room[x][y] / 5); // 미세먼지 값을 확산시킨다.
    save[nx][ny] += value;
    count += 1;
  }
  // 확산되는 양에 맞게 남은 미세먼지 양을 갱신한다.
  if (value || value === 0) save[x][y] += room[x][y] - count * value;
  else save[x][y] += room[x][y];
};

// 4. room의 값들을 미세먼지를 확산시킨 save 배열의 값들로 갱신한다.
const updateRoom = (save) => {
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      room[i][j] = save[i][j];
    }
  }
};

// 5. 위쪽 공기청정기를 작동시킨다.
const cleanUp = (cleanerX) => {
  for (let i = cleanerX - 1; i >= 0; i--) {
    // 사각형의 왼쪽 변(위 => 아래 방향) 이동
    if (i + 1 !== cleanerX) room[i + 1][0] = room[i][0];
  }
  for (let i = 1; i < C; i++) {
    // 사각형의 윗변(오른쪽 => 왼쪽 방향) 이동
    room[0][i - 1] = room[0][i];
  }
  for (let i = 1; i <= cleanerX; i++) {
    // 사각형의 오른쪽 변(아래 => 위 방향) 이동
    room[i - 1][C - 1] = room[i][C - 1];
  }
  for (let i = C - 2; i >= 0; i--) {
    // 사각형의 밑변(왼쪽 => 오른쪽 방향) 이동
    room[cleanerX][i + 1] = room[cleanerX][i];
  }
};

// 6. 아래쪽 공기청정기를 작동시킨다.
const cleanDown = (cleanerX) => {
  for (let i = cleanerX + 1; i < R; i++) {
    if (i - 1 !== cleanerX) room[i - 1][0] = room[i][0];
  }
  for (let i = 1; i < C; i++) {
    room[R - 1][i - 1] = room[R - 1][i];
  }
  for (let i = R - 2; i >= cleanerX; i--) {
    room[i + 1][C - 1] = room[i][C - 1];
  }
  for (let i = C - 2; i >= 0; i--) {
    room[cleanerX][i + 1] = room[cleanerX][i];
  }
};

// 7. 남아있는 미세먼지의 양을 계산한다.
const accumulateDust = () => {
  let answer = 0;
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (room[i][j] > 0) answer += room[i][j];
    }
  }
  return answer;
};

const solution = (R, C, T, room) => {
  const { upCleanerX, downCleanerX } = cleanerPositionCheck();
  for (let i = 0; i < T; i++) {
    // 1초마다 아래의 로직을 반복한다.
    const save = Array.from({ length: R }, () => Array(C).fill(0)); // save 배열을 생성과 동시에 0으로 초기화한다.
    searchFinedust(save, upCleanerX, downCleanerX); // 미세먼지가 있는 칸을 찾는다.
    updateRoom(save); // 미세먼지를 퍼트린 값으로 room 배열을 업데이트한다.
    cleanUp(upCleanerX); // 위쪽 공기청정기가 작동된다.
    cleanDown(downCleanerX);
  }
  return accumulateDust();
};

console.log(solution(R, C, T, room));
