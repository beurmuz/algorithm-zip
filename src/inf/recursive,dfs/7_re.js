'use strict';

function solution(timeLimit, scoreLists, timeLists) {
    let answer = 0;
    function dfs(L, scoreSum, timeSum) {
        if(timeSum > 20) return;
        if(L === scoreLists.length) {
            answer = Math.max(answer, scoreSum);
        } else {
            dfs(L+1, scoreSum + scoreLists[L], timeSum + timeLists[L]);
            dfs(L+1, scoreSum, timeSum);
        }
    }
    dfs(0, 0, 0);
    return answer;
}

let scoreLists = [10, 25, 15, 6, 7];
let timeLists = [5, 12, 8, 3, 4];
console.log(solution(20, scoreLists, timeLists));

/*
    - 문제를 풀었을 때 얻는 점수 / 시간 
    - 제한시간 M안에 얻을 수 있는 최대 점수 구하기
        -> 문제를 풀고 / 안풀고의 문제로 푸는 경우와 안푸는 경우의 점수와 시간 각각 누적합하기
*/