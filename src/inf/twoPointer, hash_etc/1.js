'use strict';

function solution(arr1, arr2){
    let answer=[];
    answer = (arr1.concat(arr2)).sort((a,b) => a-b);
    return answer;
}

console.time("수행시간");
let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));
console.timeEnd("수행시간");