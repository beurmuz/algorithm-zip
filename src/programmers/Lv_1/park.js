"use strict";

function solution(park, routes) {
  let [row, col] = [park.length, park[0].length];
  let directionMap = new Map([
    ["N", [-1, 0]],
    ["S", [1, 0]],
    ["W", [0, -1]],
    ["E", [0, 1]],
  ]);
  park = park.map((line) => line.split(""));

  function checked(x, y, dir, count) {
    let [dx, dy] = directionMap.get(dir);
    let flag = true;

    for (let i = 1; i <= count; i++) {
      let [nx, ny] = [x + dx * i, y + dy * i];
      if (nx < 0 || nx >= row || ny < 0 || ny >= col || park[nx][ny] == "X") {
        flag = false;
        break;
      }
    }
    if (!flag) return [x, y];
    return [x + dx * count, y + dy * count];
  }

  let [x, y] = [0, 0];
  let flag = true;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (park[i][j] === "S") {
        [x, y] = [i, j];
        flag = false;
        break;
      }
    }
    if (!flag) break;
  }

  for (let i = 0; i < routes.length; i++) {
    let [dir, count] = routes[i].split(" ");
    count = +count;
    [x, y] = checked(x, y, dir, count);
  }
  return [x, y];
}
