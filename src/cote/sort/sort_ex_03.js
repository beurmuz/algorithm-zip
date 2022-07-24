'use strict';

function solution(N, K, s) {
    const arr = s.split('\n').map((v) => v.split(' '));
    const A = arr[0].map((v) => +v).sort((a,b) => a-b);
    const B = arr[1].map((v) => +v).sort((a,b) => b-a);

    console.log(A, B);
    for(let i = 0; i < K; i++) {
        [[A[i]], B[i]] = [[B[i]], A[i]];
    }
    return A.reduce((acc, value) => acc += value, 0);
}

console.log(solution(5, 3, '1 2 5 4 3\n5 5 6 6 5'));