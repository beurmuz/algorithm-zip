"use strict";

/**
 * N-Queen 문제는 크기가 N*N인 체스판 위에 퀸 N개를 서로 공격할 수 없게 놓는 문제이다.
 * - 서로 공격할 수 없다? => 퀸의 일직선 및 대각선 상에는 아무것도 놓이면 안된다는 말과 같다.
 * - cf.[9663](https://velog.io/@jxlhe46/%EB%B0%B1%EC%A4%80-9663%EB%B2%88.-N-Queen)
 * - cf.[9663_2](https://gobae.tistory.com/57)
 */
const n = require("fs").readFileSync("/dev/stdin").toString();

const solution = (n) => {
  let answer = 0;
  let row = Array.from({ length: n + 1 }, () => 0);

  const isPossible = (L) => {
    for (let i = 0; i < L; i++) {
      if (row[L] === row[i] || L - i === Math.abs(row[L] - row[i]))
        return false;
    }
    return true;
  };

  const dfs = (L) => {
    if (L === n) {
      answer++;
      return;
    } else {
      for (let i = 0; i < n; i++) {
        row[L] = i;
        if (isPossible(L)) {
          dfs(L + 1);
        }
      }
    }
  };
  dfs(0);
  return answer;
};

console.log(solution(+n));
