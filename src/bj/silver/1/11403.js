"use strict";

/**
 * 처음에 푼 풀이
 * => 1인 부분을 찾아서 [i][j] = 1, [j][i] = 1을 해주었으나 이렇게 푸는 게 아니었다.
 */
const [n, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (n, inputs) => {
  const graph = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    let values = inputs[i].split(" ").map(Number);
    for (let j = 0; j < n; j++) {
      if (values[j] === 1) {
        graph[i][j] = 1;
        graph[j][i] = 1;
      }
    }
  }
  console.log(graph);
};

console.log(solution(+n, inputs));

/**
 * 다시 푼 풀이
 * - 플로이드 워셜문제!
 *  - 경로가 존재하는지 확인하는 플로이드 워셜 문제이므로,
 *  - 3중 for문을 통해 i~j까지의 경로가 존재하는지 확인하는 방식으로 풀어나가면 된다.
 */
const [n, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (n, inputs) => {
  const graph = inputs.map((v) => v.split(" ").map(Number));

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (graph[i][k] && graph[k][j]) graph[i][j] = 1;
      }
    }
  }

  // 출력
  for (let i = 0; i < n; i++) {
    console.log(graph[i].join(" "));
  }
};

solution(+n, inputs);
