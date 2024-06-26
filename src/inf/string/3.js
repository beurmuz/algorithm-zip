'use strict';

function solution(str){
    // let answer="";
    // for(let x of str){
    //     if(!isNaN(x)) { // 숫자일 때 참이어야 하니 !를 붙여줌
    //         answer += x;
    //     }
    // }  
    // return parseInt(answer);

    // 방법2 - parseInt를 쓰지 않고 하는 방법
    let answer = 0;
    for(let x of str) {
        if(!isNaN(x)) {
            answer = answer*10+Number(x);
        }
    }
    return answer;
}

let str="g0en2T0s8eSoft";
console.log(solution(str));