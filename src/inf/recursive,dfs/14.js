'use strict';

function solution(n, m) { // n개에서 m개를 뽑는 조합의 경우의 수 구하기 
    let answer = [];
    let tmp = Array.from({length: m}, () => 0); // tmp는 m크기의 배열로, 모두 0으로 초기화 되어있음 
    function dfs(L, s) { // L은 Level, s는 for문의 start number
        if(L === m) { // 조합의 경우의 수가 완성된 지점 (말단노드로 온 경우)
            answer.push(tmp.slice());
        } else { // 가닥이 뻗어나가는 지점
            for(let i = s; i <= n; i++) {
                tmp[L] = i; // tmp[L]에 뽑은 i 넣기 (가닥들)
                dfs(L+1, i+1);
            }
        }
    }
    dfs(0, 1);
    return answer;
}

console.log(solution(4, 2)); 