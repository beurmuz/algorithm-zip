'use strict';

const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = inputs.shift();
const timetable = [];
inputs.forEach((v) => {
    let [start, end] = v.split(' ');
    timetable.push([+start, +end]);
});

timetable.sort((a, b) => {
    if(a[1] === b[1]) {
        return a[0] - b[0];
    }
    return a[1] - b[1];
});

const answer = [];
let element = 0; // end값을 저장할 변수
for(let x of timetable) {
    if(x[0] >= element) {
        answer.push(x);
        element = x[1];
    }
}
console.log(answer.length);