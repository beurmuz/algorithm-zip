/**
 * [완전탐색]
 */

function solution(brown, yellow) {
  let size = brown + yellow;
  let answer = calculate(size).filter(
    (len) => (len[0] + len[1]) * 2 - 4 === brown
  )[0];
  // (가로+세로) * 2 - 4를 한 값이 brown이 나오면 정답이된다.
  return answer;
}

function calculate(size) {
  let result = [];
  for (let i = 1; i <= Math.sqrt(size); i++) {
    if (size % i === 0) result.push([size / i, i]);
  }
  return result;
}
