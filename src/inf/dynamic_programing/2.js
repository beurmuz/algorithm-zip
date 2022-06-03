'use strict';

function solution(n) {
    let answer = 0;
    let dy = Array.from({length: n+2}, () => 0);

    dy[1] = 1;
    dy[2] = 2;
    for(let i = 3; i <= n+1; i++) {
        dy[i] = dy[i-2] + dy[i-1];
    }
    answer = dy[n+1];
    return answer;
}

console.log(solution(7));

/*
    - 돌의 개수가 N개이면 도착지점은 n+1에 있는 것
    - 건너는 방법이 1칸, 2칸, 3칸일 때 3칸짜리는 처음 지점에서 오는 경우의 수(1개) + 1번 돌에서 오는 경우의 수(1개) + 2번 돌에서 오는 경우의 수(2개) 해서 총 4가지
*/