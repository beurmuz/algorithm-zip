'use strict';

function compareMaps(map1,map2) {
    // key 개수가 다른경우
    if(map1.size!==map2.size) return false;

    // key 개수는 같지만 그 종류가 같은지 비교
    for(let [key, value] of map1) {
        // 1. map2에 map1의 key가 있는지 확인 
        // 2. map2에 map1의 key가 있는데, 그 key의 map2의 value값과 map1의 value값이 다르면
        if(!map2.has(key) || map2.get(key)!==value) return false;
    }
    return true;
}

function solution(s, t) {
    let answer = 0;
    let tH = new Map();
    let sH = new Map();
    for(let key of t) {
        if(tH.has(key)) {
            tH.set(key, tH.get(key)+1);
        } else {
            tH.set(key, 1);
        }
    }

    // 2개 추가
    let length = t.length-1;
    for(let i = 0; i < length; i++) {
        if(sH.has(s[i])) {
            sH.set(s[i], sH.get(s[i])+1);
        } else {
            sH.set(s[i], 1);
        }
    }

    // two pointer로 sliding window 시작
    let lt = 0; // 시작점
    for(let rt = length; rt < s.length; rt++) {
        // 추가하고
        if(sH.has(s[rt])) {
            sH.set(s[rt], sH.get(s[rt])+1);
        } else {
            sH.set(s[rt], 1);
        }
        // 비교
        if(compareMaps(sH, tH)) {
            answer++;
        }
        // lt 빼기 (추가한거 빼는 작업)
        sH.set(s[lt],sH.get(s[lt])-1);
        if(sH.get(s[lt])===0) {
            sH.delete(s[lt]);
        }
        // lt를 1 증가시켜 rt를 쫓아가야 함
        lt++; 
    }

    return answer;
}

let s = 'bacaAacba';
let t = 'abc';
console.log(solution(s,t));

/*
    부분된 문자열은 연속된 문자열이어야하며, 아나그램이어야 함
    1. 부분 문자열의 해시맵부터 완성하기 
    2. sH의 3번째 해시맵을 구하는 순간 tH의 해시맵과 비교하기(compare function 만들기)

*/