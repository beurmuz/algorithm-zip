'use strict';

function solution(limitWeight, arr) {
    let answer = 0;
    function dfs(L, sum) {
        if(sum > limitWeight) return;
        if(L === arr.length) {
            answer = Math.max(answer, sum);
        } else {
            dfs(L+1, sum+arr[L]);
            dfs(L+1, sum);
        }
    }
    dfs(0, 0);
    return answer;
}

let dogsWeight = [81, 58, 42, 33, 61];
console.log(solution(259, dogsWeight));

/*
    - limitWeight을 넘지 않으면서 가장 무겁게 태우고 싶다
        -> 바둑이를 태우거나 태우지 않거나하는 방법으로 풀 수 있음
        -> DFS, 재귀 이용하기
*/