"use strict";

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const seat = input.map((el) => el.split("")).flat(); // 2차원을 1차원 배열로 만들어준다.

const visited = Array.from(Array(5), () => new Array(5).fill(0));
const seated = Array.from(Array(5), () => new Array(5).fill(0));
const moveX = [1, 0, -1, 0];
const moveY = [0, 1, 0, -1];

let startY;
let startX;

const queue = [];

const calcY = (num) => Math.floor(num / 5);
const calcX = (num) => num % 5;
const getYCnt = (num) => (seat[num] === "Y" ? 1 : 0);

const checkConnectCnt = (y, x) => {
  let ret = 1;

  visited[y][x] = 1;
  queue.push([y, x]);

  for (let dir = 0; dir < 4; dir++) {
    let ny = y + moveY[dir];
    let nx = x + moveX[dir];

    if (ny < 0 || ny >= 5 || nx < 0 || nx >= 5) continue;

    if (!seated[ny][nx] || visited[ny][nx]) continue;

    ret += checkConnectCnt(ny, nx);
  }

  return ret;
};

const solve = (depth, start, yCount) => {
  if (yCount >= 4) return 0;

  if (depth === 7) {
    let ret = checkConnectCnt(startY, startX) === 7 ? 1 : 0;

    while (queue.length) {
      let [y, x] = queue[0];

      queue.shift();
      visited[y][x] = 0;
    }

    return ret;
  }

  let ret = 0;

  for (let i = start; i < 25; i++) {
    const y = calcY(i);
    const x = calcX(i);

    seated[y][x] = 1;
    ret += solve(depth + 1, i + 1, yCount + getYCnt(i));
    seated[y][x] = 0;
  }

  return ret;
};

let ans = 0;

for (let i = 0; i <= 18; i++) {
  startY = calcY(i);
  startX = calcX(i);

  seated[startY][startX] = 1;
  ans += solve(1, i + 1, getYCnt(i));
  seated[startY][startX] = 0;
}

console.log(ans);
