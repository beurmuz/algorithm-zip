'use strict';

function solution(coinList, change) {
    let answer = Number.MAX_SAFE_INTEGER;
    let n = coinList.length;
    function dfs(L, sum) {
        // edge 컷팅
        if(sum > change) return;
        if(L >= answer) return;
        if(sum === change) {
            console.log(L, sum);
            answer = Math.min(answer, L); // answer 갱신, L은 동전 개수 
        } else {
            for(let i = 0; i < n; i++){ // 모든 동전들 탐색
                dfs(L+1, sum + coinList[i]);
            }
        }
    }
    dfs(0, 0);
    return answer;
}

let coinList = [1, 2, 5];
console.log(solution(coinList, 15));