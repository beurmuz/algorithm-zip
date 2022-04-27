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

/*
    1. a,b 합치기
    2. 합친 배열의 공통원소 찾기 
     1) index와 index+1이 같은 경우 
     2) answer에 push(index)
*/ 