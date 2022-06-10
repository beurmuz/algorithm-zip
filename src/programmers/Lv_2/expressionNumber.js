// 내 풀이
/* 
    처음에 조건문을 따로 써줬더니 효율성 검사에서 실패가 떴음
    -> 조건문을 아래처럼 변경했더니  통과함

    if(acc >= n){
        if(acc === n) answer++;
        break;
    }
*/
function solution(n) {
    let answer = 0;
    for(let i = 1; i <= n; i++) {
        let acc = 0;
        for(let j = i; j <= n; j++) {
            acc += j;
            if(acc >= n){
                if(acc === n) answer++;
                break;
            }
        }
    }
    return answer;
}



// 다른 사용자 풀이
// n의 홀수 약수 개수만 구해도 구할 수 있다고 함 (정수론..?)
function solution(num) {
    var answer = 0;

  for(var i=1; i<=num; i++) {
    if (num%i == 0 && i%2 == 1)
      answer++
  }
    return answer;
}