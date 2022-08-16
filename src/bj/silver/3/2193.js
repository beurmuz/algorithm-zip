'use strict';
// dp 문제 (피보나치수열)
/*
    BigInt를 해주지않으면 오답처리됨
*/

const n = +require('fs').readFileSync('/dev/stdin').toString();
const memo = Array(n+1).fill(0);

memo[1] = 1;
memo[2] = 1;
for(let i = 3; i < memo.length; i++) {
    memo[i] = BigInt(memo[i-1]) + BigInt(memo[i-2]);
}

console.log(String(memo[n]));