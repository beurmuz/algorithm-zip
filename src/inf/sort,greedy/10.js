'use strict';

function solution(target, arr){
    let answer = 0;
    arr.sort((a,b) => a-b);
    console.log(...arr);
    
    let leftPivot = 0;
    let rightPivot = arr.length-1;                
    while(leftPivot < rightPivot) {
        let middlePivot = parseInt(leftPivot+rightPivot)/2;
        if(arr[middlePivot] === target) {
            answer = middlePivot+1;
            break;
        } else if(arr[middlePivot] > target) {
            rightPivot = middlePivot-1;
        } else {
            leftPivot = middlePivot+1;
        }
        return answer;
    }
    
}

let arr=[23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));