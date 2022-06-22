// 내가 푼 코드
function solution(s) {
    let answer = s.split(' ').map((word) => word.split('').map((letter, index) => index%2 === 0 ? word[index].toUpperCase() : word[index].toLowerCase()).join('')).join(' ');
    return answer;
}


// for문쓰기
function solution(s){
    let result = "";
    let num = 0;

    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) == " "){
            num = 0;
            result += " ";
            continue;
        } else if(num % 2 == 0){
            result += (s.charAt(i)).toUpperCase();
            num++;
        } else{
            result += (s.charAt(i)).toLowerCase();
            num++; 
        }
    }
    return result;
}