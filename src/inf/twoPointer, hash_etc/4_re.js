'use strict';

function solution(m, arr){
    let answer=0;
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        let sum = 0;
        for(let j = i; j < arr.length; j++) {
            sum += arr[j];
            if(sum > m) {
                break;
            } else if(sum <= m) {
                count++;
            }
        }
        answer = count;
    }
    return answer;
}

let a=[1, 3, 1, 2, 3];
console.log(solution(5, a));

/*
    1. 이중 반복문 사용
    2. 누적합을 저장할 sum 변수 선언 후 sum > m인 경우는 반복문 탈출, 
    3. sum <= m인경우마다 count증가
*/