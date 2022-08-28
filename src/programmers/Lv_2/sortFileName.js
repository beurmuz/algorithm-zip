'use strict';

function solution(files) {
    let answer = [];
    let numberReg = /[0-9]+/
    
    answer = files.sort((a, b) => {
        let [matchA, matchB] = [a.match(numberReg), b.match(numberReg)];
        let [headA, headB] = [a.slice(0, matchA.index).toLowerCase(), b.slice(0, matchB.index).toLowerCase()];
        let [numberA, numberB] = [parseInt(matchA[0]), parseInt(matchB[0])];
        return headA < headB ? -1 : headA > headB ? 1 : numberA < numberB ? -1 : numberA > numberB ? 1 : 0
        // return 값이 0보다 작으면 a를 우선하여 정렬, a-b와 같음 (오름차순)
        // return 값이 0보다 크면 b를 우선하여 정렬, b-a와 같음 (내림차순)
    });
    return answer;
}

/*
    위의 식이 이해가 안된다면 
    files.forEach((v) => {
        let matchV = v.match(numberReg);
        console.log(matchV);
        let headV = v.slice(0, matchV.index).toLowerCase();
        console.log(headV); // img
        let numberV = parseInt(matchV[0]);
        console.log(numberV); // 12
    });
    해당 코드로 어떤 값이 나오는지 확인해보자.
*/