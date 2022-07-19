'use strict';

function solution(position) {
    let answer = 0;
    let [x, y] = position.split('');
    const column = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    y = column.indexOf(x)+1; // col
    x = y*1; // rowㄴ
    const steps = [[-2, 1], [-1, 2], [1, 2], [2, 1], [2,-1], [1,-2], [-1, -2], [-2, -1]];

    steps.forEach((pos) => {
        let nx = x + pos[0];
        let ny = y + pos[1];
        if(nx >= 1 && ny >= 1 && nx <= 8 && ny <= 8) answer++;
    });
    return answer;
}

console.log(solution('a1'));