'use strict';

function solution(n, k, arr, m) {
    let answer = 0;
    let tmp = Array.from({length: k}, () => 0);

    function dfs(L, s, sum) {
        if(L === k) {
            console.log(sum, tmp);            
            if(sum % m === 0) answer += 1;
        } else {
            for(let i = s; i < n; i++) {
                tmp[L] = arr[i];
                dfs(L+1, i+1, sum+arr[i]);
            }
        }
    }
    dfs(0, 0, 0);
    return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));