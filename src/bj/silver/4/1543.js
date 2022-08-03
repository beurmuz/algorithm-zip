'use strict';

const file = process.platform === 'linux' ? '/dev/stdin' : './data/1302.txt';
const [sentence, word] = require('fs').readFileSync(file).toString().trim().split('\n');

let index = 0;
let count = 0;

while(index < sentence.length) {
    const newIndex = sentence.slice(index).search(word);
    if(newIndex >= 0) {
        count++;
        index += newIndex + word.length;
    } else break;
}

console.log(count);


/*
    문서 내에서 첫 번째 주어진 단어를 찾고 count를 증가시킴
    -> 그 단어 바로 다음 내용부터 같은 과정을 반복
    -> 만약 주어진 단어가 더 이상 없으면 반복을 종료

    * String.prototype.search는 찾고자 하는 문자열이 존재하지 않으면 -1을 반환
    * newIdx가 0 이상이면 주어진 단어가 존재한다는 것
*/