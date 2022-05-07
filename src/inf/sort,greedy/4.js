'use strict';

function solution(arr){
    let answer=arr;
    for(let j = 0; j < answer.length; j++) {
        for(let i = 0; i < answer.length; i++) {
            if(answer[i] > answer[i+1]) {
                [answer[i], answer[i+1]] = [answer[i+1], answer[i]];
            }
        }
    }
    return answer;
}

let arr=[11, 7, 5, 6, 10, 9];
console.log(solution(arr));