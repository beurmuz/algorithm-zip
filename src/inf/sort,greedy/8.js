'use strict';

function solution(meeting){
    let answer=[];
    meeting.sort((a, b)=>{
        if(a[1]===b[1]) return a[0]-b[0];
        else return a[1]-b[1];
    });
    console.log(meeting);
    let element = 0;
    for(let x of meeting) {
        if(x[0] >= element) {
            answer.push(x);
            element = x[1];
        }
    }
    return answer.length;
}

let meeting=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
console.log(solution(meeting));

/*
    1. 우선 meeting이 끝나는 시간에 따라 오름차순 정렬하기
        - 끝나는 시간이 같으면 시작 시간에 따라 정렬하기
    2. x[1]을 저장할 element 변수 선언
    3. meeting 배열을 순회하면서 x[0]이 앞의 x[1]보다 큰 경우 
*/