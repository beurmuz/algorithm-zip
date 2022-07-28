'use strict';

function solution(n, x, arr) {
    let count = 0;
    function binarySearch(arr, target, start, end) {
        let mid = Math.ceil(start+end/2);
        if(arr[mid] === target) count++;
        if(arr[mid] > target) end = mid - 1;
        else if(arr[mid] < target) start = mid + 1;
    }
    return count;
}

const numberList = [1, 1, 2, 2, 2, 2, 3];
console.log(solution(7, 2, numberList));