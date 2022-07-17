'use strict';

function solution(n, arr) {
    let answer = '';
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    const direction = ['L', 'R', 'U', 'D'];
    let x = 1, y = 1; // 시작점

    arr.forEach((dir) => {
        for(let i = 0; i < direction.length; i++) {
            let nx = 0, ny = 0;
            if(dir === direction[i]) {
                nx = x + dx[i];
                ny = y + dy[i];
            }
            if(nx < 1 || nx > n || ny < 1 || ny > n) continue;
            x = nx;
            y = ny;
        }
    });
    answer += `${x} ${y}`;
    return answer;
}

const arr = ['R', 'R', 'R', 'U', 'D', 'D'];
console.log(solution(5, arr));