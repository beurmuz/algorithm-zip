'use strict';

function solution(arr) {
    let answer = arr;
    for(let i = 0; i < arr.length-1; i++) {
        for(let j = i; j < arr.length-1-i; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                console.log(arr);
            }
        }
    }
    return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));

/*
    버블정렬은 이중 반복문으로 구현할 수 있음
    - i는 0부터 arr.length-1까지
    - j는 i부터 arr.length-1-i까지
        - j를 arr.length-1-i까지 반복하는 이유는, 버블정렬 시
*/