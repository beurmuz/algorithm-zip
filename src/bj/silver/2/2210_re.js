"use strict";

// dfs이자 그래프이자 완전탐색 문제
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));
const answer = [];
const dir = [
  [1, 0],
  [-1, 0],
  [0, -1],
  [0, 1],
];

// 5x5 숫자판
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    dfs(i, j, "");
  }
}

function dfs(x, y, str) {
  if (str.length == 6) {
    // 6자리가 완성되면 answer 배열에 추가하기
    answer.push(str);
    return;
  } else {
    dir.forEach((v) => {
      const [nx, ny] = [v[0] + x, v[1] + y];
      if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
        // 범위를 넘지 않은 경우
        dfs(nx, ny, str + input[nx][ny]); // 현재 값을 문자열에 추가해서 넘겨줌
      }
    });
  }
}

console.log([...new Set(answer)].length); // 서로 다른 여섯자리 수들을 구하는 것이므로 중복을 제거하고 출력하기
