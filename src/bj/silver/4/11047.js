"use strict";

const [N, K, ...values] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (N, K, values) => {
  let k = K,
    v,
    q,
    result = 0;
  for (let i = N - 1; i >= 0; i--) {
    v = values[i];
    q = Math.floor(k / v);
    if (q === 0) {
      continue;
    }
    result += q;
    k %= v;
    if (k === 0) {
      break;
    }
  }
  return result;
};

console.log(solution(N, K, values));
