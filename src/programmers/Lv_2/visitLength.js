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


// 다시 풀어보기
/*
    코드를 더 쉽게 바꿔보았지만 테케는 1~7만 통과하고, 정확성은 35.0이다.
*/
function solution(dirs) {
    // 범위를 -5~5가 아닌 0~10으로 잡고 (5,5)를 기준으로 잡기
    let visited = {};
    let now = [5, 5];

    dirs.split('').forEach((dir) => {
        let next = [];
        
        if(dir === 'U') next = [now[0], now[1]+1];
        if(dir === 'D') next = [now[0], now[1]-1];
        if(dir === 'R') next = [now[0]+1, now[1]];
        if(dir === 'L') next = [now[0]-1, now[1]];
        
        if(next[0] >= 0 && next[0] <= 10 && next[1] >= 0 && next[1] <= 10) {
            visited[[now, next]] = true;
            // visited[[next, now]] = true;
            now = next;
        }
    });
    
    // console.log(visited);
    return Object.keys(visited).length;
}


// 결국 해설 찾아보기 ㅠ
function solution(dirs) {
    let move = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] };
    let now = [0, 0];
    let route = new Set();
    
    for (let dir of dirs) {
        let nowX = now[0] + move[dir][0];
        let nowY = now[1] + move[dir][1];
        
        if (nowX > 5 || nowX < -5 || nowY > 5 || nowY < -5) continue;
        
        route.add("" + now[0] + now[1] + nowX + nowY);
        route.add("" + nowX + nowY + now[0] + now[1]);
        
        now = [nowX, nowY];
    }
    
    return route.size / 2;
}