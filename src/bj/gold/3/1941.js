"use strict";

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = 5;
const seat = input.map((line) => line.split("")).flat(); // 2 -> 1차원 배열로 만들기
const visited = Array.from({ length: N }, () => Array(N).fill(0));
const seated = Array.from({ length: N }, () => Array(N).fill(0));
const dx = [1, 0, -1, 0]; // 남, 동, 북, 서
const dy = [0, 1, 0, -1];

let startY;
let startX;

const queue = [];

const calcY = (num) => Math.floor(num / 5); // Y
const calcX = (num) => num % 5; // X
const getYCnt = (num) => (seat[num] === "Y" ? 1 : 0); // 'Y'의 개수를 세는 함수

const checkConnectCnt = (y, x) => {
  let ret = 1;

  visited[y][x] = 1;
  queue.push([y, x]);

  // 4방향 탐색
  for (let dir = 0; dir < 4; dir++) {
    let ny = y + dy[dir];
    let nx = x + dx[dir];

    if (ny < 0 || ny >= 5 || nx < 0 || nx >= 5) continue; // 범위를 넘으면 건너뛴다.

    if (!seated[ny][nx] || visited[ny][nx]) continue; // 아직 앉지않았거나, 이미 방문했다면 건너뛴다.

    ret += checkConnectCnt(ny, nx);
  }

  return ret;
};

const solve = (depth, start, yCount) => {
  // 깊이, 시작점, 임도연파의 수
  if (yCount >= 4) return 0; //임도연파가 4명 이상이라는 것은, 이다솜 파가 4명 미만인 것이므로 정답이 될 수 없다.

  if (depth === 7) {
    // 깊이가 7일때
    let ret = checkConnectCnt(startY, startX) === 7 ? 1 : 0; // 연결된 칸의 개수가 7개이면 1을, 아니면 0을 저장한다.

    while (queue.length) {
      // queue가 있는 동안
      let [y, x] = queue[0];

      queue.shift();
      visited[y][x] = 0; // 방문을 해제한다.
    }

    return ret;
  }

  let ret = 0;

  for (let i = start; i < 25; i++) {
    // 총 25번 반복한다.
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
  startY = calcY(i); // 시작 row
  startX = calcX(i); // 시작 col

  seated[startY][startX] = 1; // 앉음 표시를 하고
  ans += solve(1, i + 1, getYCnt(i));
  seated[startY][startX] = 0; // 백트래킹
}

console.log(ans);
