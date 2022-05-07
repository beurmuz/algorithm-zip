'use strict';

function solution(arr){
    let answer=[];
    let minusArray = [];
    let plusArray = [];

    for(let i of arr) {
        if(i<0) {
            minusArray.push(i);
        } else {
            plusArray.push(i);
        }
        answer=minusArray.concat(plusArray);
    }
    return answer;
}

let arr=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));