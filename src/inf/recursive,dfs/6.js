'use strict';

function solution(limitWeigth, arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length;
    function dfs(L, sum) {
        if(sum > limitWeigth) return;
        if(L === n) {
            answer = Math.max(answer, sum); // 최댓값이 생기면 그걸로 항상 갱신해주기
        } else {
            // 바둑이를 태운다
            dfs(L+1, sum+arr[L]);

            // 바둑이를 태우지 않는다.
            dfs(L+1, sum);
        }
    }
    dfs(0, 0);
    return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));

/*
    부분집합의 합문제 
    - 보통 두 갈래로 나뉘는 문제는 dfs로 부분집합 구현해서 풀기
*/