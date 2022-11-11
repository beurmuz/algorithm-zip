"use strict";

function solution(timeLimit, scoreList, timeList) {
  let answer = 0;
  function dfs(L, scoreSum, timeSum) {
    if (timeSum > timeLimit) return;
    if (L === scoreList.length) {
      answer = Math.max(answer, scoreSum);
    } else {
      // 왼쪽, 해당 문제를 푸는 경우 (+점수, +시간)
      dfs(L + 1, scoreSum + scoreList[L], timeSum + timeList[L]);

      // 오른쪽, 해당 문제를 풀지 않는 경우
      dfs(L + 1, scoreSum, timeSum);
    }
  }
  dfs(0, 0, 0);
  return answer;
}

let scoreList = [10, 25, 15, 6, 7];
let timeList = [5, 12, 8, 3, 4];
console.log(solution(20, scoreList, timeList));
