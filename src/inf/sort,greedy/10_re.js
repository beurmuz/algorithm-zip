'use strict';

function solution(arr, m) {
    let answer = 0;
    arr.sort((a,b) => a-b);

    let left = 0;
    let right = arr.length-1;

    while(left <= right) {
        let mid = parseInt((left+right)/2);
        if(arr[mid] === m) {
            answer = mid + 1;
            break;
        } else if(arr[mid] > m) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(arr, 32));

/*
    - 이분검색은 정렬한 배열에서 중간 값을 이용해 주어진 값을 찾는 알고리즘
*/