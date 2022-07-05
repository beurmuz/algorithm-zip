// 내 풀이
/*
    정확도 44..
    실행하면 돌아가긴하지만 히든테케에서 걸림

    cf. https://thisthat.dev/string-char-at-vs-string-bracket-notation/
    공백을 기준으로 split을 하게 되면 '빈 문자열'이 요소로 있는 경우가 생기고, 
    해당 요소를 배열 인덱스로 접근할 경우 undefined를 반환하기 때문에 toUpperCase()에서 런타임 오류가 발생하는 것
*/
function solution(s) {
    const sSplit = s.toLowerCase().split(' ');
    let answer = sSplit.map((a) => {
        let x = a.split('');
        x[0] = x[0] === ' ' ? ' ' : x[0].toUpperCase();
        return x.join('');
    }).join(' ');
    return answer;
}


// 07.05 다시 풀기
function solution(s) {
  let answer = '';
  s = s.toLowerCase();
  for(let i = 0; i < s.length; i++) {
      if (i === 0 || s[i-1] === ' ') {
          answer += s[i].toUpperCase();
      } else {
          answer += s[i];
      }
  }
  return answer;
}


// 다른 풀이
/*
    charAt(0)을 사용한 방법
    substring(1)은 해당 문자열 1번인덱스부터 끝까지를 의미함
    
    word[0]이 빈 문자열이면 undefined를,  word.charAt(0)은 빈 문자열이면 빈 문자열을 반환
*/
function solution(s) {
    let answer = s.split(' ').map((word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(' ')
    return answer;
}


// 다른 풀이
function solution(s) {
    var answer = '';
    for (let i = 0; i < s.length; i++) {
      if (i === 0 || s[i-1] === " ") {
        answer += s[i].toUpperCase();
      } else {
        answer += s[i].toLowerCase();
      }
    }
    return answer;
}
