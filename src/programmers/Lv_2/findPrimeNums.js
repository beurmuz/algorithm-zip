'use strict';

// 처음에 푼 풀이, 정확성 65
function solution(n, k) {
    let answer = 0;
    
    // 1. 진법 변환
    let num = n.toString(k);
    
    // 2. 0기준으로 파싱하기
    let zeroSplit = num.split(0);
    
    // 3. 소수 찾기
    for(let i = 0; i < zeroSplit.length; i++) {
        if(isPrime(zeroSplit[i])) answer++;
    }
    
    return answer;
}
    
function isPrime(num) {
    if(num === 0 || num === 1) return false;
    for(let i = 2; i <= parseInt(num/2); i++) {
        if(num%i === 0) return false; 
    }
    return true;
}


// 두번째 푼 풀이
/*
    isPrime 함수 내에서 (num === 0 || num === 1)인 조건을
    (num <= 1)로 바꿔 주었더니 정확성이 88.1로 올랐다.
*/
function solution(n, k) {
    let answer = 0;
    
    // 1. 진법 변환
    let num = n.toString(k);
    
    // 2. 0기준으로 파싱하기
    let zeroSplit = num.split(0);
    
    // 3. 소수 찾기
    for(let i = 0; i < zeroSplit.length; i++) {
        if(isPrime(zeroSplit[i])) answer++;
    }
    
    return answer;
}
    
function isPrime(num) {
    if(num <= 1) return false;
    for(let i = 2; i <= parseInt(num/2); i++) {
        if(num%i === 0) return false; 
    }
    return true;
}


// 최종 풀이
/*
    isPrime 함수에서 parseInt()를 사용하는 것이 아닌 Math.sqrt()를 이용했더니 모든 테케를 통과했다.
    -> Number 자료형을 넘는 범위 때문인가..?
*/
function solution(n, k) {
    let answer = 0;
    
    // 1. 진법 변환
    let num = n.toString(k);
    
    // 2. 0기준으로 파싱하기
    let zeroSplit = num.split(0);
    
    // 3. 소수 찾기
    for(let i = 0; i < zeroSplit.length; i++) {
        if(isPrime(zeroSplit[i])) answer++;
    }
    
    return answer;
}
    
function isPrime(num) {
    if(num <= 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num%i === 0) return false; 
    }
    return true;
}