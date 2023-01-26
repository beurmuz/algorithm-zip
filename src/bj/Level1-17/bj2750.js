'use strict';
const input = require('fs').readFileSync('./2750.txt').toString().split('\r\n');

const N = input.shift();
const sortArr = input.sort((a,b) => a-b);

for(let i = 0; i < N; i++) {
    console.log(sortArr[i]);
}