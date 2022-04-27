'use strict';

function solution(m, arr){
    let answer=0;
    let count = 0;

    for(let i = 0; i < arr.length; i++) {
        let sum = 0;
        for(let j = i+1; j < arr.length; j++) {
            sum +=arr[i];
            if(sum > m) {
                break;
            } else if(sum === m) {
                count++;
            }
        }
        answer = count;
    }
    return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));