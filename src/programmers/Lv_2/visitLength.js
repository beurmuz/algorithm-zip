'use strict';

// 처음에 푼 풀이
/*
    hashMap 이용하기
    - 테케 1~5만 통과해서 정확성이 25.0이 나왔다.
*/
function solution(dirs) {
    // 범위를 -5~5가 아닌 0~10으로 잡고 (5,5)를 기준으로 잡기
    let visitMap = new Map();
    let now = [5, 5];

    dirs.split('').forEach((dir) => {
        const next = move(now, dir);
        visit(now, next, visitMap);
        now = next;
    });
    return visitMap.size;
}

const visit = (start, end, visitMap) => {
    if(start[0] === end[0] && start[1] === end[1]) return;
    let startStr = `${start[0]}${start[1]}`;
    let endStr = `${end[0]}${end[1]}`;
    if(visitMap.has(startStr) && visitMap.get(startStr) === end) return;
    if(visitMap.has(endStr) && visitMap.get(endStr) === startStr) return;
    visitMap.set(startStr, endStr);
}


const move = ([x, y], dir) => {
        let next = [x, y];
        if(dir === 'U') next = [x, y+1];
        if(dir === 'D') next = [x, y-1];
        if(dir === 'R') next = [x+1, y];
        if(dir === 'L') next = [x-1, y];
        if (next[0] < 0 || next[0] > 10 || next[1] < 0 || next[1] > 10) return [x, y];
        return next;
}
