"use strict";

/**
 * [백트래킹 문제]
 * - 특정 계란을 깼다 말았다를 백트래킹으로 구현해야한다.
 * - 일렬로 놓여있는 계란에 대해 왼쪽부터 차례로 들어서 한 번씩만 다른 계란을 쳐 최대한 많은 계란을 깨는 문제
 */

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  const N = Number(input.shift());
  const eggs = input.map((string) => string.split(" ").map(Number));
  let answer = 0;

  const dfs = (nowIndex, cnt) => {
    if (nowIndex == N) {
      // 끝까지 탐색했다면
      answer = Math.max(answer, cnt);
      return;
    }

    if (eggs[nowIndex][0] <= 0 || cnt === N - 1) {
      // 현재 계란이 깨졌거나, 깨진 개수가 N-1개 일때
      dfs(nowIndex + 1, cnt);
      return;
    }

    for (let nextIndex = 0; nextIndex < N; nextIndex++) {
      if (nextIndex == nowIndex || eggs[nextIndex][0] <= 0) continue; // 같은 계란을 가리키거나, 비교하는 계란이 깨진 경우는 건너뛴다.
      eggs[nextIndex][0] -= eggs[nowIndex][1];
      eggs[nowIndex][0] -= eggs[nextIndex][1];
      dfs(
        nowIndex + 1,
        cnt + Number(eggs[nowIndex][0] <= 0) + Number(eggs[nextIndex][0] <= 0)
      ); // 기존의 깨진 갯수에 현재 깨진 계란 수를 세서 더한다.
      eggs[nextIndex][0] += eggs[nowIndex][1];
      eggs[nowIndex][0] += eggs[nextIndex][1];
    }
  };
  dfs(0, 0);
  return answer;
};

console.log(solution(input));
