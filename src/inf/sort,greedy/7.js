'use strict';

function solution(arr){
    let answer = arr;
    arr.sort((a,b) => {
        if(a[0] === b[0]) { // x가 같은 경우 y에 의해 정렬
            return a[1] - b[1];
        } else { // x에 의해 정렬
            return a[0] - b[0];
        }
    });
    return answer;
}

let arr=[[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]];
console.log(solution(arr));