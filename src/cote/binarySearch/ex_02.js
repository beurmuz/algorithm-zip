'use strict';

function solution(n, m, riceLists) {
    const maxLength = Math.max(...riceLists);
    const answer = binarySearch(riceLists, m, 0, maxLength);
    return answer;
}

function binarySearch(riceLists, target, start, end) {
    while(1) {
        let mid = Math.floor((start + end)/2);
        let restSum = 0;
        for(let i = 0; i < riceLists.length; i++) { // 0~n까지 반복
            if(riceLists[i] > mid) restSum += (riceLists[i] - mid);
            else restSum += 0;
        }
        
        if(restSum === target) return mid;
        else if(restSum > target) {
            start = mid+1;
        } else end = mid-1;
    }
}

const riceLists = [19, 15, 10, 17];
// const riceLists = [7, 9, 3, 5];
console.log(solution(4, 6, riceLists));