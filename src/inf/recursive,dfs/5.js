'use strict';

function solution(arr) {
    let answer = "NO";
    let flag = 0;
    let totalNum = arr.reduce((a,b) => a+b, 0);
    let n = arr.length;
    function dfs(L, sum) {
        if(flag) return;
        if(L === n) { // L(level, index)이 6일때 부분집합이 하나 완성됨
            if((totalNum-sum) === sum) {
                answer = "YES";
                flag = 1;
            }
        } else {
            // 왼쪽 노드로 내려감 (해당 노드를 포함하는 경우)
            dfs(L+1, sum+arr[L]); // 합에 해당 노드를 더해 넘겨줌
            // 오른쪽 노드로 내려감 (해당 노드를 포함하지 않는 경우)
            dfs(L+1, sum); // 합을 그대로 넘겨줌
        }
    }
    dfs(0,0);
    return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));

/*

*/