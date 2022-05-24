'use strict';

function solution(n ,r) {
    let answer;
    let dy= Array.from(Array(35), () => Array(35).fill(0));
    
    function dfs(n, r) {
        if(dy[n][r]>0) return dy[n][r];
        if(n === r || r === 0) return 1;
        else return dfs(n-1, r-1) + dfs(n-1, r);
    }
    answer = dfs(n, r);
    return answer;
}

console.log(solution(5, 3));

/*
    - 자기 자신이 참여하는 경우와 참여하지 않는 경우로 분류될 수 있음
    - 큰 수에서 조합을 구할 때, 메모이제이션을 사용하면 단번에 구할 수 있음
        - 메모이제이션: 
*/