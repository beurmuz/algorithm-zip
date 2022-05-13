'use strict';

function solution(times){
    let answer=0;
    let timeTable = [];
    let count = 0;
    for(let x of times) {
        timeTable.push([x[0], 's']); // 시작시간 
        timeTable.push([x[1], 'e']); // 종료시간
    }
    
    timeTable.sort((a, b) => {
        if(a[0] === b[0]) { // 시간이 같으면 e -> s 순서로 정렬
            return a[1].charCodeAt()-b[1].charCodeAt(); // s, e를 아스키코드로 변환해야함
        } else {
            return a[0]-b[0];
        }
    });
    console.log(...timeTable);

    for(let x of timeTable) {
        if(x[1] === 's') count++;
        else count--;
        answer = Math.max(answer, count);
    }

    return answer;
}

let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution(arr));

/*

*/