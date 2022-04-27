'use strict';

function solution(m, arr){
    let answer=0;
    let count = 0;

    for(let i = 0; i < arr.length; i++) {
        let sum = 0;
        for(let j = i; j < arr.length; j++) {
            sum +=arr[j];
            if(sum > m) {
                break;
            } else if(sum === m) {
                count++;
            }
        }
        answer = count;
    }
    return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));

/*
    1. 기준 배열이 있고, 기준 배열부터 그 이후를 누적합해야함 (이중 반복문 사용)
    2. sum이라는 누적합 변수를 생성하고 만약 이 누적합이 m보다 크면 반복문 탈출 (break)
    3. sum이 m과 같은 경우 count라는 변수를 1증가시킴
*/