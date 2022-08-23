'use strict';

// 첫번째 풀이
/*
    겹치는 갯수 구하는 법 : 가로 + 세로 - 최대공약수
*/
function solution(w, h) {
    let gcd = greatestCommonDivisor(w, h);
    let answer = (w*h) - (w+h-gcd);
    return answer;
}

let greatestCommonDivisor  = (n1, n2) => {
    let gcd = 1;
    for(let i = 2; i <= Math.min(n1, n2); i++) {
        if(n1%i === 0 && n2%i === 0) {
            gcd = i;
        }
    }
    return gcd;
}


// 가장 직관적인 풀이: 기울기 이용하기
/*
    기울기는 일차방정식을 이용해 구할 수 있다. y = mx+b
*/
function solution(w,h){
    const slope = h / w; // 높이를 가로로 나누고 
    let result = 0; // 사용할 수 없는 사각형의 개수

    for(let i = 1; i <= w; i++){
        result += Math.ceil(slope * i); // 기울기 * x(1~w)를 모두 더해주면 대각선 밑에 있는 사각형의 개수를 구할 수 있음
        // 만약 slope*i가 1.5가 나온다면, 사실상 2개의 사각형을 쓸 수 없는 것과 같으므로 올림처리를 해주어야함 
    }

    return ((h * w) - result) * 2; // 사각형의 총 개수는 h*w이므로 h*w-result는 위에 대각선 기준 위에 있는 사각형의 개수를 표현한다는 말. 아래도 고려해야하니 *2
}


// 최대공약수 쉽게 구하기
/*
    만약 a = 6, b = 3이면 gcd(3, 6%3). 이는 아래의 코드를 단축한 것과 같음
    let gcd = (a, b) => {
        while(b != 0){ // b가 0이 되면 반복문을 빠져나오고 a를 리턴함 (이때 a는 최대공약수)
            let r = a % b;
            [a, b] = [b, r]; // 구조분해 할당
        }
        return a;
    }
*/
function solution(w,h){
    const gcd = (a, b) => {
        return b === 0 ? a : gcd(b, a % b);
    };

    return w * h - (w + h - gcd(w, h));
}