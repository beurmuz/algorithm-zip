"use strict";

/**
 * [브루트포스]
 */
const solution = (N) => {
  function notSelf(N) {
    // 생성자를 구하는 함수
    let sum = N;

    while (1) {
      // 모든 자릿수를 더한다.
      if (N == 0) break;
      sum += N % 10;
      N = parseInt(N / 10);
    }
    return sum;
  }

  function findSelf(N) {
    let selfNum = [];
    let result = "";

    for (let i = 1; i <= N; i++) {
      let index = notSelf(i); // index에 생성자 값을 넣고
      if (index <= N) selfNum[index] = true; // 생성자가 N이하일 때 selnum에 생성자 값을 넣는다.
    }

    for (let i = 1; i <= N; i++) {
      if (!selfNum[i]) result += `${i}\n`; // 생성자 값이 없다면 결과에 넣어준다.
    }
    return result;
  }
  return findSelf(10000);
};

console.log(solution(10000));
