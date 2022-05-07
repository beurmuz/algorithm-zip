'use strict';

function solution(arr) {
    let answer;
    for(let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for(let j = i+1; j < arr.length; j++) {
            if(arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        console.log(...arr);
    }
    answer = arr;
    return answer;
}

let array = [13, 5, 11, 7, 23, 15];

console.log(solution(array));

/*
    - 중첩 반복문 사용
    - 외부: i는 array.length까지 반복
    - 내부: j는 i+1부터 array.length까지 반복
        - 최솟값을 찾아서 그 값을 i 자리에 삽입
*/