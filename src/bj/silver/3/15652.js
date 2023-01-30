"use strict";

/**
 * 백트래킹 & 중복 조합 문제
 * - ✅ 중복 조합 문제는 방문 여부를 체크할 필요가 없다.
 */
const [n, m] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

const solution = (n, m) => {
  const output = [];
  let answer = "";

  const dfs = (num, depth) => {
    //   console.log(`num: ${num}, depth: ${depth}`);
    if (depth === m) {
      answer += `${output.join(" ")}\n`;
      return;
    }

    for (let i = num; i < n; i++) {
      output.push(i + 1);
      dfs(i, depth + 1);
      output.pop();
    }
  };
  dfs(0, 0);
  return answer;
};

console.log(solution(n, m));
