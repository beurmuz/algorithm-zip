'use strict';

function solution(arr){  
    let n=arr.length; // 5
    let answer = Array.from({length:5}, ()=>1);  //1차원 배열을 1로 다 초기화 함
    // console.log(answer);
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(arr[j]>arr[i]) answer[i]++;
        }
    }
    return answer;
}

let arr=[100, 100, 92, 100, 76];
console.log(solution(arr));