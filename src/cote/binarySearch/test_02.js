'use strict';

function solution(n, str) {
    const arr = str.split(' ').map((v) => +v);
    let answer = binarySearch(arr, 0, n-1);
    return !answer ? -1 : answer;
}

function binarySearch(arr, start, end) {
    if(start > end) return -1;
    let mid = Math.floor((start+end)/2);

    // 고정점을 찾은 경우
    if(mid === arr[mid]) return mid;

    // mid가 가리키는 위치의 값보다 mid가 작은 경우
    else if(mid < arr[mid]) return binarySearch(arr, start, mid-1);
    else return binarySearch(arr, mid+1, end);
}

console.log(solution(7, '-15 -4 3 8 9 13 15'));