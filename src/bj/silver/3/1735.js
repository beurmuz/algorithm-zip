'use strict';
/*
    1. 통분해서 분자, 분모 구하기
    2. 2부터 count를 1씩 증가하여 정답 구하기
*/

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [a, b] = input.map((v) => {
    return v.split(' ');
});

let [upSum, downSum] = [(+a[0] * +b[1])+(+a[1] * +b[0]), +a[1] * +b[1]];

count = 2;
while(count <= upSum && count <= downSum) {
    if((upSum%count !== 0)||(downSum%count !== 0)) count++;
    else {
        upSum /= count;
        downSum /= count;
    }
}
console.log(upSum, downSum);