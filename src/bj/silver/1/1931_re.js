'use strict';

const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = inputs.shift();
let timeTable = [];
inputs.forEach((line) => {
    let [start, end] = line.split(' ');
    timeTable.push([+start, +end]);
});

timeTable.sort((a, b)=> {
    if(a[1] === b[1]) {
        return a[0]-b[0];
    }
    return a[1]-b[1];
});


const answer = [];
let endTime = 0;
for(let [start, end] of timeTable) {
    if(start >= endTime) { // 현재 시간이, 그 전 endTime보다 크거나 같다면
        answer.push([start, end]);
        endTime = end;
    }
}

console.log(answer.length);