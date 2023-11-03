"use strict";

/**
 * [DFS, 백트래킹 문제]
 * - 반드시 모음은 1개 이상, 자음은 2개 이상이 포함되어 있어야하므로, password가 L자리가 되면 for문을 돌면서 모음과 자음의 개수를 카운팅해서 answer에 추가해야한다.
 */

const [inputs, ...alphabet] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs, alphabet) => {
  const [L, C] = inputs.split(" ").map((v) => +v);
  const arr = alphabet[0].split(" ").sort();
  const aeiou = new Set(["a", "e", "i", "o", "u"]);
  let answer = [];

  const dfs = (startIdx, password) => {
    if (password.length === L) {
      let cnt = 0;
      for (let j = 0; j < L; j++) {
        if (aeiou.has(password[j])) cnt++;
      }
      if (cnt >= 1 && L - cnt >= 2) answer.push(password.join(""));
    } else {
      for (let i = startIdx; i < C; i++) {
        password.push(arr[i]);
        dfs(i + 1, password);
        password.pop(arr[i]); // 백트래킹
      }
    }
  };
  dfs(0, []);
  return answer.join("\n");
};

console.log(solution(inputs, alphabet));
