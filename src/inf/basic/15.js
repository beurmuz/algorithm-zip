'use strict';

function solution(s){  
    let answer = '';

    // 방법1
    let pickNum=[];
    if(s.length%2===0) {
        pickNum.push(Math.floor(s.length/2)-1);
        pickNum.push(Math.floor(s.length/2));
        answer += (s[pickNum[0]] + s[pickNum[1]]);
    } else {
        pickNum.push(Math.floor(s.length/2));
        answer += (s[pickNum[0]]);
    }

    // 방법2
    // let mid = Math.floor(s.length/2);
    // if(s.length%2 === 1) {
    //     answer = s.substring(mid, mid+1);
    //     answer = s.substr(mid, 1);
    // } else {
    //     answer = s.substring(mid-1, mid+1);
    //     answer = s.substr(mid-1, 2);
    // }

    return answer;
}
console.log(solution("stsdffeudy"));