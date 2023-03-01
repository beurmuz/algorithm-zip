"use strict";

/**
 * 최대공약수를 찾아서 나눠준다.
 */
const [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);
const GCD = (a, b) => {
  let x, y, r;
  if (a > b) {
    x = a;
    y = b;
  } else {
    x = b;
    y = a;
  }
  while (y != 0) {
    r = x % y;
    x = y;
    y = r;
  }
  return x;
};
const solution = (n, input) => {
  let pivot = input[0];
  let answer = [];

  for (let i = 1; i < n; i++) {
    const gcd = GCD(pivot, input[i]);
    answer.push(`${pivot / gcd}/${input[i] / gcd}`);
  }
  return answer.join("\n");
};

console.log(solution(n, input));
