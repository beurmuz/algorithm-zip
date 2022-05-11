'use strict';

function solution(arr) {
    let answer = [];
    let sortedArray = arr.slice();
    sortedArray = sortedArray.sort((a,b) => a-b);

    for(let i = 0; i < arr.length; i++) {
        if(sortedArray[i] !== arr[i]) answer.push(i+1);
    }
    
    return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));

/*
    - arr를 다른 배열에 깊은복사 후 sort하기
    - sort한 배열과 arr를 비교해 값이 다른 경우 해당 index+1을 answer배열에 push하기
*/