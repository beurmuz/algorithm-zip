'use strict';

// 처음에 푼 코드 -> 시간 초과
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../1012.txt';
let [count, ...inputs] = require('fs').readFileSync(filePath).toString().trim().split('\n');
let [N, M] = count.split(' ');
const monsterList = Array.from({length: +N+1}, () => '');
const questions = Array.from({length: +M}, () => '');
for(let i = 0; i < +N; i++) { // 몬스터 도감 생성
    monsterList[i+1] = inputs[i];
}

for(let j = 0; j < +M; j++) { // 문제 생성
    questions[j] = inputs[+N+j];
}

for(let k = 0; k < +M; k++) {
    if(monsterList[questions[k]]) console.log(monsterList[questions[k]]);
    else console.log(monsterList.indexOf(questions[k]));
}


// 제출한 코드
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../1012.txt';
let inputs = require('fs').readFileSync(filePath).toString().trim().split(/\s/); // split을 이렇게 해주어야 시간초과가 안남
let N = +inputs[0];
let M = +inputs[1];
const monsterArr = inputs.slice(2, N+2);
const monsterMap = new Map(monsterArr.map((v, i) => [v, i+1]));
const questions = inputs.slice(N+2);
let answer = [];

questions.forEach((v) => {
    if(Number.isNaN(+v)) console.log(monsterMap.get(v)); // 문자일 때 인덱스 번호 가져오기
    else console.log(monsterArr[+v-1]);
});