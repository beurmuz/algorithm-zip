'use strict';

function solution(n, arr){
    let answer, max=Number.MIN_SAFE_INTEGER;
    for(let i of arr) {
        let sum = 0;
        let tmp = i;

        // 숫자로만 계산
        while(tmp) {
            sum +=(tmp%10);
            tmp = Math.floor(tmp/10);
        }

        // 내장함수로 계산
        // let tmp = String(i).split('');
        // for(let j of tmp) {
        //     sum += Number(j);
        // }
        if(sum>max) {
            max = sum;
            answer = i;
        } else if(sum===max) {
            if(i>answer) {
                answer = i;
            }
        }
    }
    return answer;
}
let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));