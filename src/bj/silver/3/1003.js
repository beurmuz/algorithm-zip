'use strict';

// 내 풀이 - 시간초과남
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './data/1302.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const n = input.shift();
let d = Array.from({length: 40}, () => 0);
let answer = [];
d[0] = 0;
d[1] = 1;

function fibo(x, count) {
    if (x === 0) {
        count[0] += 1;
        return d[0];
    }
    if (x === 1) {
        count[1] += 1;
        return d[1];
    }
    d[x] = fibo(x-1, count) + fibo(x-2, count);
    return d[x];
}

for(let i = 0; i < n; i++) {
    let count = [0, 0];
    fibo(+input[i], count); 
    answer.push(count);
}

for(let [zero, one] of answer) {
    console.log(zero, one);
}


// 다른 풀이
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const len = input.shift();

for (let i = 0; i < len; i++) {
    let oneCount = 0, zeroCount = 1;
    
    for (let j = 1; j <= input[i]; j++) {
        const tmpCount = zeroCount;
       
        zeroCount = oneCount;
        oneCount = tmpCount + oneCount;
    }

    console.log(zeroCount + " " + oneCount);   
}