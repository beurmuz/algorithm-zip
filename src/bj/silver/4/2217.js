'use strict';
// 문제 풀이 방법을 생각해내지 못했다. 왜이렇게 풀어야하지?
const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((v) => +v);
input.sort((a, b) => a-b);

let maxValue = 0;
for(let i = 0; i < n; i++) {
    // console.log(`maxValue is .. ${maxValue} | input[${i}]*(${n}-${i}) = ${input[i]*(n-i)}`);
    if(maxValue <= input[i] * (n-i)) {
        maxValue = input[i] * (n-i);
    }
}
console.log(maxValue);