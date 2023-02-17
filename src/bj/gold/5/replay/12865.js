"use strict";

const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs) => {
  // n: 물품의 개수
  // k: 버틸 수 있는 무게
  // w: 물건의 무게
  // v: 물건의 가치
  const [n, k] = inputs[0].split(" ").map(Number);
  inputs[0] = "0 0"; // 물건의 번호를 맞추기 위해 맨 앞에 의미없는 0을 넣는다.
  const items = inputs.map((v) => v.split(" ").map(Number));

  // maxValueSum[n][k]: n번까지의 물건들 중 몇개를 골라 그 무게의 합이 k이하인 경우들을 찾는다.
  const maxValueSum = Array.from({ length: k + 1 }, () => Array(k + 1).fill(0));

  for (let itemNum = 1; itemNum <= n; itemNum++) {
    const [weight, value] = items[itemNum];
    for (let kk = 0; kk <= k; kk++) {
      // 물건의 무게가 kk보다 큰 경우
      if (kk < weight) {
        maxValueSum[itemNum][kk] = maxValueSum[itemNum - 1][kk];
      } else {
        maxValueSum[itemNum][kk] = Math.max(
          maxValueSum[itemNum - 1][kk],
          maxValueSum[itemNum - 1][kk - weight] + value
        );
      }
    }
  }
  return maxValueSum[n][k];
};

console.log(solution(inputs));
