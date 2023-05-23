"use strict";

/**
 * [정렬 문제]
 * 정렬해야하는 건 알겠는데, 문제 이해를 못해서 결국 풀이를 찾아봤다.
 *
 * 서류 순서로 정렬 하면 서류가 1등인 지원자는 무조건 합격이며, 이 지원자의 면접 등수를 기준으로 비교하면 된다.
 * 즉 서류에서 2등한 지원자는 1등한 지원자의 면접 등수보다 높아야 합격하는 것이다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs) => {
  const t = +inputs.shift();
  const result = [];

  let index = 0;
  for (let i = 0; i < t; i++) {
    // 현재 테스트케이스에 대한 값들을 정리한다.
    const n = +inputs[index++];
    const applicants = inputs
      .slice(index, index + n)
      .map((v) => v.split(" ").map((vv) => +vv))
      .sort((a, b) => a[0] - b[0]);

    // 지원자들의 순위를 비교하여 합격자 수를 센다.
    let minScore = applicants[0][1];
    let count = 1;
    for (let k = 1; k < applicants.length; k++) {
      if (minScore > applicants[k][1]) {
        // 현재 k지원자의 면접 순위가 기준 면접자의 순위보다 작다면 (= 더 높은 점수를 받았다면)
        count += 1; // 합격자가 된다.
        minScore = applicants[k][1]; // 갱신해준다.
      }
    }
    result.push(count);
    index += n;
  }
  return result.join("\n");
};

console.log(solution(inputs));
