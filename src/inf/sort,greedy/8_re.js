'use strict';

function solution(arr) {
    let answer = [];
    
    arr.sort((a,b) => {
        if(a[1] === b[1]) {
            return a[0] - b[0];
        } else {
            return a[1] - b[1];
        }
    });
    
    let endTime = 0;
    for(let x of arr) {
        if(x[0] >= endTime) {
            answer.push(x);
            endTime = x[1];
        }
    }
    return answer.length;
}

let arr = [[1,4],[2,3],[3,5],[4,6],[5,7]];
console.log(solution(arr));

/*
    - 회의를 가장 많이 할 수 있어야 하는게 포인트
    - 회의가 짧아야 그 다음에 많은 시간이 남아서 다른걸 더 많이 할 수 있음
        -> 끝나는 타임으로 정렬을 해야함 
    - a의 끝나는 시간과 b의 시작시간을 비교하기 위해 a의 끝나는 시간을 저장하는 변수 생성
*/