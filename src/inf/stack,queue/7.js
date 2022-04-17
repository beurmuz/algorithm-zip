'use strict';

function solution(need, plan){
    let answer="YES";
    let queue = need.split('');

    for(let i of plan) {
        if(queue.includes(i)) {
            if(i!==queue.shift()) {
                return "NO";
            }
        }
    }
    if(queue.length>0) {
        return "NO";
    }

    console.log(...plan);
    return answer;
}

let a="CBA";
let b="CBDAGE";
console.log(solution(a, b));