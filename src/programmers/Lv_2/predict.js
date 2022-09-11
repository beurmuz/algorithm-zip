'use strict';

// 처음 내 풀이
/* 
    간단하게 둘이 만나면 된다면 a/2 === 1일때, b/2 === 2일때라고 생각했다.
    -> 그래서 Math.ceil(a/2) ... 이걸로 count를 셌는데 정확성 17.6이 나왔다;
*/
function solution(n,a,b) {
    let count = 1;
    
    while(a !== 1) {
        if(a === 1 && b === 2) break;
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        count++;
    }
    return count;
}


// 정답
/*
    위의 코드랑 굉장히 유사하지만, while문의 조건을 바꿔주었다.
    원래 코드에선 a === 1이 되면 바로 반복문을 멈추게끔 해주었는데, 이렇게되면 a === 1, b === 2 일때 반복문이 종료된다.
    a와 b가 다른 경우 같은 경기를 치루는게 아니라, 다음 경기를 치루는 것이므로 둘다 같은 숫자가 나와야 같은 경기에서 만나게 되는 것이다.
    때문에 a와 b가 다른 경우 반복문을 돌면서 a와 b가 같은 경우 count를 증가시키지 않고 곧바로 반복문을 빠져나올 수 있도록 해주었다.
*/
function solution(n,a,b) {
    let count = 1;
    
    while(a !== b) {
        a = Math.ceil(a / 2); // 새롭게 갱신하는 a와 b는 이긴 경우 다음으로 가지게 될 번호를 의미한다. 
        b = Math.ceil(b / 2);
        if(a === b) break;
        count++;
    }
    return count;
}