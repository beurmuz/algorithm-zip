'use strict';

let n = +require('fs').readFileSync('/dev/stdin').toString();
const dp = Array(n+1).fill(0);
let threeCnt = 0;
let fiveCnt = 0;
while(1) {
    if(n%5 === 0) {
        fiveCnt = n/5;
        console.log(fiveCnt + threeCnt);
        break;
    }
    if(n<0) {
        console.log(-1);
        break;
    }
    n = n-3;
    threeCnt++;
}