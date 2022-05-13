'use strict';

function solution(arr) {
    let answer = arr;
    arr.sort((a,b) => {
        if(a[0] === b[0]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    })
    return answer;
}

let arr = [[2,7], [1,3], [1,2], [2,5], [3,6]];
console.log(solution(arr));

/*
    sort로 2차원 배열 정렬하기
    - 만약 x가 값으면 y값을 기준으로 오름차순 정렬
    - x값 비교는 a[0], b[0]으로 하고
    - y값 비교는 a[1], b[1]로 하기 
*/