'use strict';

function solution(v) {
    function dfs(v) {
        if(v > 7) {
            return;
        } else {
            console.log(v);
            dfs(v*2);
            dfs(v*2+1);
        }

    }
    dfs(v);
}

console.log(solution(1)); // 부모 노드