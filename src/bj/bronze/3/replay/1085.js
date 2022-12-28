"use strict";

/**
 * 1. 처음에 푼 풀이
 * 0~w, 0~h의 중간 값을 기준으로 잡고 x, y가 어느 쪽에 가까운지 찾아낸 후 연산하기
 */
let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

function solution(inputs) {
  const [x, y, w, h] = inputs;
  let xMin = w;
  let yMin = h;

  // 가로의 최소 거리 찾기
  if (w / 2 >= x) xMin = x;
  else xMin = w - x;

  // 세로의 최소 거리 찾기
  if (h / 2 >= y) yMin = y;
  else yMin = h - y;

  return Math.min(xMin, yMin);
}
console.log(solution(inputs));

/**
 * 2. 두번째로 푼 풀이
 * 위의 풀이에서 어차피 0과 가까우면 x, y가 정답이 되는 걸 알 수 있음
 * 그렇다면 그냥 [x, y, w-x, h-y]를 놓고 비교하면 됨
 */
function solution(inputs) {
  const [x, y, w, h] = inputs;
  const array = [x, w - x, y, h - y];
  return Math.min(...array);
}
console.log(solution(inputs));
