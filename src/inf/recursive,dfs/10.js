'use strict';

function solution(arr, m) {
    let answer = [];
    let n = arr.length;
    let ch = Array.from({length:n}, ()=>0);
    let tmp = Array.from({length: m}, () => 0);
    function dfs(L) {
        if(L === m) {
            answer.push(tmp.slice());
        } else {
            for(let i = 0; i < n; i++) {
                if(ch[i]===0){ // 중복 잡기 
                    ch[i] = 1;
                    tmp[L] = arr[i];
                    dfs(L+1);
                    ch[i] = 0;
                }
            }
        }
    }
    dfs(0)
    return answer;
}

let arr = [3, 6, 9];
console.log(solution(arr, 2));

/*
    - 순서대로 뽑으나 중복이 없으므로 3*2 = 6가지 
    - 중복을 제거하는 방법?
        -> 
*/