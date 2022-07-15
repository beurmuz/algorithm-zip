'use strict';

function solution(n) {
    let answer = 0;
    const colList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const col = colList.indexOf(n[0])+1;
    const row = n[1]*1;
    const steps = [[-2, 1], [-1, 2], [1, 2], [2, 1], [2,-1], [1,-2], [-1, -2], [-2, -1]];

    steps.forEach((step) => {
        let nx = row + step[0];
        let ny = col + step[1];
        if(nx >= 1 && ny >= 1 && nx <= 8 && ny <= 8) answer++;
    });
    return answer;
}

console.log(solution('a1'));