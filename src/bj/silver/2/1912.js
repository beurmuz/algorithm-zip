'use strict';

/*
    부분 수열 문제랑 같음!
*/

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input.shift();
const inputs = input.toString().split(' ').map(v => +v);
const dp = [];

for(let i = 0; i < n; i++) {
    dp[i] = inputs[i];
    if(dp[i] < dp[i-1]+inputs[i]) dp[i] = dp[i-1]+inputs[i];
}

console.log(Math.max(...dp));