// 내 풀이
/*
    key에 맞게 value들을 push하고 싶었는데, 여기서 오래걸림

    - 마지막 answer 구하는 공식 설명
    ex) {모자: [빨간색, 파란색], 안경: [초록]}
    총 경우의 수는 5가지(빨간 모자 / 파란 모자 / 초록 안경 / 빨간 모자 + 초록 안경 / 파란 모자 + 초록 안경)
    이를 (모자의 개수 + 1) * (안경의 개수 + 1) -1 로 표현할 수 있음

    - 모자의 경우 (빨간 모자 착용 / 파란 모자 착용 / 아무것도 착용하지 않기) => 총 3가지 경우
    - 안경의 경우 (초록 안경 끼기 / 아무것도 착용하지 않기) => 총 2가지 경우

    - 총 (3 * 2) - (1 * 1)개.
        - (3 * 2)는 각각의 종류에서 선택하는 경우의 수를 구해 더한 것
        - (1 * 1)은 아무것도 선택하지 않는 경우의 수를 구해 더한 것
*/
function solution(clothes) {
    let answer = 0;
    const hash = {};
    // 1. key(종류)에 맞게 value(이름) push하기
    clothes.forEach(v => {
        if(hash[v[1]] === undefined) hash[v[1]] = [];
        hash[v[1]].push(v[0]);
    });
    
    // 2. 종류별 개수 세기
    const count = [];
    for(let index in hash) { // 종류가 index로 인식됨 (유사배열 객체?)
        count.push(hash[index].length + 1);
    };
    
    answer = count.reduce((previous, current) => previous * current, 1) - 1;
    return answer;
}


// 다른 사람 풀이
/*

*/
function solution(clothes) {
    return Object.values(clothes.reduce((obj, t)=> {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
    } , {})).reduce((a,b)=> a*(b+1), 1)-1; // 
}


// 22.07.11 다시 풀어보기
function solution(clothes) {
    let answer = 0;
    const hash = {};
    
    // key에 따라 value 넣기
    clothes.forEach((v) => {
        if(!hash[v[1]]) hash[v[1]] = [];
        hash[v[1]].push(v[0]);
    });
    
    const count = [];
    for(let index in hash) {
        count.push(hash[index].length + 1);
    }
    
    answer = count.reduce((pre, cur) => pre*cur, 1) -1;
    return answer;
}