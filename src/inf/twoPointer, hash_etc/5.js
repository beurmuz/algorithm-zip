'use strict';

function solution(k, arr){
    let answer = 0, max = 0;
    for(let i = 0; i < arr.length-2; i++) {
        let sum = 0;
        for(let j = i; j < i+3; j++) {
            sum += arr[j];
        }
        // console.log(`sum은 ${sum}`);
        if(sum > max) max = sum;
    }
    return answer = max;
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));