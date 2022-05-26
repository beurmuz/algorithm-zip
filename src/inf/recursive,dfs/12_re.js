'use strict';

function solution(n, r) {
    let answer;
    let arrSize = n+2;
    let dy = Array.from(Array(arrSize), () => Array(arrSize).fill(0));
    function dfs(n, r) {
        if(dy[n][r] > 0) return dy[n][r];
        if(n === r || r === 0) {
            return 1;
        } else {
            return dy[n][r] = dfs(n-1, r-1)+dfs(n-1, r);
        }
    }
    answer = dfs(n, r);
    return dfs(n, r);
}

console.log(solution(33, 20));

