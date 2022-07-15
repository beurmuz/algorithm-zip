'use strict';

function solution(n, planList) {
    let answer = '';
    let x = 1, y = 1;

    // L,R,U,D에 따른 이동방향: L(0, -1), R(0, 1), U(-1, 0), D(1, 0)
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    const direction = ['L', 'R', 'U', 'D'];
    let count = 0;
    
    planList.forEach((plan) => {
        for(let i = 0; i < direction.length; i++) {
            let nx = 0, ny = 0;
            if(plan === direction[i]) {
                nx = x + dx[i];
                ny = y + dy[i];
            }
            if(nx < 1 || nx > n || ny < 1 || ny > n) continue;
            x = nx, y = ny;
        }
    });
    answer = `${x} ${y}`;
    return answer;
}

const planList = ['R', 'R', 'R', 'U', 'D', 'D'];
console.log(solution(5, planList));