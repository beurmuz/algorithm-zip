'use strict';

function solution(n, store, m, guest) {
    let answer = [];
    store.sort();

    for(let i = 0; i < m; i++) {
        let result = binarySearch(guest, i, 0, n-1);
        if(result > 0) answer.push('yes');
        else answer.push('no');
    }
    return answer;
}

function binarySearch(arr, target, start, end) {
    while(start <= end) {
        let mid = Math.floor((start + end)/2);
        console.log(mid);
        if(arr[mid] === target) return mid;
        else if(target < arr[mid]) end = mid - 1;
        else start = mid + 1;
    }
    return false;
}

const storeHave = [8, 3, 7, 9, 2];
const guestRequest = [5, 7, 9];
console.log(solution(5, storeHave, 3, guestRequest));