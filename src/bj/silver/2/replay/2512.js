"use strict";

/**
 * [이분탐색]
 * - 항상 정렬부터 하고 시작해야한다.
 * - lt, rt, 그리고 이 둘의 합의 중간값인 mid를 활용해서 lt와 rt 값을 바꿔나가면 된다.
 * - 보통 lt는 0, rt는 주어진 값들의 최댓값을 넣고 시작하면 된다.
 * - while문의 조건은 lt <= rt. lt가 rt보다 커지면 종료되도록 해주어야한다.
 */

const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = +inputs[0];
const requests = inputs[1].split(" ").map((v) => +v);
const M = +inputs[2];

const solution = (N, requests, M) => {
  let answer = 0;
  requests.sort((a, b) => a - b);

  let [lt, rt] = [0, requests[N - 1]]; // 최소, 최대

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2); // 중간값 구하기 => 중간값이 임시 상한가가 된다.
    let tempSum = 0;
    for (let price of requests) {
      if (price <= mid) tempSum += price;
      else tempSum += mid;
    }

    if (tempSum <= M) {
      // 현재 임시 상한가로 측정했을 때, 총합보다 작은 경우
      if (mid > answer) answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
};

console.log(solution(N, requests, M));
