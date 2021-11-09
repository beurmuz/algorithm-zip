'use strict'

let input = require('fs').readFileSync('./11720.txt').toString().split('\r\n');
let N = input[0]*1;
let numsString = input[1].split('');

function SumOfNums(N, numsString) {
    let sum = 0;
    for(let i = 0; i < N; i++) {
        sum += Number(numsString[i]);
    }
    return sum;
}

console.log(SumOfNums(N, numsString));