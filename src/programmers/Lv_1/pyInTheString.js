// 내 코드 (제출한 코드)
/*
    toLowerCase(), split(), forEach()를 이용해 풀었음
*/
function solution(s){
    let pCount = 0, yCount = 0;
    s.toLowerCase().split('').forEach((x) => {
        if(x === 'p') pCount++;
        else if(x === 'y') yCount++;
    });
    return (pCount === yCount) || (pCount === 0 && yCount === 0) ? true : false;
}



// split 새롭게 써보기
/*
    split에 separator를 줘서 나누면 리턴되는 배열의 길이는 일치되는 개수 + 1이라 비교 가능함
    (ex. s에 p가 2개 들어있다면, s.toLowerCase().split('p').length는 3이 나옴 (2+1))
*/
function solution(s){
    return s.toLowerCase().split('p').length === s.toLowerCase().split('y').length;
}



// 정규표현식 이용하기
/*
    match로 s에서 대소문자 구분없이 p 찾기
    - /찾을 문자/
    - i는 대소문자 구분없이 찾겠다는 뜻
    - g는 모든 문자를 찾겠다는 뜻
    - match를 이용하면 정규표현식에 해당하는 값들이 배열 형태로 return되므로 리턴한 배열의 길이를 비교하면 됨
*/
function solution(s) {
    return s.match(/p/ig).length == s.match(/y/ig).length;
}