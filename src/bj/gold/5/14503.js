"use strict";

const [input, pos, ...grid] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input, pos, grid) => {
  const [n, m] = input.split(" ").map((v) => +v);
  let [x, y, d] = pos.split(" ").map((v) => +v); // r, c, 방향d
  const board = grid.map((line) => line.split(" ").map((v) => +v)); // board[i][j] === 0: 청소되지 않은 빈 칸. 1: 벽, 2: 청소한 좌표
  const visited = Array.from({ length: n }, () => Array(m).fill(0));
  // 방향 관련. 0: 북쪽, 1: 동쪽, 2: 남쪽, 3: 서쪽
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let answer = 0;
  let count = 0;

  while (1) {
    // 1번으로 돌아가거나 후진하지 않고, 왼쪽 칸 검사가 연속으로 4번 이루어졌을 경우,
    // 바로 뒤가 벽이면 작동을 멈추고, 그렇지 않다면 한 칸 후진한다.
    if (count === 4) {
      let backX = x + dx[(d + 6) % 4];
      let backY = y + dy[(d + 6) % 4]; // 앞으로 가는 것의 반대이므로 +6을 한다.
      if (board[backX][backY] === 1) break;
      else {
        x = backX;
        y = backY;
        count = 0;
      }
    }

    // 현재 칸을 검사한다. 아직 방문하지 않았다면
    if (visited[x][y] === 0) {
      //   console.log(`(${x}, ${y}) 방문`);
      visited[x][y] = 1; // 방문 표시 후,
      board[x][y] = 2; // 해당 칸을 청소한다.
      answer++;
    }

    // 현재 칸을 기준으로 왼쪽 칸을 검사한다.
    // 바로 왼쪽이 아직 청소되지 않았다면, 왼쪽으로 회전 후 앞으로 한칸 가서 청소한다.
    // 청소를 했거나, 벽이면 또 왼쪽으로 회전한다.
    let leftX = x + dx[(d + 3) % 4]; // 북 => 서 (+3)
    let leftY = y + dy[(d + 3) % 4];

    if (board[leftX][leftY] === 0) {
      // 아직 청소하지 않았다면
      x = leftX; // 위치를 이동한다.
      y = leftY;
      count = 0;
    } else {
      // 이미 청소했거나, 벽(1)이라면
      count++; // 현재 칸을 기준으로 왼쪽으로 총 4번 돌 수 있다. 한번 돌았으니 +1
    }
    d = (d + 3) % 4; // 왼쪽으로 돌았응께
  }
  return answer;
};

console.log(solution(input, pos, grid));

// console.log(
//   solution("11 10", "7 4 0", [
//     "1 1 1 1 1 1 1 1 1 1",
//     "1 0 0 0 0 0 0 0 0 1",
//     "1 0 0 0 1 1 1 1 0 1",
//     "1 0 0 1 1 0 0 0 0 1",
//     "1 0 1 1 0 0 0 0 0 1",
//     "1 0 0 0 0 0 0 0 0 1",
//     "1 0 0 0 0 0 0 1 0 1",
//     "1 0 0 0 0 0 1 1 0 1",
//     "1 0 0 0 0 0 1 1 0 1",
//     "1 0 0 0 0 0 0 0 0 1",
//     "1 1 1 1 1 1 1 1 1 1",
//   ])
// );
