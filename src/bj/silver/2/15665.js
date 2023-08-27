"use strict";

/**
 * [백트래킹]
 */

const [N, M, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (N, M, arr) => {
  let answer = new Set();
  arr = arr.sort((a, b) => a - b);

  const dfs = (startIdx, tmp) => {
    if (tmp.length === M) {
      answer.add(tmp.join(" "));
      return;
    } else {
      for (let k = 0; k < N; k++) {
        tmp.push(arr[k]);
        dfs(k, tmp);
        tmp.pop();
      }
    }
  };
  dfs(0, []);

  let answerSet = [...answer];

  return answerSet.join("\n");
};

console.log(solution(N, M, arr));
