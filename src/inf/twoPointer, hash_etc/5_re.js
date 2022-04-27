'use strict';

function solution(k, arr){
    let answer = 0;
    let max = 0;

    for(let i = 0; i < a.length-2; i++) {
        let sum = 0;
        for(let j=i; j <i+k; j++) {
            sum += arr[j];
        }
        if(sum > max) max = sum;
    }
    return answer = max;
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));

/*
    연속된 k일동안 최대 매출액 고르기
    1. 이중 반복문으로 k갯수만큼 누적합하며
    2. 기존에 저장해둔 max값 sum값 크기비교하기 
    3. sum > max인 경우, max를 새롭게 갱신
*/