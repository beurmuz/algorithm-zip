'use strict';

/*
    이전 단어의 끝과 현재 단어의 맨 앞을 비교
    words 배열을 slice로 현재 값을 잘라서, 남은 배열에 있는지 비교한다.
*/
function solution(n, words) {
    let answer = [];
    let turn = 1;
    let count = 0;
    
    for(let i = 1; i < words.length; i++) {
        let pass = (words[i][0] === words[i-1][words[i-1].length-1]) && !(words.slice(0, i).includes(words[i]));
        if(i % n === 0) turn++;
        if(!pass) return [i % n + 1, turn]; // 틀리면 바로 종료
    }
    return [0, 0];
}