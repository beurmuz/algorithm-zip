'use strict';

function solution(n) {
    const s = ''+n;
    if(s.length % 2 !== 0) return false; // 문자열이 반으로 나눠지지 않는 경우 처리

    const lt = s.substring(0, (s.length+1)/2);
    const rt = s.substring((s.length)/2);

    let ltAcc = 0, rtAcc = 0;

    for(let i = 0; i < lt.length; i++) {
        ltAcc += lt[i]*1;
        rtAcc += rt[i]*1;
    }

    return ltAcc === rtAcc ? 'LUCKY' : 'READY';

}

console.log(solution(123402));