'use strict';

function solution(N, nums) {
    const numArr = nums.split('\n').map((v) => {
        return +v;
    });

    return numArr.sort((a, b) => b-a);
}

console.log(solution(3, '12\n15\n27'));