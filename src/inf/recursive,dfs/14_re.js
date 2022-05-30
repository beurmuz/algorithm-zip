'use strict';

function solution(n, m) {
    let answer = [];
    let tmp = Array.from({length: m}, () => 0);
    function dfs(L, s) {
        if(L === m) {
            answer.push(tmp.slice());
        } else {
            for(let i = s; i <= n; i++) {
                tmp[L] = i;
                dfs(L+1, i+1);
            }
        }
    }
    dfs(0, 1);
    return answer;
}

console.log(solution(4, 2));