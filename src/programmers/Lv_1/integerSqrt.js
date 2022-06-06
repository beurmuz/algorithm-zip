/* 
    내 풀이
    - 1로 나눈 나머지가 깔끔하지 않으면 제곱근이라는 뜻
*/

function solution(n) {
    let originalN = Math.sqrt(n);
    if(originalN % 1 === 0) return (originalN+1)*(originalN+1);
    else return -1;
}


/*
    내장함수 없이 푸는 방법
    - 
*/
function solution(n) {
    var x = 0;
    while (x*x < n){
          x++;
    }
    if (x*x == n){
        return (x+1) * (x+1); 
    } else {
        return -1;
    }
}