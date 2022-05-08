'use strict';

function solution(array) {
    let answer = array; // 얕은 복사 (answer가 arr을 가리키게 되어 arr을 바꾸면 answer도 같이 바뀜)
    for(let i = 0; i < array.length; i++) {
        let index = i;
        for(let j = i+1; j < array.length; j++) {
            if(array[index] > array[j]) {
                index = j;
            }
        }
        [array[index], array[i]] = [array[i], array[index]];
    }
    return answer;
}

let array = [13, 5, 11, 7, 23, 15];
console.log(solution(array));

/*
    선택정렬: 배열에서 최솟값을 찾아 가장 첫번째 자료와 그 값을 교환함 
    -> i, j의 이중반복문으로 j=i+1부터 시작함
    -> j=i+1부터 array.length까지 반복문을 돌면서 최솟값을 찾기
    -> array[i]와 array[최솟값]을 구조분해 할당으로 값 바꿔주기
*/