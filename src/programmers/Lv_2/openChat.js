'use strict';

function solution(record) {
    let answer = [];
    
    // 1. map으로 userId에 따라 userName 관리하기
    let historyMap = new Map();
    record.forEach((v) => {
        let [behavior, userId, userName] = v.split(' ');
        if(behavior === 'Enter' || behavior === 'Change') {
            historyMap.set(userId, userName);
        }
    });
    
    record.forEach((v) => {
        let [behavior, userId, userName] = v.split(' ');
        if(behavior === 'Enter') answer.push(`${historyMap.get(userId)}님이 들어왔습니다.`);
        else if(behavior === 'Leave') answer.push(`${historyMap.get(userId)}님이 나갔습니다.`);
    });
    
    return answer;
}