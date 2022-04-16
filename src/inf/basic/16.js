'use strict';

function solution(s){  
    let answer="";

    // 방법 1
    const set = new Set(s);
    const temp = [...set];
    for(let i in temp) {
        answer += temp[i];
    }

    // 방법 2
    /*console.log(s.indexOf('k'));
    for(let i = 0; i < s; i++) {
        console.log(s[i], i, s.indexOf(s[i]));
        if(s.indexOf(s[i])===i) {
            answer += s[i];
        }
    }*/

    // 외전 - k의 갯수 세기
    /*let answer = 0;
    let pos = s.indexOf('k');
    while(pos!== -1) { // 못찾으면 -1이 되어 반복문 종료 후, answer에 0 리턴
        answer++; // 카운팅
        pos = s.indexOf('k', pos+1); // 첫번째로 찾은 위치 그 뒷편부터 찾아라!
    }*/
    return answer;
}
console.log(solution("qldkwswdwww"));