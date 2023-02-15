"use strict";

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const MapInfo = input[0].split(" ");
const r = parseInt(MapInfo[0]);
const c = parseInt(MapInfo[1]);
const goalTime = parseInt(MapInfo[2]);

const Map = input
  .slice(1, input.length)
  .map((e) => e.split(" ").map((n) => parseInt(n)));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const cleanerChecking = () => {
  const cleaner = [];
  for (let i = 0; i < r; i++) {
    if (Map[i][0] === -1) {
      cleaner.push(i);
    }
  }
  return { upperGoalX: cleaner[0], lowerGoalX: cleaner[1] };
};

const check = (x, y, save, upperGoalX, lowerGoalX) => {
  let cnt = 0;
  let value;
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx < 0 || ny < 0 || nx >= r || ny >= c) {
      continue;
    }
    if ((nx === upperGoalX && ny === 0) || (nx === lowerGoalX && ny === 0)) {
      continue;
    }
    value = Math.floor(Map[x][y] / 5);
    save[nx][ny] += value;
    cnt += 1;
  }
  if (value || value === 0) {
    save[x][y] += Map[x][y] - cnt * value;
  } else {
    save[x][y] += Map[x][y];
  }
};

const cleanUp = (goalX) => {
  for (let i = goalX - 1; i >= 0; i--) {
    if (i + 1 !== goalX) {
      Map[i + 1][0] = Map[i][0];
    }
  }
  for (let i = 1; i < c; i++) {
    Map[0][i - 1] = Map[0][i];
  }
  for (let i = 1; i <= goalX; i++) {
    Map[i - 1][c - 1] = Map[i][c - 1];
  }
  for (let i = c - 2; i >= 0; i--) {
    Map[goalX][i + 1] = Map[goalX][i];
  }
};

const cleanDown = (goalX) => {
  for (let i = goalX + 1; i < r; i++) {
    if (i - 1 !== goalX) {
      Map[i - 1][0] = Map[i][0];
    }
  }
  for (let i = 1; i < c; i++) {
    Map[r - 1][i - 1] = Map[r - 1][i];
  }
  for (let i = r - 2; i >= goalX; i--) {
    Map[i + 1][c - 1] = Map[i][c - 1];
  }
  for (let i = c - 2; i >= 0; i--) {
    Map[goalX][i + 1] = Map[goalX][i];
  }
};

const mapChecking = (save, upperGoalX, lowerGoalX) => {
  const searchArr = [];
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (Map[i][j] > 0) {
        searchArr.push([i, j]);
      }
    }
  }
  searchArr.forEach((point) =>
    check(point[0], point[1], save, upperGoalX, lowerGoalX)
  );
};

const setMap = (save) => {
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      Map[i][j] = save[i][j];
    }
  }
};

const MapCountingCheck = () => {
  let cnt = 0;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (Map[i][j] > 0) {
        cnt += Map[i][j];
      }
    }
  }
  return cnt;
};

const solution = () => {
  const { upperGoalX, lowerGoalX } = cleanerChecking();
  for (let i = 0; i < goalTime; i++) {
    const save = Array.from(Array(r), () => new Array(c).fill(0));
    mapChecking(save, upperGoalX, lowerGoalX);
    setMap(save);
    cleanUp(upperGoalX);
    cleanDown(lowerGoalX);
  }
  console.log(MapCountingCheck());
};
solution();
