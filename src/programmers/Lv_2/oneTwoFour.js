// 이해하기 쉬운 풀이
/*
    1~3의 경우: 몫을 0으로,
    4~6의 경우: 몫을 1로,
    7~9의 경우: 몫을 2로 만들고 싶지만
    3, 6, 9 (3의 배수) 몫이 +1 되어 나오므로 모든 수에 -1씩 해주면

    0, 1, 2는 몫이 0으로,
    3, 4, 5는 몫이 1로,
    6, 7, 8은 몫이 2로 나오게 됨
*/
function solution(n) {
    let answer = '';
    while(n>0){
        if(n%3==0) { // 나머지가 0이면 0이 붙고
            answer='4'+answer; 
            n=n/3-1;
        } else if(n%3==1) { // 나머지가 1이면 1이
            answer='1'+answer;
            n=Math.floor(n/3);
        } else { // 나머지가 2이면 2를
            answer='2'+answer;
            n=Math.floor(n/3);
        }
    }
    return answer;
}


// 위의 코드 줄이기
function solution(n) {
    let answer = '';
    const arr = ['4','1','2']; // 4로 나눴을때 인덱스 값 0, 1로 나눴을 때 인덱스값1, 2로 2 이용하기
    while(n>0){
        answer = arr[n%3] + answer;
        n = Math.floor((n-1)/3);
    }    
    return answer;
}

console.log(solution(3));