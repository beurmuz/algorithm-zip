"use strict";

const [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (N, input) => {
  const visited = Array.from({ length: N + 1 }, () => 0);
  const answer = [];
  let front = Array.from({ length: N }, (_, idx) => ++idx).join("");
  let target = input.join("");

  // 1. front와 target의 값이 같으면 -1을 출력한다.
  if (front === target) return -1;

  // 2. target 앞에 오는 수를 찾는다.
  const permutation = (point, tmp) => {
    if (tmp.length === N) {
      if (+tmp.join("") === target) return;
      else {
        answer.push(tmp.join(""));
      }
    } else {
      for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
          visited[i] = 1;
          tmp.push(i);
          permutation(i, tmp);
          visited[i] = 0;
          tmp.pop();
        }
      }
    }
  };
  permutation(1, []);
  return answer[answer.length - 1];
};

console.log(solution(N, input));
