"use strict";

/**
 * (9) 문제에서 방문 여부를 없앤 뒤, index값을 매개변수로 넘기며 현재 index에 해당하는 값부터 반복문을 돌게끔 하면 된다.
 */
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
  let tmp = Array.from({ length: m }, () => 0);
  let answer = [];

  const dfs = (index, depth) => {
    // depth는 숫자를 뽑은 개수를 의미한다.
    if (depth === m) {
      answer.push(tmp.join(" "));
      return;
    } else {
      for (let i = index; i < n; i++) {
        tmp[depth] = nums[i];
        dfs(i, depth + 1);
      }
    }
  };
  dfs(0, 0);
  return [...new Set(answer)].join("\n"); // set으로 중복 제거 후 배열로 만들어 '\n'을 이용해 join한다.
};

console.log(solution(values, inputs));
