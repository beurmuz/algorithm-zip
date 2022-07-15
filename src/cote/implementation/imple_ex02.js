'use strict';

function solution(n) {
    let answer = 0;
    const h = n;

    for(let i = 0; i <= h; i++) {
        for(let j = 0; j < 60; j++) {
            for(let k = 0; k < 60; k++) {
                i = ''+i;
                j = ''+j;
                k = ''+k;
                let str = [i[0], i[1], j[0],j[1],k[0],k[1]];
                if(str.includes('3')) answer++;
            }
        }
    }
    return answer;
}

console.log(solution(5));

// 1day: 86400s
// 시, 분, 초에 대한 경우의 수는 24*60*60