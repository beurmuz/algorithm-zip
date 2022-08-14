'use strict';

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = input.shift()*1;
const progression = (''+input).split(' ').map(v => +v);

const dp = Array(n).fill(0);
dp[0] = progression[0];
let max = dp[0];

for(let i = 1; i <= n; i++) {
    let item = progression[i]+dp[i-1];
    if(item > max) {
        dp[i] = item;
        max = item;
    }
}

console.log(Math.max(...dp));