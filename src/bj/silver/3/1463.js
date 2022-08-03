'use strict';

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './data/1302.txt';
const num = fs.readFileSync(file).toString()*1;
const dp = Array.from({length: num+1}, () => 0);

for(let i = 2; i <= num; i++) {
    dp[i] = dp[i-1] + 1;
    
}

for (let i = 2; i <= num; i++) {
    dp[i] = dp[i - 1] + 1;
    if(i%2 === 0) dp[i] = Math.min(dp[i], dp[i/2]+1);
    if(i%3 === 0) dp[i] = Math.min(dp[i], dp[i/3]+1);
}

console.log(dp[num]);