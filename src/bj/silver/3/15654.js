"use strict";

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
  let visited = Array.from({ length: n }, () => 0); // 방문 여부를 저장할 배열 선언.
  let tmp = Array.from({ length: m }, () => 0);
  let answer = "";

  const dfs = (depth) => {
    // depth는 숫자를 뽑은 개수를 의미한다.
    if (depth === m) {
      answer += `${tmp.join(" ")}\n`;
      return;
    } else {
      for (let i = 0; i < n; i++) {
        if (visited[i] === 1) continue; // 이미 방문했으면 건너뛴다.
        visited[i] = 1; // 방문 표시
        tmp[depth] = nums[i];
        dfs(depth + 1);
        visited[i] = 0;
      }
    }
  };
  dfs(0);
  return answer;
};

console.log(solution(values, inputs));
