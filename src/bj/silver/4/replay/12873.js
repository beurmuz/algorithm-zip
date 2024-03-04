"use strict";
/**
 * [splice, 원형큐 같지만 그냥 반복문]
 */

const n = require("fs").readFileSync("/dev/stdin").toString().trim();

const solution = (n) => {
  // 1~N까지 참가자에게 티셔츠 나눠주기
  const arr = Array.from({ length: n }, (_, idx) => ++idx);
  let start = 0; // 시작 위치

  // t-1단계까지 진행하면 1개가 남는다.
  for (let t = 1; t < n; t++) {
    // t단계에서 탈락할 참가자의 위치를 찾는다.
    let idx = t ** 3 % arr.length;
    // 시작점(start)에서 idx만큼 더한 후, index는 0부터 시작이니 1을 빼주고, 이 값을 남은 참가자 수로 나누어 나머지를 구한다.
    idx = (start + idx - 1) % arr.length;

    // 만약 음수가 나온 경우, arr.length만큼 더해준다.
    if (idx < 0) idx += arr.length;
    // 현재 위치의 참가자 1명을 탈락시킨다.
    arr.splice(idx, 1);
    // 다음 단계는 현재 단계에서 탈락된 사람의 위치에서부터 시작된다.
    start = idx;
  }
  return arr[0];
};

console.log(solution(+n));
