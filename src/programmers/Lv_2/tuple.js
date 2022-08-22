'use strict';

function solution(s) {
    let answer = [];
    let setList = s
        .slice(2, -2)
        .split('},{')
        .map((set) => set.split(',').map((v) => +v));
    
    // 길이순 정렬
    setList.sort((a, b) => {
        return a.length - b.length;
    });
    
    for(let set of setList) {
        answer.push(...set.filter(x => !answer.includes(x)));
    }
    return answer;
}