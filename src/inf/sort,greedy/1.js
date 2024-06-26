'use strict';

function solution(arr){
    let answer=arr;
    for(let i = 0; i < arr.length; i++) {
        let min = i; // 특정 값을 선택해서 값을 교환함
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j]<arr[min]) {
                min = j; 
            }
            [arr[i], arr[min]] = [arr[min], arr[i]]; // 구조분해할당
        }
    }
    return answer;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));