"use strict";

function solution(c, arr) {
  let answer = 0;

  function dfs(L, sum) {
    if (sum > c) return;
    if (L === arr.length) {
      answer = Math.max(sum, answer);
    } else {
      // 현 바둑이를 포함하는 경우(왼쪽, 현재 바둑이를 태우고 다음 바둑이로 권한 넘기기)
      dfs(L + 1, sum + arr[L]);

      // 현 바둑이를 포함하지 않는 경우(오른쪽, 현재 바둑이를 태우지 않은 채로 다음 바둑이로 권한 넘기기)
      dfs(L + 1, sum);
    }
  }
  dfs(0, 0);
  return answer;
}

let arr = [81, 91, 42, 33, 91];
console.log(solution(259, arr));
