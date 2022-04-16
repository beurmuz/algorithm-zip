'use strict';

function solution(s){         
    let answer="";
    for(let i in s) {
        answer += s[i].toUpperCase();
    }
    return answer;
}

let str="ItisTimeToStudy";
console.log(solution(str));