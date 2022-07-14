'use strict';

function solution(N, M, arr) {
    let answer = 0;
    let numsList = arr.map((v) => {return Math.min(...v)});
    answer = Math.max(...numsList);
    return answer;
}

let numArray = [[3,1,2],
                [4,1,4],
                [2,2,2,]];

let numArray2 = [[7,3,1,8],
                 [3,3,3,4]];

// console.log(solution(3,3,numArray));
console.log(solution(2,4,numArray2));

/*
    각 행마다 가장 작은 수를 찾은 후, 그 수들 중 가장 큰 수를 출력하면 됨
*/