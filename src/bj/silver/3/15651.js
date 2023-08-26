"use strict";

/**
 * [백트래킹 문제]
 * - 중복을 허용하므로 visited는 필요없고, 반복문은 1부터 계속 돌아야한다. 그래야 1 1, 2 2, 3 3, 4 4가 나올 수 있다.
 */

const [N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const solution = (N, M) => {
  let answer = [];
  //   const visited = Array.from({ length: N + 1 }, () => false);

  const dfs = (i, arr) => {
    if (arr.length === M) {
      answer.push(arr.join(" "));
      return;
    } else {
      for (let k = 1; k <= N; k++) {
        arr.push(k);
        // visited[k] = true;
        dfs(k, arr);
        // visited[k] = false;
        arr.pop();
      }
    }
  };
  dfs(1, []);

  return answer.join("\n");
};

console.log(solution(N, M));
