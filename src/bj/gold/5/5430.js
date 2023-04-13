"use strict";

const [t, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

/**
 * 처음에 푼 풀이
 * - 우선 주어진 테케는 통과했다. 아마 다른 테케도 통과할 것이라고 생각한다.
 * - 다만 시간 초과가 발생했다.
 *      => 그럴 수밖에 없는게, slice, push, pop, shift.reverse 남발중..
 */
const solution = (t, input) => {
  let start = 0;
  const answer = "";
  for (let i = 0; i < t; i++) {
    let p = input[start].split(""); // 수행할 함수
    let n = +input[start + 1]; // 배열 속 수의 개수
    let arr = input[start + 2]; // 배열에 들어있는 정수
    let isReverse = false;
    arr = arr
      .slice(1, -1)
      .split(",")
      .map((v) => +v);

    if (p.length === 0 || p.length > n) {
      answer += "error\n";
      start += 3;
      continue;
    }

    for (let j = 0; j < p.length; j++) {
      if (p[j] === "R") {
        if (isReverse) isReverse = false;
        else isReverse = true;
      } else if (p[j] === "D") {
        if (isReverse) arr.pop();
        else arr.shift();
      }
    }
    if (isReverse) answer.push(`[${arr.reverse.join(",")}]`);
    else answer.push(`[${arr.join(",")}]`);
    start += 3;
  }
  return answer;
};

console.log(solution(t, input));

/**
 * 다른 풀이법
 * 모든 함수의 수행을 앞, 뒤가 가리키는 지점을 기억해두는 것으로 대체한다.
 */
const [T, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const output = [];

for (let i = 0; i < input.length; i += 3) {
  const p = input[i];
  const n = +input[i + 1];
  const arr = JSON.parse(input[i + 2]);
  let isReversed = false;
  let isError = false;
  let startIndex = 0;
  let endIndex = n - 1;

  for (const command of p) {
    if (command === "R") {
      isReversed = !isReversed;
    } else {
      if (startIndex > endIndex) {
        isError = true;
        break;
      }
      if (isReversed) {
        endIndex--; // 뒤집어져있으면 맨 뒤의 값을 1개 감소시킨다.
      } else {
        startIndex++; // 제대로 되어있으면 맨 앞의 값을 1 중가시킨다.
      }
    }
  }

  const outputArr = arr.slice(startIndex, endIndex + 1);
  output.push(
    isError
      ? "error"
      : JSON.stringify(isReversed ? outputArr.reverse() : outputArr)
  );
}

console.log(output.join("\n"));
