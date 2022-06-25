// 내 풀이
/*
    forEach와 toUpperCase(), toLowerCase(), indexOf()를 쓰려했음
    그러나 z에서 다시 맨 앞으로 넘어가는 걸 구현하지 못함
*/
function solution(s, n) {
    let answer = '';
    let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let lowerAlphabet = upperAlphabet.map((v) => v.toLowerCase());
    
    s.split('').forEach((v) => {
        if(v === ' ') answer += ' ';
        if(v === v.toUpperCase()) {
            let nowIndex = upperAlphabet.indexOf(v);
            answer += upperAlphabet[nowIndex + n];
        } else if(v === v.toLowerCase()) {
            let nowIndex = lowerAlphabet.indexOf(v);
            answer += lowerAlphabet[nowIndex + n];
        }
    });
    console.log(answer);
    // return answer;
}


// 아스키코드 없이 풀기
/*
    방법은 간단했음
    - 그냥 해당 문자열의 길이만큼 다시 빼주면 z에서 a로 넘어가진다!
*/
function solution(s, n) {
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lower = upper.toLowerCase();
    let answer= '';

    for(let i =0; i <s.length; i++){
        let v = s[i];
        if(v == ' ') {
            answer += ' '; 
            continue;
        }
        let vDistinction = upper.includes(v) ? upper : lower;
        let index = vDistinction.indexOf(v)+n;
        if(index >= vDistinction.length) index -= vDistinction.length;
        answer += vDistinction[index];
    }
    return answer;
}



// 다른 풀이 보고 다시 풀어보기
/*
    - 아스키코드로 푸는 문제
    - 대문자: 65~90
    - 소문자: 97~122
    - `string.charCodeAt()`으로 아스키코드를 알아내고, `String.fromCharCode(번호)`로 다시 문자로 바꿔줌
*/
function solution(s, n) {
    return s.split('').map((v) => {
        if(v === ' ') return ' ';
        const nowCode = v.charCodeAt();
        if((nowCode + n > 90 && nowCode <= 90) || nowCode + n > 122) { // 대소문자 범위를 벗어나면 
            return String.fromCharCode(nowCode + n - 26); // -26을 해주어서 z에서 a로 넘어갈 수 있게 해줌
        } else {
            return String.fromCharCode(nowCode + n);
        }
    }).join('');
}