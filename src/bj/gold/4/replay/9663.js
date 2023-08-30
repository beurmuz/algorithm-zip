"use strict";

/**
 * [백트래킹 문제]
 * - 모든 퀸이 같은 행, 열, 대각선에 위치해서는 안된다.
 */

const N = require("fs").readFileSync("/dev/stdin").toString().trim();

const solution = (N) => {
  let answer = 0;
  let row = Array.from({ length: N }, () => 0);

  const isCheck = (L) => {
    for (let i = 0; i < L; i++) {
      // 같은 컬럼에 놓여있거나, 대각선에 위치하면
      if (row[i] === row[L] || L - i === Math.abs(row[L] - row[i]))
        return false;
    }
    return true;
  };

  const dfs = (L) => {
    if (L === N) {
      // console.log(row); // Queen을 놓을 수 있는 지점 출력
      answer++;
    } else {
      for (let i = 0; i < N; i++) {
        row[L] = i; // L번째 행의 i번째 column에 퀸을 놓는다.
        if (isCheck(L)) {
          // 해당 위치에 놓을 수 있다면
          dfs(L + 1); // 해당 위치를 거쳐 다음 행도 확인해본다.
        }
      }
    }
  };
  dfs(0);
  return answer;
};

console.log(solution(+N));
