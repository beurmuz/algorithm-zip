'use strict';

function solution(n){
    let answer;
    answer = Math.ceil(n/12);
    return answer;
}

console.log(solution(25));
console.log(solution(178));