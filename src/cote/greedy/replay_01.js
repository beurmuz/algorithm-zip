'use strict';

function solution(n, m, k, arr) {
    arr.sort((a, b) => b-a);
    const first = arr[0];
    const second = arr[1];
    let acc = 0;
    let replayCount = Math.floor(m/(k+1));
    acc = (first * k) * replayCount + (second * 1) * replayCount;
    
    return m%(k+1) === 0 ? acc : acc + (m%(k+1) * first) ;
}

const numArray = [2, 4, 5, 4, 6];
console.log(solution(5, 8, 3, numArray));