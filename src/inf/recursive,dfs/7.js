'use strict';

function solution(timeLimit, scoreArray, timeArray) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = scoreArray.length;
    function dfs(L, sum, totalTime) {
        if(totalTime > timeLimit) return;
        if(L === n) {
            answer = Math.max(answer, sum);
        } else {
            // 왼쪽 방향, 문제를 푸는 경우
            dfs(L+1, sum+scoreArray[L], totalTime+timeArray[L]);

            // 오른쪽 방향, 문제를 풀지 않는 경우
            dfs(L+1, sum, totalTime);
        }
    }
    dfs(0, 0, 0);
    return answer;
}
let timeLimit = 20;
let scoreArray = [10, 25, 15, 6, 7];
let timeArray = [5, 12, 8, 3, 4];
console.log(solution(timeLimit, scoreArray, timeArray));