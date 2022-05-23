'use strict';

function solution(n) {
    let answer = 1;
    function dfs(n) {
        if(n === 1) {
            return 1;
        } else {
            return n*dfs(n-1); 
        }
    }
    answer = dfs(n);
    return answer;
}
console.log(solution(5));

/*
    팩토리얼 문제!
    - dfs로 풀면된다 (재귀니깐)
    - n===1일때 그냥 1을 return함
    - 그게 아니면 n*dfs(n-1) return하기
    - dfs(n)을 리턴한 결과값을 answer에 저장해주면 됨
*/