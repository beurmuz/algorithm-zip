'use strict';

function isPrime(num){
    if(num===1) {
        return false;
    }
    for(let i = 2; i < parseInt(num/2); i++) {
        if(num%i===0) {
        return false;
        }
    }
    return true;
}

function solution(arr){
    let answer=[];
    // let element ="";
    // let reverseArr = [];
    // // 각 자연수 뒤집기
    // for(let i = 0; i<arr.length; i++) {
    //     element = parseInt(String(arr[i]).split('').reverse().join(''));
    //     reverseArr.push(element);
    //     element = "";
    // }
    // console.log(reverseArr);  
    
    // [방법2]
    for(let x of arr) {
        // let res = 0;
        // while(x) {
        //     let t = x%10;
        //     res=res*10+t; // 뒤집어짐
        //     x=parseInt(x/10); 

        //[방법3]
        let res = Number(x.toString().split('').reverse().join(''));
        if(isPrime(res)) answer.push(res); // 뒤집은 숫자를 푸시해라
    }
    return answer;
}

console.time("시간");
let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
console.timeEnd("시간");