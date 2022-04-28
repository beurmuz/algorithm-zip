'use strict';

function solution(s) {
    let answer;
    let hashObject = new Map();
    for(let key of s) {
        if(hashObject.has(key)) {
            hashObject.set(key, hashObject.get(key)+1);
        } else {
            hashObject.set(key, 1);
        }
    }
    // console.log(hashObject);
    let max = Number.MIN_SAFE_INTEGER;
    for(let [key, value] of hashObject) {
        if(max < value) {
            max = value;
            answer = key;
        }
    }
    return answer;
}

let str="BACBACCACCBDEDE";
console.log(solution(str));

/*
    map으로 각 key가 몇개인지 세어보고, 최댓값찾기
    1. new Map()으로 해시 생성 하기
    2. 반복문 내에서 map.set(key, value)와 map.get(key)를 이용해서 각 key 개수 카운트
     - 해당 key가 있는 경우 value값 1 증가시키기
     - 해당 key가 없는 경우 map.set(key, value)로 해당 key를 만들어주기
    3. 반복문으로 max를 갱신해주고, 그때 key를 answer에 저장
*/