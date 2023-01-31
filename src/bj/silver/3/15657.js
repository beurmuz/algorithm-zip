"use strict";

/**
 * 중복 조합문제!
 * - (6)번 문제와 다르게 반복문의 초기값을 매개변수로 전달해주는 방법을 이용하면 된다.
 */
const [values, inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (values, inputs) => {
  const [n, m] = values.split(" ").map(Number);
  const nums = inputs
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b); // 오름차순 정렬
  let tmp = Array.from({ length: m }, () => 0);
  let answer = "";

  const dfs = (index, depth) => {
    // depth는 숫자를 뽑은 개수를 의미한다.
    if (depth === m) {
      answer += `${tmp.join(" ")}\n`;
      return;
    } else {
      for (let i = index; i < n; i++) {
        tmp[depth] = nums[i];
        dfs(i, depth + 1);
      }
    }
  };
  dfs(0, 0);
  return answer;
};

console.log(solution(values, inputs));
