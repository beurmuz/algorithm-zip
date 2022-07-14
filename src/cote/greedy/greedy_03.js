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

/*
    연산의 최소 횟수를 구하기 위해서는, 주어진 N을 '최대한 많이 나누는 것'이 중요함
    => N이 클수록 K로 나누었을 때 줄어드는 양이 더 많음
*/