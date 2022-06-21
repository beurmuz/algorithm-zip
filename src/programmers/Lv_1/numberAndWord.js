// 내 풀이
/*
    처음에 else문에서 12번 코드만 작성했다가 코드를 제출하니 일부 테스트케이스에서 실패가 뜬것을 볼 수 있었다.
    뭔가 중복으로 나온 경우가 처리되지 않은 것 같아 정규표현식으로 모든 문자가 바뀌게끔 바꿔주었다.
*/
function solution(s) {
    let answer = 0;
    let englishList = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    for(let i = 0; i < englishList.length; i++) {
        if(!s.includes(englishList[i])) continue;
        else {
            // s = s.replaceAll(englishList[i], i);
            let findText = new RegExp(englishList[i], 'g');
            s = s.replace(findText, i);
        }
    }
    answer = s*1;
    return answer;
}


// 다른 풀이
/*
    정규표현식을 사용하지 않고 split과 join으로만 풀어보기
    - 해당 문자가 있다면 그 문자를 기준으로 split을 함 -> 해당 문자가 공백으로 나옴
    - split된 것들을 i로 join해주면 ''+i+남은값 -> 결국 i+남은값이 됨
*/
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        if(!answer.includes(numbers[i])) continue;
        else {
            let arr = answer.split(numbers[i]);
            answer = arr.join(i);
        }
    }

    return Number(answer);
}


// Set으로 풀기
/*
    가장 깔끔한 방법인 것 같기도 하다.
*/
function solution(s) {
    let charSet = {
        "zero" : 0,
        "one" : 1,
        "two" : 2,
        "three" : 3,
        "four" : 4,
        "five" : 5,
        "six" : 6,
        "seven" : 7,
        "eight" : 8,
        "nine" : 9,
    }

    for(let [key, value] of Object.entries(charSet)) {
        let re = new RegExp(`${key}`,"g");
        s = s.replace(re, value);
    }
    return parseInt(s);
}