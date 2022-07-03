// 내 풀이
/*
    일단 공약수가 없는 경우의 최소공배수를 구하는 방법은 .. 모두 곱하기
*/
function solution(arr) {
    let answer = arr.reduce((acc, v) => acc *= v);
}



// 다른 풀이
/*
    링크 : https://terms.naver.com/entry.naver?docId=3338368&cid=47324&categoryId=47324
    - 다 이 비슷한 풀이인데 어떻게 푼건지 이해가 잘 안간다ㅏㅏ
*/
function nlcm(num) {
    return num.reduce((a,b) => a*b / gcd(a,b))  
}
   
function gcd(a, b) {
    return a % b ? gcd(b, a%b) : b
}