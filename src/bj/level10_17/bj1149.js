'use strict';

const fs = require('fs');

//const readFileSyncAddress = '/dev/stdin';
const readFileSyncAddress = '1149.txt';

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

let N;
let arr;

[N, ...arr] = input;
N = Number(N);
arr = arr.map(i => i.split(' ').map(i => Number(i)));

for(let i = 1; i < N; i++) {
    arr[i][0] += Math.min(arr[i-1][1], arr[i-1][2]);
    arr[i][1] += Math.min(arr[i-1][0], arr[i-1][2]);
    arr[i][2] += Math.min(arr[i-1][0], arr[i-1][2]);    
}

console.log(Math.min(...arr[N-1]));