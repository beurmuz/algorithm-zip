"use strict";

/**
 * [백트래킹]
 * - 중복이 없어야하고, 오름차순이어야한다.
 * - 중복 여부는 visited로 체크해준다.
 */

const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs) => {
  inputs.pop();
  const answer = [];

  for (let input of inputs) {
    let [N, ...arr] = input.split(" ").map((v) => +v);
    let visited = Array.from({ length: N }, () => false);

    const dfs = (startIdx, tmp) => {
      if (tmp.length === 6) {
        answer.push(tmp.join(" "));
        return;
      } else {
        for (let i = startIdx; i < N; i++) {
          if (!visited[i]) {
            visited[i] = true;
            tmp.push(arr[i]);
            dfs(i, tmp);
            visited[i] = false;
            tmp.pop();
          }
        }
      }
    };

    dfs(0, []);
    answer.push("");
  }
  answer.pop();
  return answer.join("\n");
};

console.log(solution(inputs));
