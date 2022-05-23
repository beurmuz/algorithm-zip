'use strict';

function solution(coinList, change) {
    let answer = Number.MAX_SAFE_INTEGER;
    let n = coinList.length;
    function dfs(L, sum) {
        if(sum > change) return;
        if(L >= answer) return;
        if(sum === change) {
            answer = Math.min(answer, L);
        } else {
            for(let i = 0; i < n; i++){
                dfs(L+1, sum + coinList[i]);
            }
        }
    }
    dfs(0, 0);
    return answer;
}

let coinList = [1, 2, 5];
console.log(solution(coinList, 15));