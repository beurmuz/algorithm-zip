'use strict';

function solution(array){
    let answer=array;
    for(let i = 0; i < array.length; i++) {
        for(let j = i; j < array.length-1; j++) {
            if(array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }
    return answer;
}

let array=[13, 5, 11, 7, 23, 15];
console.log(solution(array));

/*
    - 버블 정렬: 인접한 두 값을 비교해 값의 크기에 따라 값을 바꿔주는 방법
    - 이중 for문 이용하기
    -> i는 0부터 array.length까지 반복
    -> j는 i부터 array.length-1까지 반복
    -> j와 j+1을 비교해 값이 순서대로 되어있지 않다면 구조분해 할당으로 바로 교환하기 
*/