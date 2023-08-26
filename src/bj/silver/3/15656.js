"use strict";

/**
 * [백트래킹]
 * - 중복을 허용하므로 visited는 없어도 되고, 같은 수를 M번 사용해도 되므로 반복문도 처음부터 계속 돌면 된다.
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

  const dfs = (tmp) => {
    if (tmp.length === M) {
      answer.push(tmp.join(" "));
      return;
    } else {
      for (let k = 0; k < N; k++) {
        tmp.push(arr[k]);
        dfs(tmp);
        tmp.pop();
      }
    }
  };
  dfs([]);

  return answer.join("\n");
};

console.log(solution(N, M, arr));
