'use strict';

function solution(arr){
    let answer=arr;
    for(let i = 0; i < arr.length; i++) {
        let tmp = arr[i], j;
        for(j = i-1; j >= 0; j--) {
            if(arr[j] > tmp) {
                arr[j+1] = arr[j];
            } else {
                break;
            }
        }
        arr[j+1] = tmp;
        console.log(answer);
    }
    return answer;
}

let arr=[11, 7, 5, 6, 10, 9];
console.log(solution(arr));

/*
    - i는 1부터 arr.length까지 반복
    - tmp 배열에 arr[i]를 임시로 저장해놓고, j는 i-1부터 0까지 반복함
        - j는 i의 앞을 도는 것
*/

