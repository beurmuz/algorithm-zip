'use strict';

function solution(a, b, c){
    let longestSide = 0;
    let oneSide = 0;
    let twoSideSum = 0;
    let answer = "";

    function Distinction(longestSide, twoSideSum) {
        if(longestSide <= twoSideSum) {
            answer = "YES";
        } else {
            answer = "NO";
        }
    }

    if(a<b) {
        longestSide = b;
        oneSide = a;
    } else {
        longestSide = a;
        oneSide = b;
    }

    if(longestSide<c) {
        longestSide = c;
        twoSideSum = a+b;
        Distinction(longestSide, twoSideSum)
    } else { // 만약 가장 긴 변의 길이가 C보다 크면
        twoSideSum = oneSide + c;
        Distinction(longestSide, twoSideSum)
    }
    return answer;
}

console.log(solution(13, 31, 17));