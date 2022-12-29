"use strict";

/**
 * DP로 풀어야겠다 싶었지만 제대로 못풀었다.
 */
let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let T = inputs.shift();

function solution(T, inputs) {
  for (let t = 0; t < T; t++) {
    const k = +inputs.shift();
    const n = +inputs.shift();

    // 각 방당 인원 수를 저장할 2차원 배열 생성
    const house = Array.from({ length: k + 1 }, () => Array(n + 1).fill(0));

    // 0층 배정하기
    for (let i = 1; i <= n; i++) {
      house[0][i] = i; // 0층 i호에는 i명이 산다.
    }

    // 1 ~ k층 (k층 호에는 k-1층 n호 + k층 n-1호만큼 산다.)
    for (let i = 1; i <= k; i++) {
      for (let j = 1; j <= n; j++) {
        house[i][j] = house[i - 1][j] + house[i][j - 1];
      }
    }
    // console.log(house);
    console.log(house[k][n]);
  }
}

solution(+T, inputs);
