'use strict'

// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// let inputs = [];
// inputs = input[0].split(' ');

function maxValue (n) {
    let max = 0;
    let maxIndex = 0;
    for(let i = 0; i < n.length; i++) {
        if(max<n[i]) {
            max = n[i]
            maxIndex = i;
        }
    }
    console.log(`최댓값은 ${max}이고, 이 값은 ${maxIndex+1}번째 수이다.`);
}

let n = [3, 29, 38, 12, 57, 74, 40, 85, 61];
maxValue(n);