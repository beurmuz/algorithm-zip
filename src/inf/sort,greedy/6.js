'use strict';

function solution(arr){
    let answer=[];
    let sortArr=arr.slice(); // 배열의 복사 
    sortArr.sort((a, b)=>a-b);
    console.log(sortArr);

    for(let i = 0; i < arr.length; i++) {
        if(arr[i]!==sortArr[i]) {
            answer.push(i+1);
        }
    }
    return answer;
}

let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));