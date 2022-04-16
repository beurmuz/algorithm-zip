'use strict';

function solution(char,s){
    let answer=s;
    for(let i in answer) {
        if(answer[i] ===char)
        answer = answer.replace(char, "#");
    }
    return answer;
}
let str="BANANA";
console.log(solution("N",str));