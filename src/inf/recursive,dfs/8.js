'use strict';

function solution(n, m) {
    let answer = [];
    let tmp = Array.from({lenght: m}, () => 0);
    function dfs(L) {
        if(L===m) {
            answer.push(tmp.slice());
        } else {
            for(let i = 1; i <= n; i++) {
                tmp[L] = i;
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
    - N: 구슬의 수 (3)
    - M: 중복을 허락하여 뽑는 횟수 (2)

    - 중복순열 문제로 두 자리에 올 수 있는 숫자는 3개로, 총 3*3 = 9가지 경우의 수가 있음 
    - 항상 트리로 그려보기

    - 재귀는 다중 for문으로 나타낼 수 있음
    - 근데 왜 다중 for문 안쓰고 재귀를 쓰는가?
        -> for문을 사용하면 재귀와 달리 들어오는 매개변수 값(즉, 입력값)에 따라 융통성있게 바로바로 적용해줄 수 없기때문 

*/