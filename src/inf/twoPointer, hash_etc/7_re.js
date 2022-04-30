'use strict';

function solution(str1, str2){
    let answer='YES'; 
    let aH = new Map();

    for(let key of str1) {
        if(aH.has(key)) {
            aH.set(key, aH.get(key)+1);
        }
        else {
            aH.set(key, 1);
        }
    }
    
    for(let key of str2) {
        // str2의 key가 aH에 없거나 key는 있는데 그 value가 0인 경우
        if(!aH.has(key) || aH.get(key)===0) {
            answer = 'NO';
        } else {
            aH.set(key, aH.get(key)-1);
        }
    }
    return answer;
}

let a="abaCC";
let b="Caaab";
console.log(solution(a, b));

/*
    1. new Map()으로 아나그램 구하기
    2. 같은 key가 있는 경우 value값 줄이기
*/