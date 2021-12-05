'use strict';

let input = require('fs').readFileSync('./1546.txt').toString().split('\n');
let subjectNum = input[0]*1;
let score = input[1].split(' ');
let scores = [];
for(let i = 0; i < subjectNum; i++) {
    scores.push(Number(score[i]));
}

let maxScore = Math.max(...scores);
let result = 0;

// 새 평균 계산법 scores[i]/maxScore*100
for(let i of scores) {
    result += i/maxScore*100;
}
console.log(result/subjectNum);