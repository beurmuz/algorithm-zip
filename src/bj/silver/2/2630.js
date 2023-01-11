"use strict";

/**
 * S2 종이의 개수와 완전히 같은 문제.
 * 이 문제도 분할과 정복으로 풀면 된다!
 */
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = +input[0];

const solution = (n, input) => {
  const paper = input.slice(1).map((v) => v.split(" ").map((vv) => +vv));
  const answer = [0, 0]; // 0: 하얀색, 1: 파란색 개수 count

  const recursive = (n, x, y) => {
    // console.log(n, x, y)
    const num = paper[y][x]; // 현재 (x, y)에 있는 값을 num에 저장한다.
    let numCount = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (paper[y + j][x + i] === num) numCount++;
        else break; // num과 다른 숫자가 나오면 반복문을 빠져나온다.
      }
    }
    if (numCount === n * n) {
      // n*n의 칸의 개수와 numCount의 개수가 동일하면,
      answer[num]++;
    } else {
      n /= 2; // 여기서 분할 정복이 발생한다.
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
          recursive(n, x + i * n, y + j * n);
        }
      }
    }
  };
  recursive(n, 0, 0);
  console.log(answer.join("\n"));
};

solution(n, input);
