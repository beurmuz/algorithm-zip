'use strict';

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = input[0];
const A = input[1].split(' ').map(v => +v).sort((a, b) => a-b);
const B = input[2].split(' ').map(v => +v).sort((a, b) => b-a);

let answer = 0;
for(let i = 0; i < n; i++) {
    answer+= A[i]*B[i];
}

console.log(answer);