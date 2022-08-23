'use strict';

const [n, ...step] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((v) => +v);
const dp = new Array(n).fill(0);


dp[0] = step[0]; // 시작 단계
dp[1] = step[0] + step[1]; // 시작 단계 -> 1단계
dp[2] = Math.max(step[0] + step[2], step[1] + step[2]); // 시작 단계 -> 2단계, 1단계 -> 2단계

for (let i = 3; i < n; i++) {
    dp[i] = Math.max(step[i] + step[i - 1] + dp[i - 3], step[i] + dp[i - 2]); // 전전전단계는 제외하고(최대 2칸만 뛸 수 있어서) 전 단계에서 i단계로 오는 방법, 2단계 전에서 i단계로 오는 방법이 있음 
}

console.log(dp[n - 1]);