'use strict';

let input = require('fs').readFileSync('./2941.txt').toString();

// 방법 1
// var regex = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;
// let result = input.replace(regex, ' ');
// console.log(result.length);

// 방법 2
function solution(input) {
    const croatian = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
    let answer = 0;
    for(let i = 0; i < croatian.length; i++) {
        while(input !== input.replace(croatian[i], '')) {
            answer += 1;
            input = input.replace(croatian[i], ' ');
        }
    }
    console.log(answer+input.split(' ').join('').length);
}

solution(input);