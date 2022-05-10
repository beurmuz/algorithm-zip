'use strict';

function solution(arr) {
    let answer = arr;
    for(let i = 1; i < arr.length; i++) {
        let tmp = arr[i];
        let j;
        for(j = i-1; j >= 0; j--) {
            if(arr[j] > tmp) {
                arr[j+1] = arr[j];
            } else {
                break;
            }
        }
        arr[j+1] = tmp;
    }
    return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));

/*
    삽입 정렬은 이중 for문을 이용해 해결할 수 있음
    i는 1부터 arr.length까지 반복하며, 매번 tmp에 arr[i]의 값을 임시 저장해둘것
    j는 i-1부터 0까지 반복하며 arr[i]의 값과 arr[j]의 값을 비교해 위치를 바꿔줌 (j는 i의 앞부분을 반복하는 것)
*/