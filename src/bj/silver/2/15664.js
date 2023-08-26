"use strict";

/**
 * [백트래킹]
 */

"use strict";

const [N, M, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (N, M, arr) => {
  let answer = new Set();
  arr = arr.sort((a, b) => a - b);
  const visited = Array.from({ length: N }, () => false);

  const dfs = (startIdx, tmp) => {
    if (tmp.length === M) {
      answer.add(tmp.join(" "));
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

  let answerArr = [...answer]; // set으로 중복을 제거한 뒤 배열로 만들어준다.

  return answerArr.join("\n");
};

console.log(solution(N, M, arr));
