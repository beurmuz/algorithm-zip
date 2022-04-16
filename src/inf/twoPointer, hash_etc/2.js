'use strict';

function solution(arr1, arr2){
    let tmp = [];
    let answer=[];
    // [방법1]
    // for(let i = 0; i < arr1.length; i++) {
    //     for(let j = 0; j < arr1.length; j++) {
    //         if(arr1[i]===arr2[j]) answer.push(arr1[i]);
    //     }
    // }
    // answer.sort((a,b) => a-b);
    
    // [방법2]
    tmp = (arr1.concat(arr2)).sort((a,b) => a-b);
    for(let i = 0; i < tmp.length; i++) {
        if(tmp[i]===tmp[i+1]) {
            answer.push(tmp[i]);
        }
    }
    return answer;
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));