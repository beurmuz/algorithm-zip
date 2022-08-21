'use strict';

// 처음 푼 풀이
function solution(survey, choices) {
    let answer = '';
    let resultHash = new Map();
    let typeChar = 'RTCFJMAN';
    let hash = new Map();
    
    // 점수표 제작 (default: 0)
    for(let char of typeChar) {
        hash.set(char, 0);
    }
    
    // 선택지에 맞게 점수 계산하기
    for(let i = 0; i < survey.length; i++) {
        let keys = survey[i].split('');
        
        switch (choices[i]) {
            case 1:
                hash.set(keys[0], hash.get(keys[0]) + 3);
                break;
            case 2:
                hash.set(keys[0], hash.get(keys[0]) + 2);
                break;
            case 3:
                hash.set(keys[0], hash.get(keys[0]) + 1);
                break;
            case 4:
                break;
            case 5:
                hash.set(keys[1], hash.get(keys[1]) + 1);
                break;
            case 6:
                hash.set(keys[1], hash.get(keys[1]) + 2);
                break;
            case 7:
                hash.set(keys[1], hash.get(keys[1]) + 3);
                break;
        }
    }
    
    // 점수 결과로 mbti 정하기
    for(let [key, value] of hash) {
        if(key === 'R' || key === 'T') {
            let v = hash.get('R') >= hash.get('T') ? 'R' : 'T';
            resultHash.set('m', v);
        } else if(key === 'C' || key === 'F') {
            let v = hash.get('C') >= hash.get('F') ? 'C' : 'F';
            resultHash.set('b', v);
        } else if(key === 'J' || key === 'M') {
            let v = hash.get('J') >= hash.get('M') ? 'J' : 'M';
            resultHash.set('t', v);
        } else if(key === 'A' || key === 'N') {
            let v = hash.get('A') >= hash.get('N') ? 'A' : 'N';
            resultHash.set('i', v);
        }
    }
    
    // 최종 mbti 도출
    for(let [key, value] of resultHash) {
        answer += value;
    }
    return answer;
}

// 2차 요약
/*
    불필요하게 결과 도출이 2번 되는 것 같아 중간에 있는 for문을 하나 삭제해줌
*/
function solution(survey, choices) {
    let answer = '';
    let typeChar = 'RTCFJMAN';
    let hash = new Map();
    
    // 점수표 제작 (default: 0)
    for(let char of typeChar) {
        hash.set(char, 0);
    }
    
    // 선택지에 맞게 점수 계산하기
    for(let i = 0; i < survey.length; i++) {
        let keys = survey[i].split('');
        
        switch (choices[i]) {
            case 1:
                hash.set(keys[0], hash.get(keys[0]) + 3);
                break;
            case 2:
                hash.set(keys[0], hash.get(keys[0]) + 2);
                break;
            case 3:
                hash.set(keys[0], hash.get(keys[0]) + 1);
                break;
            case 4:
                break;
            case 5:
                hash.set(keys[1], hash.get(keys[1]) + 1);
                break;
            case 6:
                hash.set(keys[1], hash.get(keys[1]) + 2);
                break;
            case 7:
                hash.set(keys[1], hash.get(keys[1]) + 3);
                break;
        }
    }
    
    // 점수 결과로 mbti 정하기
    let v = hash.get('R') >= hash.get('T') ? 'R' : 'T';
    answer += v;
    let b = hash.get('C') >= hash.get('F') ? 'C' : 'F';
    answer += b;
    let t = hash.get('J') >= hash.get('M') ? 'J' : 'M';
    answer += t;
    let i = hash.get('A') >= hash.get('N') ? 'A' : 'N';
    answer += i;
    
    return answer;
}

// 최종 !!
/*
    switch문을 없애고 규칙을 이용해 연산함
*/
function solution(survey, choices) {
    let answer = '';
    let typeChar = 'RTCFJMAN';
    let hash = new Map();
    
    // 점수표 제작 (default: 0)
    for(let char of typeChar) {
        hash.set(char, 0);
    }
    
    // 선택지에 맞게 점수 계산하기
    for(let i = 0; i < survey.length; i++) {
        let keys = survey[i].split('');
        if(choices[i] < 4) {
            hash.set(keys[0], hash.get(keys[0]) + (4 - choices[i]));
        } else if(choices[i] > 4) {
            hash.set(keys[1], hash.get(keys[1]) + (choices[i] - 4));
        }
    }
    
    // 점수 결과로 mbti 정하기
    let v = hash.get('R') >= hash.get('T') ? 'R' : 'T';
    answer += v;
    let b = hash.get('C') >= hash.get('F') ? 'C' : 'F';
    answer += b;
    let t = hash.get('J') >= hash.get('M') ? 'J' : 'M';
    answer += t;
    let i = hash.get('A') >= hash.get('N') ? 'A' : 'N';
    answer += i;
    
    return answer;
}