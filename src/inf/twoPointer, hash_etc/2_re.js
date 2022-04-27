'use strict';

function solution(arr1, arr2){
    let answer = [];
    let allArr = arr1.concat(arr2);
    allArr.sort((a, b) => a-b);
    console.log(allArr);
    for(let i = 0; i < allArr.length-1; i++) {
        (allArr[i]===allArr[i+1])&&(answer.push(allArr[i]));
    }
    return answer;
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));