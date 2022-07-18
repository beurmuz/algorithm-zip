'use strict';

function solution(n) {
    let answer = 0;

    for(let h = 0; h <= n; h++) {
        for(let m = 0; m < 60; m++) {
            for(let s = 0; s < 60; s++) {
                let tmp = (''+h) + (''+m) + (''+s);
                if(tmp.match(/3/g)) answer++;
            }
        }
    }

    return answer;
}

console.log(solution(5));