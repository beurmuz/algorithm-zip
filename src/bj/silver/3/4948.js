'use strict';
/*
    v의 범위가 v+1 ~ 2v임을 잊지말자!
*/

const testcase = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((v) => +v);
let answer = testcase.map((v) => {
    let count = 0;
    for(let i = v+1; i <= (2*v); i++) {
        if(prime(i) === true) count++;
        else continue;
    }
    return count === 0 ? '' : count;
});

function prime(num) {
    if(num <= 1) return false;
    if(num === 2 || num === 3) return true;
    
    for(let j = 2; j <= Math.sqrt(num); j++) {
        if(num % j === 0) return false;
    }
    return true;
}

console.log(answer.join('\n').trim());