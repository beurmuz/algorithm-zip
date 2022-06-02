'use strict';

function solution(n) {
    let answer = 0;
    let dy = Array.from({length: n+1}, () => 0);
    dy[1] = 1;
    dy[2] = 2;
    for(let i = 3; i <= n; i++) {
        dy[i] = dy[i-2] + dy[i-1];
    }
    answer = dy[n];
    return answer;
}

console.log(solution(7));

/*
    - 우선 dy 배열 선언하기 (n+1의 길이, 0으로 모두 초기화)
    - dy[n]에는 n번째 계단까지 가는 방법의 수
        - 1: 1개(1)
        - 2: 2개(1+1, 2)
        - 3: 3개(1+1+1, 1+2, 2+1), 1번 계단에서 오는 경우의 수(1개)와 2번 계단에서 오는 경우의 수(2개)의 합
        - 4: 5개(1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2), 2번 계단에서 오는 경우의 수(2개)와 3번 계단에서 오는 경우의 수(3개)의 합

*/