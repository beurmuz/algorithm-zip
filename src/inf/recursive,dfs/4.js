'use strict';

function solution(n) {
    let answer = [];
    let checkArray = Array.from({length: n+1}, () => 0); // 0으로 초기화
    function dfs(v) {
        if(v === n+1) { // v가 4가 되어야 참이됨
            let tmp = '';
            for(let i = 1; i <= n; i++) {
                if(checkArray[i]===1) tmp += i + ' ';
            }
            if(tmp.length > 0) answer.push(tmp.trim()); // tmp가 공집합인 경우는 제외시켜야함
        } else {
            checkArray[v] = 1; // 포함시킨다
            dfs(v+1); // 왼쪽으로 뻗음
            checkArray[v] = 0; // 포함시키지 않는다
            dfs(v+1); // 오른쪽으로 뻗음
        }
    }
    dfs(1);
    return answer;
}

console.log(solution(3));

/*
    count할 array가 필요함

*/