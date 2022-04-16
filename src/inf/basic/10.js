'use strict';

function solution(s, t){
    let answer=0;
    for(let i in s) {
        if(s[i]===t) {
            answer += 1;
        }
    }
    return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'P'));