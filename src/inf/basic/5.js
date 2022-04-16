'use strict';

function solution(arr){         
    let answer, min=0;
    min = (arr[0])*1;
    for(i = 1; i < arr.length; i++) {
        if(min > arr[i]) {
            min = (arr[i])*1;
            // console.log("min값은 : "+min);
        } 
        answer = min;
    }
    return answer;
}

let arr=[5, 7, 10, 3, 17, 9, 11];
console.log(solution(arr));