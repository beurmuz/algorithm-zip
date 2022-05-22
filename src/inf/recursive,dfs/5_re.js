'use strict';

function solution(arr) {
    let answer = "NO";
    let sum = arr.reduce((a, b) => a + b);
    let flag = 0;
    function dfs(L, totalNum) {
        if(flag === 1) return;
        if(L === arr.length) {
            if((sum - totalNum) === totalNum) {
                answer = "YES";
                flag = 1;
            }
        } else {
            dfs(L+1, totalNum + arr[L]);
            dfs(L+1, totalNum);
        }
    }
    dfs(0, 0);
    return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));

/*
    dfs, 재귀로 풀귀
    - arr의 총계 sum 변수 생성해놓고 totalNum과 비교하기
        - sum-totalNum === totalNum이라는 건 정확히 반 값일때를 의미함
    - 왼쪽으로 내려가면 해당 노드를 포함하는 경우 (totalNum + arr[L])
    - 오른쪽으로 내려가면 해당 노드를 포함하지 않는 경우 (totalNum)
*/