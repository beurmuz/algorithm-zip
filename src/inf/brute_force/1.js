'use strict';

function solution(n, arr){
    let answer, max=Number.MIN_SAFE_INTEGER;
    // let partition = ""; // 각 수를 더할 합
    // let sumArray = []; // 각 더한 값을 푸시할 배열
    // let listArr = [];
    // for(let i = 0; i < arr.length; i++) {
    //     let sum = 0;
    //     partition += String(arr[i]);
    //     for(let j of partition) {
    //         sum += parseInt(j);
    //         if(max < sum) max = sum;
    //     }
    //     sumArray.push(sum);
    //     partition = "";
    //     sum = 0;
    // }
    // // console.log(sumArray);
    // // console.log(max);
    // for(let i = 0; i <sumArray.length; i++) {
    //     if(max===sumArray[i]) {
    //         listArr.push(arr[i]);
    //     }
    // }
    // answer = Math.max(...listArr);

    // [방법2] 숫자 자체로 풀기. 10으로 나눈 후 나머지 값을 이용해서 합 더하기
    // for(let x of arr) {
    //     let sum = 0, tmp = x;
    //     while(tmp) {
    //         sum+=(tmp%10); // 나머지 값 sum에 저장
    //         tmp = Math.floor(tmp/10);  // tmp는 몫
    //     }
    //     // console.log(sum); // 자릿수 합
    //     if(sum>max) {
    //         max = sum;
    //         answer = x
    //     } else if(sum===max) {
    //         if(x>answer) answer = x;
    //     }
    // }

    // [방법3] 내장함수로 끝내기 (split이용하기)
    for(let x of arr) {
        let sum = x.toString().split("").reduce((a,b) => a+Number(b),0);
        if(sum>max) {
            max = sum;
            answer = x
        } else if(sum===max) {
            if(x>answer) answer = x;
       }
    }
    return answer;
}

console.time("소요 시간");
let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
console.timeEnd("소요 시간");