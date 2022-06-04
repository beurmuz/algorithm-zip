/*
    (내 풀이법)
    처음에 작성한 코드
*/
function solution(phone_number) {
    let n = phone_number.length - 4;
    let lastNumber = phone_number.slice(-4);
    let answer = '*'.repeat(n).toString() + lastNumber;
    return answer;
}

/*
    (내 풀이법)
    더 간결하게 정리한 코드
    - .repeat에서 문자열 형태로 출력되니 .toString을 할 필요가 없음
*/
function solution(phone_number) {
    let answer = '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
    return answer;
}

/*
    정규표현식 이용방법
*/
function hide_numbers(s) {
    return s.replace(/\d(?=\d{4})/g, "*");
}

/*
    전개 연산자로 배열 n을 0부터 n.length-4까지 *로 채운 후, 남은거 join()하기
*/
function solution(phone_number) {
    let answer = [...phone_number].fill("*",0,phone_number.length-4).join("");
    return answer;
}