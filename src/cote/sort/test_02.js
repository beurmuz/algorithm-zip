'use strict';

function solution(n, arr) {
    // let distanceList = [];
    arr.sort();

    const distanceList = arr.map((v) => {
        let sum = 0;
        for(let i = 0; i < 4; i++) {
            sum += Math.abs(v - arr[i]);
        }
        return sum;
    });
    let minIndex = distanceList.indexOf(Math.min(...distanceList));
    return arr[minIndex];
}

const locationList = [5, 1, 7, 9];
console.log(solution(4, locationList));