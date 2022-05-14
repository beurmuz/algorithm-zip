'use strict'; 

function solution(arr) {
    let answer = 0;
    let timeTable = [];
    for(let x of arr) {
        timeTable.push([x[0], 's']);
        timeTable.push([x[1], 'e']);
    }
    console.log(...timeTable);

    
    timeTable.sort((a,b) => {
        if(a[0] === b[0]) {
            return a[1].charCodeAt() - b[1].charCodeAt();
        } else {
            return a[0] - b[0];
        }
    });
    
    let count = 0;
    for(let x of timeTable) {
        if(x[1] === 's') {
            count++;
        } else {
            count--;
        }
        answer = Math.max(answer, count);
    }
    console.log(...timeTable);

    return answer;
}

let arr = [[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution(arr));

/*
    - arr를 끝 시간과 시작시간으로 나누어 새로운 배열에 저장하기
    - timeTable을 시간에 따라 정렬하고, 시간이 같은 경우 e가 먼저 정렬될 수 있도록 하기
    - 반복문을 돌면서 e를 만나면 count--를, s를 만나면 count++을 해주어 answer와 count 중 max를 answer에 저장하기 (동시에 존재하는 최대 인원수를 구해야하기 때문) 
*/