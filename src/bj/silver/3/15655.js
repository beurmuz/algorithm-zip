"use strict";

/**
 * [백트래킹 문제]
 * - 중복이 있어서는 안된다. => 방문 표시로 중복을 없애야함
 */

const [N, M, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (N, M, arr) => {
  let answer = [];
  arr = arr.sort((a, b) => a - b);
  const visited = Array.from({ length: N }, () => false);

  const dfs = (startIdx, tmp) => {
    if (tmp.length === M) {
      answer.push(tmp.join(" "));
      return;
    } else {
      for (let k = startIdx; k < N; k++) {
        if (!visited[k]) {
          tmp.push(arr[k]);
          visited[k] = true;
          dfs(k, tmp);
          visited[k] = false;
          tmp.pop();
        }
      }
    }
  };
  dfs(0, []);

  return answer.join("\n");
};

console.log(solution(N, M, arr));
