'use strict';

function solution(array) {
    // 1) array.push()로 풀기
    /*
    let answer = [];
    let negativeStack = [];
    let positiveStack = [];
    for(let x of array) {
        if(x > 0) {
            positiveStack.push(x);
        } else if(x < 0) {
            negativeStack.push(x);
        }
    }
    answer = negativeStack.concat(positiveStack);
    */

    // 2) bubble sort 이용해서 풀기
    let answer = array;
    for(let i = 0; i < array.length-1; i++) {
        for(let j = 0; j < array.length-i-1; j++) {
            if(array[j] > 0 && array[j+1] < 0) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }

    return answer;
}

let array = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(array));

/*
    1) array.push()로 풀어도 됨
    2) 굳이 sort로 풀어보라하면 버블정렬을 이용하면 됨
    - 앞이 양수, 뒤가 음수인 경우에만 바꿔줌 (순서를 유지해야하니 -, +인지 여부에 따라서만 바꿔주면 됨)
*/