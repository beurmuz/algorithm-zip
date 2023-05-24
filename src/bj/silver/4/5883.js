"use strict";

/**
 * [구현, 프루트포스 알고리즘]
 */
const [n, ...lines] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

const solution = (n, lines) => {
  // Set으로 중복을 제거한 뒤, 배열형태로 바꾼다.
  const lineSet = [...new Set(lines)];
  let answer = 0;

  lineSet.forEach((jump) => {
    let count = 1; // 구간의 길이를 count해야하므로 1로 초기화한다.
    let before = lines[0];

    for (let i = 1; i < lines.length; i++) {
      // 이전 값이 jump(건너 뛰어야 할 값)이고, lines[i]값이 before랑 다르면, before를 새롭게 갱신한다.
      if (before === jump && before !== lines[i]) {
        before = lines[i];
        count = 1; // 구간을 다시 1부터 카운팅해야한다.
        continue;
      }

      if (jump === lines[i]) continue; // 현재 값이 jump와 같다면 건너뛴다.
      if (before === jump) continue; // 이전 값이 jump랑 같다면 건너뛴다.

      // before와 값 비교하기
      if (lines[i] === before)
        count++; // before와 현재 값이 같다면 구간을 1 증가한다.
      else {
        before = lines[i];
        count = 1; // 구간을 다시 1부터 카운팅해야한다.
      }
      answer = Math.max(count, answer); // 최댓값으로 answer를 갱신한다.
    }
  });
  return answer;
};

console.log(solution(n, lines));
