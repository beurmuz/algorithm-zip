'use strict';

const file = process.platform === 'linux' ? '/dev/stdin' : './data/1546.txt';
let input = require('fs').readFileSync(file).toString().trim().split('\n');
let n = +input.shift();
let scores = (''+input).split(' ').map(v => +v);
let maxScores = Math.max(...scores);
let sum = 0;
for(let x of scores) {
    sum += (x/maxScores)*100;
}

console.log(sum/n);