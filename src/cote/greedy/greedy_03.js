'use strict';

function solution(N, K) {
    let answer = 0;
    
    while(N > 1) {
        if(N % K === 0) N = N / K;
        else N = N - 1;
        answer++;
    }
    return answer;
}

console.log(solution(25, 5));