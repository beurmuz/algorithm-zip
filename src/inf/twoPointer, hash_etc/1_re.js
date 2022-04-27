'use strict';

function solution(arr1, arr2){
    let answer=[];
    let allArr = arr1.concat(arr2);
    allArr.sort((a,b) => a-b);
    answer = allArr;
    return answer;
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));