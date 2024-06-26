// 22.06.29 내 풀이
/*
    replace와 substring을 이용한 풀이
    모두 10초 미만대로 나옴
*/
function solution(strings, n) {
    let answer = strings;
    for(let i = 0; i < strings.length; i++) {
        strings[i] = strings[i][n] + strings[i];
    }
    strings.sort();
    for(let i = 0; i < strings.length; i++) {
        strings[i] = strings[i].substring(1);
        // substring 대신 replace를 쓸 수도 있음
        // strings[i] = strings[i].replace(strings[i][0],"");
    }
    return answer;
}


// localeCompare을 이용한 풀이
/*
    s1[n]과 s2[n]이 같으면 문자열 자체의 순서로 정렬하고, 다르면 해당 문자로 정렬하기
    localeCompare은 theory String부분 참고하기!
*/
function solution(strings, n) {
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}


// localeCompare()을 쓰지 않고 푼 방법
/*
    사실 localeCompare()과 똑같이 return함
    즉, 같은원리라는 것!
*/
function solution(strings, n) {
    return strings.sort((a, b) => {
      if (a[n] < b[n]) return -1;
      if (a[n] > b[n]) return 1;
      if (a[n] === b[n]) return a < b ? -1 : 1;
      return 0;
    });
  }


// push와 replace로 푼 풀이
function solution(strings, n) {
    var answer = [];
    for (var i = 0; i < strings.length; i++) {
        var chu = strings[i][n];
        strings[i] = chu + strings[i];
    }
    strings.sort();
    for (var j = 0; j < strings.length; j++) {
        strings[j] = strings[j].replace(strings[j][0],"");
        answer.push(strings[j])
    }

    return answer;
}