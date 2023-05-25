"use strict";

/**
 * 맨 앞자리가 소수인 수만 골라서 탐색한다.
 * 이렇게하면 정답은 나오지만, JS로 풀면 메모리 초과가 발생한다.
 */
const n = +require("fs").readFileSync("/dev/stdin").toString().trim();

const solution = (n) => {
  let answer = "";
  function prime(num) {
    for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  function dfs(x) {
    if (("" + x).length === n) answer += x + "\n";
    else {
      for (let i = 1; i < 10; i += 2) {
        if (prime(10 * x + i)) dfs(10 * x + i);
        else continue;
      }
    }
  }
  dfs(2);
  dfs(3);
  dfs(5);
  dfs(7);
  return answer;
};

solution(n);
