'use strict';

function solution(meeting){
    let answer=0;
    meeting.sort((a,b) => {
        if(a[1]===b[1]) {
            return a[0]-b[0];
        } else {
            return a[1]-b[1];
        }
    })
    let endTime = 0;
    for(let x of meeting) {
        if(x[0] >= endTime) {
            console.log(`${x[0]}~${x[1]}시 가능`);
            answer++;
            endTime = x[1]; // 회의가 끝나는 시간으로 업데이트 
        }
    }
    return answer;
}

let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
console.log(solution(arr));