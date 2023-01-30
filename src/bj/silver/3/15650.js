"use strict";

/**
 * 백트래킹 문제
 * - 어떻게 풀지 문제 해결 아이디어는 잘 생각해냈지만, 반복문 구현을 제대로 못했다.
 * - 고른 수열이 오름차순이어야 한다는 말에서 '조합'문제임을 알 수 있었다.
 */
const [n, m] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

const solution = (n, m) => {
  const visited = Array.from({ length: n }, () => 0);
  const output = [];
  let answer = "";

  const dfs = (num, depth) => {
    //   console.log(`num: ${num}, depth: ${depth}`);
    if (depth === m) {
      answer += `${output.join(" ")}\n`;
      return;
    }

    for (let i = num; i < n; i++) {
      if (visited[i] === 1) continue;
      visited[i] = 1; // 방문 표시
      output.push(i + 1);
      dfs(i, depth + 1);
      output.pop();
      visited[i] = 0; // 방문 표시 해제
    }
  };
  dfs(0, 0);
  return answer;
};

console.log(solution(n, m));
