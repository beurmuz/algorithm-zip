'use strict';

function solution(arr){
    // let answer=[];
    let sum=0, min=100;
    for(let i=0; i<arr.length; i++) {
        if(arr[i]%2!=0) {
            // answer.push(arr[i]);
            sum += arr[i];
            if(arr[i]<min) {
                min = arr[i];
            }
        }
    }
    // answer.push(sum);
    // answer.push(min);
    console.log(sum);
    console.log(min);
    // return answer;
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));