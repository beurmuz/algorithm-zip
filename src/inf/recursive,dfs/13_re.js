'use strict';

function solution(n, f) {
    let answer;
    let flag = 0;
    let memoization = Array.from(Array(11), () => Array(11).fill(0));
    let checkArray = Array.from({length: n+1}, () => 0);
    let p_array = Array.from({length: n}, () => 0);
    let c_array = Array.from({length: n}, () => 0);

    function combination(n, r) {
        if(memoization[n][r] > 0) return memoization[n][r];
        if(n === r || r === 0) return 1;
        else return memoization[n][r] = combination(n-1, r-1) + combination(n-1, r);
    }

    function dfs(L, sum) {
        if(flag) return;
        if(L === n && sum === f) {
            answer = p_array.slice();
            flag = 1;
        } else {
            for(let i = 1; i <= n; i++) {
                if(checkArray[i] === 0) {
                    checkArray[i] = 1;
                    p_array[L] = i;
                    dfs(L+1, sum+(c_array[L]*p_array[L])); // 조합*순열
                    checkArray[i] = 0;
                }
            }
        }
    }
    for(let i = 0; i < n; i++) {
        c_array[i] = combination(n-1, i);
    }
    dfs(0, 0);
    return answer;
}

console.log(solution(4, 16));