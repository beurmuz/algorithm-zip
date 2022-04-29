'use strict';

function solution(str1, str2){
    let answer='YES'; 
    let str1Hash = new Map();

    for(let key of str1) {
        if(str1Hash.has(key)) {
            str1Hash.set(key, str1Hash.get(key)+1);
        } else {
            str1Hash.set(key, 1);
        }
    }
    console.log(str1Hash);

    for(let key of str2) {
        if(!str1Hash.has(key) || str1Hash.get(key)==0) {
            return 'NO';
        }
        str1Hash.set(key, str1Hash.get(key)-1);
    }
    return answer;
}

let a="abaCC";
let b="Caaab";
console.log(solution(a, b));

/*
    str1에 대해 해시 생성하기
    아나그램이 아닌 경우를 먼저 찾아서 반복문을 바로 끝내야함
    - 우선 key값이 있는지부터 검사하고, 만약 key값은 있는데 value가 0이면 'NO'를 반환
    - 만약 키 값도 있고 키 값이 0이 아니면 하나씩 빼서 상쇄시키기
*/