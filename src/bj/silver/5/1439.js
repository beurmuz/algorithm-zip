'use strict';

const input = require('fs').readFileSync('test.txt').toString().trim();
function solution(input) {
    if(input.includes(0) && input.includes(1)) {
        let toOne = input.split(0).filter(el => el!== '').length;
        let toZero = input.split(1).filter(el => el!== '').length;
        return toOne < toZero ? toOne : toZero;
    } else return 0
};
console.log(solution(input));