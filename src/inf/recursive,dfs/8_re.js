'use strict';

function solution(n, m) {
    let answer = [];
    let tmp = Array.from({length: m}, () => 0);

    function dfs(L) {
        if(L === m) {
            answer.push(tmp.slice());
        } else {
            for(let i = 1; i <= n; i++) {
                tmp[L] = i; // 각 자리에 올 수 있는 건 총 3개(1,2,3)
                console.log(`정점${L}에서의 tmp는 ${tmp}`);
                dfs(L+1);
            }
        }
    }
    dfs(0);
    console.log(...answer);
    console.log(answer.length);
}

console.log(solution(3, 2));

/*
    - 중복순열 구하기
    - N: 구슬의 개수, 1~N까지 번호가 적혀있음
    - M: 중복을 허락해 몇번 뽑을건지

    - 중복순열은 중복이 가능하며 순서에 따라 값이 다르다고 봄
    - 나열하는 방법 모두를 출력해야하므로, 모든 경우를 answer 배열에 push하기
*/