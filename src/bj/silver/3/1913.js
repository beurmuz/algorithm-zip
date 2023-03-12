"use strict";

/**
 * 달팽이 문제
 * - (1, 1)부터 시작해서 반시계 방향으로 배열을 만들어 간다.
 * - 만들다가 해당 숫자가 나오면 좌표를 출력한다.
 * - 배열이 완성되면 배열, 좌표를 출력한다.
 */
const [N, findNum] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((v) => +v);

const solution = (N, findNum) => {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  let findLocation = { X: 0, Y: 2 };

  const makeTable = (table, t) => {
    let count = t * t;
    let [X, Y] = [0, 0];
    let nowDir = 0;
    let moveCount = t;
    while (true) {
      if (nowDir === 1) moveCount--;
      if (nowDir === 3) moveCount--;

      for (let i = 0; i < moveCount; ++i) {
        X = X + dx[nowDir];
        Y = Y + dy[nowDir];
        table[X][Y] = count--;
        if (table[X][Y] === findNum) findLocation = { X, Y };
      }

      if (count === 0) return;
      nowDir = (nowDir + 1) % 4;
    }
  };
  let table = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
  makeTable(table, N);
  for (let y = 1; y < N + 1; ++y) {
    let string = "";
    for (let x = 0; x < N; ++x) {
      if (x === N - 1) {
        string += table[x][y];
        break;
      }
      string += table[x][y] + " ";
    }
    console.log(string);
  }
  console.log(findLocation.Y, findLocation.X + 1);
};

solution(N, findNum);
