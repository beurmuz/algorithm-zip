"use strict";

/**
 * [dfs + hashmap 문제]
 * - string.slice()의 시간 복잡도: O(1) => slice 사용을 권장
 * - string.substring()의 시간 복잡도: O(1)
 * - 풀다가 모르겠어서 js 풀이를 참고했는데, 1/16개 맞았다.. python 풀이는 16/16개 맞았고..
 * - 대각선 방향까지 탐색하는 문제
 */

const [input, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input, arr) => {
  const [N, M, K] = input.split(" ").map((v) => +v);
  const grid = arr.slice(0, N).map((line) => line.trim().split(""));
  const words = arr.slice(N).map((line) => line.trim());

  let dx = [0, 1, 1, 1, 0, -1, -1, -1]; // 북쪽부터 시계방향 순서
  let dy = [-1, -1, 0, 1, 1, 1, 0, -1];
  let canGoMap = new Map();

  const dfs = (row, col, word) => {
    // 값을 넘길 때 (y, x)로 넘겨야한다. 이게 헷갈리니 (row, col)로 넘기자.
    canGoMap.set(word, canGoMap.get(word) + 1 || 1);

    if (word.length > 1) return; // 1 <= 신이 좋아하는 문자열의 길이 <= 5
    else {
      for (let i = 0; i < 8; i++) {
        let newRow = (((row + dy[i]) % N) + N) % N; // 환형
        let newCol = (((col + dx[i]) % M) + M) % M; // 환형
        dfs(newRow, newCol, word + grid[newRow][newCol]);
      }
    }
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      dfs(i, j, grid[i][j]);
    }
  }

  let answer = "";
  for (let i = 0; i < K; i++) {
    answer += (canGoMap.get(words[i]) || 0) + "\n"; // words[i]에 해당하는 값이 있으면 그 값을 출력하고, 없으면 0을 출력한다.
  }

  return answer.slice(0, -1); // 공백이 하나 출력되므로 -1까지 출력한다.
};

console.log(solution(input, arr));
