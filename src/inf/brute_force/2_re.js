'use strict';

function isPrime(num){
    if(num===1) { // 1은 소수도 합성수도 아니므로
        return false;
    }
    for(let i = 2; i < Math.floor(num/2); i++) { // num의 절반까지 도는데 
        if(num%i===0) { // 약수로 1과 자기 자신을 뺀 다른 것이 나오면 
            return false; // 합성수
        }
    }
    return true;
}

function solution(arr){
    let answer=[];
    for(let x of arr) {
        let res = Number(x.toString().split('').reverse().join(''));
        if(isPrime(res)) {
            answer.push(res);
        }
    }
    return answer;
}

console.time("시간");
let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
console.timeEnd("시간");