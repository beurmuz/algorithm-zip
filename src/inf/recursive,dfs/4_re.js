'use strict';

function solution(n) {
    let answer = [];
    let check = Array.from({ length: n+1 }, () => 0);

    function dfs(v) {
        if(v === n+1) { // v가 4가 되면
            let tmp = '';
            for(let i = 0; i < check.length; i++) {
                if(check[i] === 1) {
                    tmp += i + ' ';
                }
            }
            if(tmp.length > 0) {
                answer.push(tmp.trim());
            }
        } else {
            // 왼쪽으로 내려가는 경우
            check[v] = 1;
            dfs(v+1);
            // 오른쪽으로 내려가는 경우
            check[v] = 0;
            dfs(v+1);
        }
    } 
    dfs(1);
    return answer;
}

console.log(solution(3));

/*
    dfs로 부분집합 구하기
    - n의 부분집합은 2^n개
    - 트리 그려서 왼쪽으로 내려가면 해당 노드를 포함하는 경우로, 오른쪽으로 내려가면 해당 노드를 포함하지 않는 경우로 보기
    - 왼쪽 노드로 내려가기 직전에 check배열을 1로 만들고, 오른쪽 노드로 내려가기 직전에 이 check배열을 다시 0으로 만들기
    - 한 노드에서 가능한 모든 경우의 수를 따져야하므로 DFS로 탐색하기 
    - 공집합은 출력하지 않으므로 tmp의 lenght가 1이상인 경우만 출력하기
*/