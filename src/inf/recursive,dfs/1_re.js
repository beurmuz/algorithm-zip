'use strict';

function solution(n) {
    function dfs(n) {
        if(n === 0) {
            return;
        } else {
            dfs(n-1);
            console.log(n);
        }
    }
    dfs(n);
}

console.log(solution(3));