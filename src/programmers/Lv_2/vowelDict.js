'use strict';

// 재귀로 푼 풀이
/*
    다만 속도가 너무.. 시간이 너무 오래걸린다.
*/
function solution(word) {
    let vowel = ["","A","E","I","O","U"];
    let result = [];

    function recurtion (n, str){
        if(n === 0) {
            result.push(str);
            return;
        }
        for(let i = 0 ; i <= 5 ; i++) {
            recurtion(n-1,`${str}${vowel[i]}`);
        }
    }
    recurtion(5,"");
    
    let data = [...new Set(result)].sort();
    return data.indexOf(word);
}

// 아주 간단한 풀이 - 속도 엄~청 빠르다
/*
    - 각 자릿수에 대해 생기는 경우의 수([781, 156, 31, 6, 1]),
    - 사전 순 나열이니 위의 경우의 수를 건너뛰기 위해 인덱스를 곱해주고
    - 중간에 'A'문자가 한번씩 끼니 +1 해주기
*/
function solution(words) {
    return words.split('').reduce((r, c, i) => r + [781, 156, 31, 6, 1][i] * ['A', 'E', 'I', 'O', 'U'].indexOf(c) + 1, 0);
}

