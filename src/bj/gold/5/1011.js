'use strict';

const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = inputs.shift()*1;
const testcase = inputs.map((v) => {
    let [x, y] = v.split(' ');
    return [+x, +y];
});

for(let i = 0; i < T; i++) {
    console.log(solution(testcase[i]));
}

function solution([x, y]) {
    let a, b;
    
    if(Math.sqrt(y-x) % 1 === 0 ){ // y-x가 제곱수라면
        answer = 2 * Math.sqrt(y-x) - 1;

    }else{
        a = Math.pow(Math.ceil(Math.sqrt(y-x)), 2); // y-x 보다 큰 제곱 수 
        b = Math.pow(Math.ceil(Math.sqrt(y-x)) - 1, 2) + 1; // 그보다 한 단계 아래 제곱 수
        if((a+b) / 2 <= y-x){
            answer = 2 * Math.ceil(Math.sqrt(y-x)) - 1;
        }else{
            answer = 2 * Math.ceil(Math.sqrt(y-x)) - 2;
        }
    }
    return answer;
}