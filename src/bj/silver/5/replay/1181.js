"use strict";

let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(inputs) {
  const n = inputs.shift() * 1;
  // 길이로 비교하고, 만약 길이가 같으면 localeCompare을 이용해 사전순으로 정렬한다.
  // localeCompare()은 a->b 이면 -1, b->a 이면 +1, a=b이면 0을 반환한다.
  const sortArr = inputs.sort(
    (a, b) => a.length - b.length || a.localeCompare(b)
  );
  const answer = new Set(sortArr);
  console.log(Array.from(answer).join("\n"));
}
solution(inputs);
