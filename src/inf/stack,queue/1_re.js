'use strict';

function solution(s){
    let answer = 'NO';
    s = s.split('');
    let stack1 = []; // (
    let stack2 = []; // )
    for(let i of s) {
        if(i === '(') {
            stack1.push(i);
        } else if(i === ')') {
            stack2.push(i);
        }
    }
    if(stack1.length === stack2.length) {
        answer = 'YES';
    }
    return answer;
}

let a="(()(()))(()";
console.log(solution(a));